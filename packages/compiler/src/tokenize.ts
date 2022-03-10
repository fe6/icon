/** @format */

import { SvgShapeAttr, SvgStyleSelectorType, ISvgStyleSelector } from './types';
import { getKeys } from './util';

/**
 * @file 用于表示空白字符
 */

// 用来表示标识符
const whitespace = '[\\x20\\t\\r\\n\\f]';

// 用于匹配CSS属性转义字符
const identifier = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+';

// 用于安全的去除选择器的空格
const rcombinators = new RegExp(
  `^${whitespace}*([>+~]|${whitespace})${whitespace}*`,
);

// 基本选择器
const rtrim = new RegExp(
  `^${whitespace}+|((?:^|[^\\\\])(?:\\\\.)*)${whitespace}+$`,
  'g',
);

// interface IToken {
//   expression?: string,
//   type?: 'const',
//   selectorType?: string,
//   children?: ISvgStyleSelector[]
// }

const expr = {
  // ID选择器
  ID: new RegExp(`^#(${identifier})`),
  // 类选择器
  CLASS: new RegExp(`^\\.(${identifier})`),
  // 标签选择器
  TAG: new RegExp(`^(${identifier}|[*])`),
  // 属性选择器
  ATTR: new RegExp(
    `^\\[${
      // 匹配属性名
      whitespace
    }*(${identifier})(?:${
      // 匹配属性符号
      whitespace
    }*([*^$|!~]?=)${
      // 匹配属性值
      whitespace
    }*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)\"|(${identifier}))|)${
      // 吸收多余的空白
      whitespace
    }*\\]`,
  ),
  // 位置选择器
  CHILD: new RegExp(
    `${
      // 匹配CSS3子代选择器的类型
      '^:' +
      // 匹配值为nth-child时的几种不同的写法
      '(only|first|last|nth|nth-last)-(child|of-type)' +
      '(?:\\('
    }${whitespace}*(even|odd|(([+-]|)(\\d*)n|)${whitespace}*(?:([+-]|)${whitespace}*(\\d+)|))${whitespace}*\\)|)`,
    'i',
  ),
  // 伪类选择器
  PSEUDO: new RegExp(
    `${
      // 匹配CSS3子代选择器的类型
      '^:' +
      // 匹配lang或者not的属性值
      '(empty|focus|target|enabled|disabled|checked|root|lang|not)' +
      '(?:\\('
    }${whitespace}*(.+)${whitespace}*\\)|)`,
    'i',
  ),
};

// 用于匹配标签选择器的正则表达式
const rcomma = new RegExp(`^${whitespace}*,${whitespace}*`);

// 解码CSS属性转义字符
const runescape = new RegExp(
  `\\\\([\\da-f]{1,6}${whitespace}?|(${whitespace})|.)`,
  'ig',
);

// 用于匹配分组选择器的正则表达式
const unescapeCSS = (str: string): string => {
  return str.replace(runescape, (_, escaped, escapedWhitespace) => {
    const high = Number(`0x${escaped}`) - 0x10000; // NaN表示不转义

    if (isNaN(high) || escapedWhitespace) {
      return escaped;
    }

    if (high < 0) {
      return String.fromCharCode(high + 0x10000);
    }

    return String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
  });
};

/**
 * 匹配结果预处理
 *
 * @type {Object}
 */
type TProcess = 'ID' | 'CLASS' | 'TAG' | 'ATTR' | 'CHILD';
const process = {
  // ID选择器
  ID: (match: string[]): ISvgStyleSelector => {
    return {
      selectorType: SvgStyleSelectorType.ID,
      type: SvgShapeAttr.CONST,
      expression: match[0],
      children: [],
    };
  },
  // 类选择器
  CLASS: (match: string[]): ISvgStyleSelector => {
    return {
      selectorType: SvgStyleSelectorType.CLASS,
      type: SvgShapeAttr.CONST,
      expression: match[0],
      children: [],
    };
  },
  // 标签选择器
  TAG: (match: string[]): ISvgStyleSelector => {
    return {
      selectorType: SvgStyleSelectorType.TAG,
      type: SvgShapeAttr.CONST,
      expression: match[0],
      children: [],
    };
  },
  // 处理属性选择器
  ATTR: (match: string[]): ISvgStyleSelector => {
    return {
      selectorType: SvgStyleSelectorType.ATTR,
      type: SvgShapeAttr.CONST,
      expression: unescapeCSS(match[0]),
      children: [],
    };
  },
  // 处理位置选择器
  CHILD: (match: string[]): ISvgStyleSelector => {
    return {
      selectorType: SvgStyleSelectorType.CHILD,
      type: SvgShapeAttr.CONST,
      expression: match[0].toLowerCase(),
      children: [],
    };
  },
  // 处理伪类选择器
  PSEUDO: (match: string[]): ISvgStyleSelector | null => {
    match[0] = match[0].toLowerCase();

    if (match[1] !== 'lang' && match[1] !== 'not') {
      if (match[1]) {
        return null;
      }

      return {
        selectorType: SvgStyleSelectorType.PSEUDO,
        type: SvgShapeAttr.CONST,
        expression: match[0],
        children: [],
      };
    }

    if (!match[1]) {
      return null;
    }

    if (match[1] === 'lang') {
      return {
        selectorType: SvgStyleSelectorType.PSEUDO,
        type: SvgShapeAttr.CONST,
        expression: match[0],
        children: [],
      };
    }

    return {
      selectorType: SvgStyleSelectorType.NOT,
      type: SvgShapeAttr.CONST,
      expression: 'not',
      children: tokenize(match[2])[0],
    };
  },
};

/**
 * 对选择器进行词法分析
 * @param {string} selector 选择器字符串
 * @return {Array|null} 如果为空表示解析失败
 */

export const tokenize = (selector: string): ISvgStyleSelector[][] => {
  const groups: ISvgStyleSelector[][] = [];
  let tokens: ISvgStyleSelector[] = [];
  let matched;
  let match: any = '';

  while (selector) {
    // 匹配分组选择器
    match = rcomma.exec(selector);
    if (!matched || match) {
      if (match) {
        selector = selector.slice(match[0].length) || selector;
      }
      tokens = [];
      groups.push((tokens = []));
    }

    matched = undefined; // 匹配关系选择器

    match = rcombinators.exec(selector);
    if (match) {
      matched = match.shift();
      tokens.push({
        expression: matched as string,
        type: SvgShapeAttr.CONST,
        selectorType: match[0].replace(rtrim, ' ') as SvgStyleSelectorType,
        children: [],
      });
      selector = selector.slice((matched as string).length);
    } // 处理基本选择器

    getKeys(expr).forEach((type) => {
      match = expr[type as TProcess].exec(selector);

      if (match) {
        const result = process[type as TProcess](match);
        matched = match.shift();

        if (result == null) {
          throw new Error(`${matched}解析失败`);
        }

        tokens.push(result);
        selector = selector.slice(matched?.length);
      }
    });

    if (!matched) {
      break;
    }
  }

  if (selector) {
    throw new Error(`${selector}解析失败`);
  }

  return groups;
};
