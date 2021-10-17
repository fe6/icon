/**
 * @format
 * @file RemoveCSSPrefixTransformer 删除前缀CSS
 */

import { ITransformPlugin } from './base';

export const removeCSSPrefixTransformer = (): ITransformPlugin => {
  return {
    '*': {
      style: (attr) => {
        const { name } = attr;

        if (name.startsWith('-')) {
          return null;
        }

        return attr;
      },
    },
    rule: {
      attr: (_attr) => {
        const { name } = _attr;

        if (name.startsWith('-')) {
          return null;
        }

        return _attr;
      },
    },
  };
};
