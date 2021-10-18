/**
 * @format
 * @file util 工具函数
 */

import tinycolor from 'tinycolor2';
import csstree, { AtrulePrelude } from 'css-tree';

// 颜色相关 start

/**
 * 比较2个颜色是否相等
 * @param color1
 * @param color2
 */

export function isColorEqual(color1: string, color2: string): boolean {
  if (color1 === color2) {
    return true;
  }

  if (color1 === 'none' || color2 === 'none') {
    return false;
  }

  return tinycolor.equals(color1, color2);
}

export const color2Hsl = (str: string): tinycolor.ColorFormats.HSLA | null => {
  const color = tinycolor(str);

  if (color.isValid()) {
    return color.toHsl();
  }

  return null;
};
// 颜色相关 end

export const camelCase = (str: string, prefix = '-'): string => {
  return str.replace(new RegExp(`[${prefix}]` + '(.)', 'gi'), (_, letter) =>
    letter.toUpperCase(),
  );
};

export const pascalCase = (str: string, prefix = '-'): string => {
  str = camelCase(str, prefix);
  return ''.concat(str[0].toUpperCase()).concat(str.slice(1));
};

export const getKeys = <T>(obj: T): string[] => {
  return Object.keys(obj);
};

// keyframes 相关 start
export function replaceAnimation(str: string) {
  const tokens = csstree.parse(str, {
    parseValue: true,
    context: 'value',
  }) as AtrulePrelude;
  const list = tokens.children.toArray();
  let hasTimingFunction = false;
  let hasCount = false;
  let hasDirection = false;
  let hasMode = false;
  let hasState = false;

  for (const item of list) {
    if (item.type === 'Function') {
      hasTimingFunction = true;
      continue;
    }

    if (item.type === 'Number') {
      hasCount = true;
      continue;
    }

    if (item.type === 'Identifier') {
      const { name } = item;

      if (
        !hasTimingFunction &&
        /^(ease|ease-in|ease-out|ease-in-out|linear)$/.test(name)
      ) {
        hasTimingFunction = true;
        continue;
      }

      if (!hasCount && name === 'infinite') {
        hasCount = true;
        continue;
      }

      if (
        !hasDirection &&
        /^(normal|reverse|alternate|alternate-reverse)$/.test(name)
      ) {
        hasDirection = true;
        continue;
      }

      if (
        !hasDirection &&
        /^(normal|reverse|alternate|alternate-reverse)$/.test(name)
      ) {
        hasDirection = true;
        continue;
      }

      if (!hasMode && /^(none|forwards|backwards|both)$/.test(name)) {
        hasMode = true;
        continue;
      }

      if (!hasState && /^(running|paused)$/.test(name)) {
        hasState = true;
        continue;
      }

      if (!/^(unset|initial|inherit|none)$/.test(name)) {
        return name;
      }
    }
  }

  return null;
}

export function splitAnimation(str: string) {
  const result: string[] = [];
  let inFunction = 0;
  let current = '';

  for (const char of str) {
    if (char === ',' && !inFunction) {
      result.push(current);
      current = '';
      continue;
    }

    if (char === '(') {
      inFunction++;
    }

    if (char === ')') {
      inFunction--;
    }

    current += char;
  }

  result.push(current);
  return result;
}
// keyframes 相关 end

// uuid start
/**
 * 生成4位随机数
 */

const s4 = () =>
  (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

/**
 * 生成全局唯一标识符
 *
 * @return 返回一个guid
 */
export const guid = () =>
  `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
// uuid end
