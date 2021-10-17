/**
 * @format
 * @file GetIdTransformer 获取元素Id的映射
 */

import { ITransformPlugin } from './base';
import { SvgStyleSelectorType } from '../types';

export const getIdTransformer = (map: {
  [key: string]: boolean;
}): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr) => {
        if (_attr.name === 'id') {
          map[_attr.expression] = true;
        }

        return _attr;
      },
    },
    rule: {
      selector: (attr) => {
        if (attr.selectorType === SvgStyleSelectorType.ID) {
          map[attr.expression.slice(1)] = true;
        }

        return attr;
      },
    },
  };
};
