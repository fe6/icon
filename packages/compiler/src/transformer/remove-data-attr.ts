/**
 * @format
 * @file RemoveDataAttrTransformer 删除data-属性
 */

import { ITransformPlugin } from './base';

export const removeDataAttrTransformer = (): ITransformPlugin => {
  return {
    '*': {
      attr: (_attr) => {
        const { name } = _attr;

        if (name.startsWith('data-')) {
          return null;
        }

        return _attr;
      },
    },
  };
};
