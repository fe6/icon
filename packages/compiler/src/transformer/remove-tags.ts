/**
 * @format
 * @file RemoveTagsTransformer 删除标签
 */

import { ITransformPlugin } from './base';

export interface IRemoveTagsTransformerOptions {
  tags: string[];
}

export const removeTagsTransformer = (
  options: IRemoveTagsTransformerOptions,
): ITransformPlugin => {
  const { tags } = options;
  return {
    '*': {
      enter: (info) => {
        const { type, ...otherInfo } = info; // svg标签不能被删除

        if (type !== 'svg' && tags.includes(type)) {
          return null;
        }

        return {
          type,
          ...otherInfo,
        };
      },
    },
  };
};
