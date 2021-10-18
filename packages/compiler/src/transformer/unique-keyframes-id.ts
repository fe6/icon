/**
 * @format
 * @file UniqueKeyframesIdTransformer 唯一 keyframes ID
 */

import { transform, ITransformPlugin } from './base';
import { guid } from '../util';
import {
  IReplaceIdTransformerOptions,
  IReplaceIdTransformerIdMap,
} from '../types';
import { getKeyframesIdTransformer } from './get-keyframes-id';
import { replaceKeyframesIdTransformer } from './replace-keyframes-id';

export interface IUniqueKeyframesIdTransformerOptions {
  prefix?: boolean;
  propName?: string;
  idName?: string;
}

export const uniqueKeyframesIdTransformer = (
  options: IUniqueKeyframesIdTransformerOptions,
): ITransformPlugin => {
  const prefix = options.prefix || false;
  const propName = options.propName || 'props';
  const idName = options.idName || 'id';

  return {
    // 进入时记录所有的ID
    enter: (oldInfo) => {
      let info = oldInfo;
      // 清空映射表
      const map: IReplaceIdTransformerOptions = {};
      const idMap: IReplaceIdTransformerIdMap = {}; // 获取所有的Id

      info = transform(info, [getKeyframesIdTransformer(idMap)]); // 生成Id映射（8位就够了，不用那么多）

      Object.keys(idMap).forEach((key) => {
        return (map[key] = {
          newId: guid().slice(0, 8),
          propName: (prefix ? `${propName}.` : '') + idName,
          used: false,
        });
      }); // 替换Id

      info = transform(info, [replaceKeyframesIdTransformer(map)]);
      return info;
    },
  };
};
