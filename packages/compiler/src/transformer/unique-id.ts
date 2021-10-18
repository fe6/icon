/**
 * @format
 * @file UniqueIdTransformer 唯一ID
 */

import { transform, ITransformPlugin } from './base';
import {
  IReplaceIdTransformerOptions,
  IReplaceIdTransformerIdMap,
} from '../types';
import { guid } from '../util';
import { getIdTransformer } from './get-id';
import { removeIdTransformer } from './remove-id';
import { replaceIdTransformer } from './replace-id';

export interface IUniqueIdTransformerOptions {
  prefix?: boolean;
  propName?: string;
  idName?: string;
  removeUnusedIds?: boolean;
}

export const uniqueIdTransformer = (
  options: IUniqueIdTransformerOptions,
): ITransformPlugin => {
  const prefix = options.prefix || false;
  const propName = options.propName || 'props';
  const idName = options.idName || 'id';
  const removeUnusedIds = options.removeUnusedIds || false;

  return {
    // 进入时记录所有的ID
    enter: (oldInfo) => {
      let info = oldInfo;
      // 清空映射表
      const map: IReplaceIdTransformerOptions = {};
      const idMap: IReplaceIdTransformerIdMap = {}; // 获取所有的Id

      info = transform(info, [getIdTransformer(idMap)]); // 生成Id映射（8位就够了，不用那么多）

      Object.keys(idMap).forEach((key) => {
        map[key] = {
          newId: guid().slice(0, 8),
          propName: (prefix ? `${propName}.` : '') + idName,
          used: false,
        };
        return map[key];
      }); // 替换Id

      info = transform(info, [replaceIdTransformer(map)]);
      const needRemoveIds = Object.keys(map)
        .filter((item) => {
          return !map[item].used;
        })
        .map((item) => {
          return map[item].newId;
        }); // 把没用的Id去掉

      if (removeUnusedIds && needRemoveIds && needRemoveIds.length) {
        info = transform(info, [
          removeIdTransformer({
            propName: (prefix ? `${propName}.` : '') + idName,
            ids: needRemoveIds,
          }),
        ]);
      }

      return info;
    },
  };
};
