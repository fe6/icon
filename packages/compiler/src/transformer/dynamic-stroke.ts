/**
 * @format
 * @file DynamicTransformer 将动态属性转化成静态属性
 */

import {
  SvgShapeAttr,
  ISvgAttr,
  ISvgInlineStyleAttr,
  ISvgStyleAttr,
  TTransfromInnerBase,
  TTransfromInnerOptionsBase,
} from '../types';
import { ITransformPlugin } from './base';

export interface IDynamicStrokeTransformerOptions {
  prefix?: boolean;
  propName?: string;
  disableStroke?: boolean;
  disableStrokeLinecap?: boolean;
  disableStrokeLinejoin?: boolean;
  strokeWidthName?: string;
  strokeLinecapName?: string;
  strokeLinejoinName?: string;
}

const baseDynamicStroke = (
  attr: TTransfromInnerOptionsBase,
  options: IDynamicStrokeTransformerOptions,
): TTransfromInnerBase => {
  const prefix = options.prefix || false;
  const propName = options.propName || 'props';
  const disableStroke = options.disableStroke || false;
  const disableStrokeLinecap = options.disableStrokeLinecap || false;
  const disableStrokeLinejoin = options.disableStrokeLinejoin || false;
  const strokeWidthName = options.strokeWidthName || 'strokeWidth';
  const strokeLinecapName = options.strokeLinecapName || 'strokeLinecap';
  const strokeLinejoinName = options.strokeLinejoinName || 'strokeLinejoin';
  const { name, type } = attr; // 不处理动态属性

  if (type === SvgShapeAttr.DYNAMIC) {
    return attr;
  }

  switch (name) {
    case 'stroke-width':
      if (disableStroke) {
        return attr;
      }

      return Object.assign({}, attr, {
        type: SvgShapeAttr.DYNAMIC,
        expression: (prefix ? `${propName}.` : '') + strokeWidthName,
      });

    case 'stroke-linecap':
      if (disableStrokeLinecap) {
        return attr;
      }

      return Object.assign({}, attr, {
        type: SvgShapeAttr.DYNAMIC,
        expression: (prefix ? `${propName}.` : '') + strokeLinecapName,
      });

    case 'stroke-linejoin':
      if (disableStrokeLinejoin) {
        return attr;
      }

      return Object.assign({}, attr, {
        type: SvgShapeAttr.DYNAMIC,
        expression: (prefix ? `${propName}.` : '') + strokeLinejoinName,
      });
  }

  return attr;
};

export const dynamicStrokeTransformer = (
  options: IDynamicStrokeTransformerOptions,
): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr: ISvgAttr): ISvgAttr | null =>
        baseDynamicStroke(_attr, options) as ISvgAttr | null,
      style: (attr: ISvgInlineStyleAttr): ISvgInlineStyleAttr | null =>
        baseDynamicStroke(attr, options) as ISvgInlineStyleAttr | null,
    },
    rule: {
      attr: (_attr2: ISvgStyleAttr): ISvgStyleAttr | null =>
        baseDynamicStroke(_attr2, options) as ISvgStyleAttr | null,
    },
  };
};
