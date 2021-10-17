/**
 * @format
 * @file DynamicColorTransformer 将静态的颜色识别成变量
 */

import {
  SvgShapeAttr,
  ISvgInlineStyleAttr,
  ISvgStyleAttr,
  ISvgAttr,
  ISvgElementInfo,
  TTransfromInnerBase,
  TTransfromInnerOptionsBase,
} from '../types';
import { isColorEqual } from '../util';
import { ITransformPlugin } from './base';

export interface IDynamicColorTransformerArray {
  prefix?: boolean;
  propName?: string;
  array: true;
  prop?: string;
  colors: string[];
  ignore?: (info: ISvgElementInfo) => boolean;
}

export interface IDynamicColorTransformerField {
  prefix?: boolean;
  propName?: string;
  array?: false;
  colors: Array<{
    color: string;
    prop: string;
  }>;
  ignore?: (info: ISvgElementInfo) => boolean;
}

export type IDynamicColorTransformerOptions =
  | IDynamicColorTransformerArray
  | IDynamicColorTransformerField;

const baseDynamicColor = (
  attr: TTransfromInnerOptionsBase,
  options: IDynamicColorTransformerOptions,
  ignore?: boolean,
): TTransfromInnerBase => {
  const prefix = options.prefix || false;
  const colors = options.array
    ? options.colors.map((item, i) => ({
        color: item,
        prop: `${options.prop || 'colors'}[${i}]`,
      }))
    : options.colors;
  const name = attr.name;
  const type = attr.type;
  const expression = attr.expression; // 不处理动态属性，不处理忽略的元素

  if (type === SvgShapeAttr.DYNAMIC || !ignore) {
    return attr;
  }

  if (name === 'stroke' || name === 'fill') {
    const color = colors.find((item) => isColorEqual(item.color, expression));

    if (color != null) {
      return {
        ...attr,
        type: SvgShapeAttr.DYNAMIC,
        expression:
          (prefix ? `${options.propName || 'props'}.` : '') + color.prop,
      };
    }
  }

  return attr;
};

export const dynamicColorTransformer = (
  options: IDynamicColorTransformerOptions,
): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr: ISvgAttr): ISvgAttr | null =>
        baseDynamicColor(
          _attr,
          options,
          !(options.ignore && options.ignore(_attr.owner)),
        ) as ISvgAttr | null,
      style: (attr: ISvgInlineStyleAttr): ISvgInlineStyleAttr | null =>
        baseDynamicColor(attr, options, true) as ISvgInlineStyleAttr | null,
    },
    rule: {
      attr: (_attr2: ISvgStyleAttr): ISvgStyleAttr | null =>
        baseDynamicColor(_attr2, options, true) as ISvgStyleAttr | null,
    },
  };
};
