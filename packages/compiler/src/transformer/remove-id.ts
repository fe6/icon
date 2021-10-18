/**
 * @format
 * @file RemoveIdTransformer 删除对应的Id
 */

import { ITransformPlugin } from './base';

export interface IRemoveIdTransformerOptions {
  propName: string;
  ids: string[];
  removeAll?: boolean;
}

export interface IRemoveIdMap {
  [key: string]: boolean;
}

export const removeIdTransformer = (
  options: IRemoveIdTransformerOptions,
): ITransformPlugin => {
  const { propName, ids } = options;
  const removeAll = options.removeAll || false;
  const map: IRemoveIdMap = {};

  ids.forEach((id) => (map[`${propName} + '${id}'`] = true));

  return {
    '*': {
      attr: (_attr) => {
        if (_attr.name !== 'id') {
          return _attr;
        }

        if (removeAll) {
          return null;
        }

        if (map[_attr.expression]) {
          return null;
        }

        return _attr;
      },
    },
  };
};
