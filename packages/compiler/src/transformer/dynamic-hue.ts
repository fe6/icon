/**
 * @format
 * @file DynamicHueTransformer 动态替换 Hue
 */

import {
  SvgShapeAttr,
  ISvgAttr,
  ISvgInlineStyleAttr,
  ISvgStyleAttr,
  TTransfromInnerBase,
  TTransfromInnerOptionsBase,
} from '../types';
import { color2Hsl } from '../util';
import { ITransformPlugin } from './base';

export interface IDynamicHueTransformerOptions {
  prefix?: boolean;
  formatter?: string;
  propName?: string;
  hueList: number[];
  forceReplaceColor?: boolean;
}

export const COLOR_PROPS = {
  color: true,
  fill: true,
  stroke: true,
  'stop-color': true,
  'flood-color': true,
  'lighting-color': true,
};

const baseConverter = (
  options: IDynamicHueTransformerOptions,
  attr: TTransfromInnerOptionsBase,
): TTransfromInnerBase => {
  const prefix = options.prefix;
  const propName = options.propName;
  const formatter = options.formatter || 'format';
  const hueList = options.hueList;
  const forceReplaceColor = options.forceReplaceColor || false;
  const { name, type, expression } = attr;
  const prefixStr = prefix ? `${propName || 'props'}.` : ''; // 不处理动态属性

  if (type === SvgShapeAttr.DYNAMIC) {
    return attr;
  }

  if (name in COLOR_PROPS) {
    const color = color2Hsl(expression);

    if (color) {
      const { h, s, l } = color;
      const hue = Math.round(h);
      const saturation = +s.toFixed(4);
      const lightness = +l.toFixed(4);
      const index = hueList.indexOf(hue); // 不处理白色

      if (s === 0 && l === 1) {
        return attr;
      } // 没匹配到的颜色不处理

      if (index < 0 && !forceReplaceColor) {
        return attr;
      }

      const hueStr = index >= 0 ? index : 0;

      return {
        ...attr,
        name,
        type: SvgShapeAttr.DYNAMIC,
        expression: `${prefixStr}${formatter}(${hueStr}, ${saturation}, ${lightness})`,
      };
    }
  }

  return attr;
};

export const dynamicHueTransformer = (
  options: IDynamicHueTransformerOptions,
): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr): ISvgAttr | null =>
        baseConverter(options, _attr) as ISvgAttr | null,
      style: (attr): ISvgInlineStyleAttr | null =>
        baseConverter(options, attr) as ISvgInlineStyleAttr | null,
    },
    rule: {
      attr: (_attr2): ISvgStyleAttr | null =>
        baseConverter(options, _attr2) as ISvgStyleAttr | null,
    },
  };
};
