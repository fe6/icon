/**
 * @format
 * @file RemoveIdTransformer 删除对应的Id
 */

import {
  SvgShapeAttr,
  SvgStyleSelectorType,
  ISvgStyleSelector,
  IReplaceIdTransformerOptions,
  TTransfromInnerBase,
  TTransfromInnerOptionsBase,
  ISvgAttr,
  ISvgInlineStyleAttr,
  ISvgStyleAttr,
} from '../types';
import { ITransformPlugin } from './base';

export const REFERENCE_PROPS = {
  'clip-path': true,
  'color-profile': true,
  fill: true,
  filter: true,
  'marker-start': true,
  'marker-mid': true,
  'marker-end': true,
  mask: true,
  stroke: true,
};

const replaceAttrIdTransformer = (
  attr: TTransfromInnerOptionsBase,
  map: IReplaceIdTransformerOptions,
): TTransfromInnerBase => {
  const { type, expression, name } = attr; // 不处理动态属性

  if (type === SvgShapeAttr.DYNAMIC) {
    return attr;
  }

  if (name in REFERENCE_PROPS && /url\(#([^)]+)\)/g.test(expression)) {
    return {
      ...attr,
      type: SvgShapeAttr.DYNAMIC,
      expression: expression.replace(/url\(#([^)]+)\)/g, (str, e) => {
        if (map[e]) {
          map[e].used = true;
          return `\`url(#\$\{${map[e].propName}\}${map[e].newId})\``;
        } // 引用的外部Id

        return str;
      }),
    };
  }

  return attr;
};

export const replaceSelectorIdTransformer = (
  attr: ISvgStyleSelector,
  map: IReplaceIdTransformerOptions,
  targetSelectorType: SvgStyleSelectorType.ID | SvgStyleSelectorType.IDENTIFIER,
) => {
  const { type, expression, selectorType } = attr;

  if (type === SvgShapeAttr.DYNAMIC) {
    return attr;
  }

  if (selectorType === targetSelectorType) {
    if (targetSelectorType === SvgStyleSelectorType.ID) {
      map[expression.slice(1)].used = true;
      return {
        ...attr,
        type: SvgShapeAttr.DYNAMIC,
        expression: `\`#\$\{${map[expression.slice(1)].propName}\}${
          map[expression.slice(1)].newId
        }\``,
      };
    }

    return {
      ...attr,
      type: SvgShapeAttr.DYNAMIC,
      expression: `${map[expression].propName} + '${map[expression].newId}'`,
    };
  }

  return attr;
};

export const replaceIdTransformer = (
  map: IReplaceIdTransformerOptions,
): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr) => {
        const { name, type, expression } = _attr;

        if (type === SvgShapeAttr.DYNAMIC) {
          return _attr;
        }

        if (name === 'id') {
          return {
            ..._attr,
            type: SvgShapeAttr.DYNAMIC,
            expression: `${map[expression].propName} + '${map[expression].newId}'`,
          };
        }

        if (
          name === 'role' ||
          name === 'xlink:href' ||
          name === 'href' ||
          name === 'arcrole'
        ) {
          const e = expression.slice(1);

          if (expression.charAt(0) === '#' && map[e]) {
            map[e].used = true;
            return {
              ..._attr,
              type: SvgShapeAttr.DYNAMIC,
              expression: `#\${${map[e].propName}\}${map[e].newId}`,
            };
          } // 引用的外部Id

          return _attr;
        }

        return replaceAttrIdTransformer(_attr, map) as ISvgAttr | null;
      },
      style: (attr) =>
        replaceAttrIdTransformer(attr, map) as ISvgInlineStyleAttr | null,
    },
    rule: {
      attr: (_attr2) =>
        replaceAttrIdTransformer(_attr2, map) as ISvgStyleAttr | null,
      selector: (attr) =>
        replaceSelectorIdTransformer(attr, map, SvgStyleSelectorType.ID),
    },
  };
};
