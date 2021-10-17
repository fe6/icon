/**
 * @format
 * @file DynamicSizeTransformer 动态大小替换
 */

import { SvgShapeAttr } from '../types';
import { ITransformPlugin } from './base';

export interface IDynamicSizeTransformerOptions {
  prefix?: boolean;
  propName?: string;
  widthName?: string;
  heightName?: string;
}

export const dynamicSizeTransformer = (
  options: IDynamicSizeTransformerOptions,
): ITransformPlugin => {
  const prefix = options.prefix || false;
  const propName = options.propName || 'props';
  const widthName = options.widthName || 'width';
  const heightName = options.heightName || 'height';

  return {
    svg: {
      attr: (_attr) => {
        const { name, type, owner } = _attr; // 不处理动态属性

        if (type === SvgShapeAttr.DYNAMIC) {
          return _attr;
        }

        if (name === 'width') {
          return {
            name,
            type: SvgShapeAttr.DYNAMIC,
            expression: (prefix ? `${propName}.` : '') + widthName,
            owner,
          };
        }

        if (name === 'height') {
          return {
            name,
            type: SvgShapeAttr.DYNAMIC,
            expression: (prefix ? `${propName}.` : '') + heightName,
            owner,
          };
        }

        return _attr;
      },
    },
  };
};
