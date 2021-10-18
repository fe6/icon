/** @format */

import { SvgStyleSelectorType } from '../types';
import { ITransformPlugin } from './base';

const excludeSelectorMap = {
  unset: true,
  initial: true,
  inherit: true,
  none: true,
};

export type TExpression = 'unset' | 'initial' | 'inherit' | 'none';

export const getKeyframesIdTransformer = (map: {
  [key: string]: boolean;
}): ITransformPlugin => {
  return {
    keyframes: {
      selector: (attr) => {
        const { selectorType, expression } = attr;
        if (excludeSelectorMap[expression as TExpression]) {
          // TODO 错误处理统一化
          throw new Error('Keyframe name could not be '.concat(expression));
        }

        if (selectorType === SvgStyleSelectorType.IDENTIFIER) {
          map[expression] = true;
        }

        return attr;
      },
    },
  };
};
