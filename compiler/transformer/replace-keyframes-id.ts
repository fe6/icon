/** @format */

import {
  SvgShapeAttr,
  SvgStyleSelectorType,
  IReplaceIdTransformerOptions,
  ISvgStyleAttr,
  ISvgInlineStyleAttr,
} from '../types';
import { replaceAnimation, splitAnimation } from '../util';
import { ITransformPlugin } from './base';
import { replaceSelectorIdTransformer } from './replace-id';

function replaceStr(str: string, sp, replace) {
  const list = str.split(sp);
  const result: string[] = [];
  list.forEach((item, i) => {
    if (i === 0) {
      result.push(item);
    } else if (i !== list.length - 1) {
      result.push(sp);
      result.push(item);
    } else {
      result.push(replace);
      result.push(item);
    }
  });
  return result.join('');
}

const replaceKeyframesId = (attr: ISvgStyleAttr | ISvgInlineStyleAttr, map) => {
  const { type, name, expression } = attr;

  if (type === SvgShapeAttr.DYNAMIC) {
    return attr;
  }

  if (name === 'animation-name') {
    const list = expression
      .split(',')
      .map((item) => {
        return item.trim();
      })
      .map((item) => {
        return ''
          .concat(map[item].propName, " + '")
          .concat(map[item].newId, "'");
      });
    return {
      ...attr,
      type: SvgShapeAttr.DYNAMIC,
      expression: list.join(" + ',' + "),
    };
  }

  if (name === 'animation') {
    const _list = splitAnimation(expression);

    let has = false;
    const res: string[] = [];

    _list.forEach((key) => {
      const r = replaceAnimation(key);

      if (r == null) {
        res.push(`'${key}'`);
        return;
      }

      has = true;
      res.push(
        `'${replaceStr(
          key,
          r,
          "' + ".concat(map[r].propName, " + '").concat(map[r].newId, "' + '"),
        )}'`,
      );
    });

    if (!has) {
      return attr;
    }

    if (res.length === 1) {
      return {
        ...attr,
        type: SvgShapeAttr.DYNAMIC,
        expression: res[0],
      };
    }

    return {
      ...attr,
      type: SvgShapeAttr.DYNAMIC,
      expression: res.join(" + ',' + "),
    };
  }

  return attr;
};

export const replaceKeyframesIdTransformer = (
  map: IReplaceIdTransformerOptions,
): ITransformPlugin => {
  return {
    rule: {
      attr: (_attr) => replaceKeyframesId(_attr, map) as ISvgStyleAttr,
    },
    '*': {
      style: (attr) => replaceKeyframesId(attr, map) as ISvgInlineStyleAttr,
    },
    keyframes: {
      selector: (attr) => {
        return replaceSelectorIdTransformer(
          attr,
          map,
          SvgStyleSelectorType.IDENTIFIER,
        );
      },
    },
  };
};
