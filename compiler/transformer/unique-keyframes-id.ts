/**
 * @format
 * @file UniqueKeyframesIdTransformer 唯一 keyframes ID
 */

import { transform, ITransformPlugin } from './base';
import { guid } from '../util';
import { getKeyframesIdTransformer } from './get-keyframes-id';
import { replaceKeyframesIdTransformer } from './replace-keyframes-id';

export const uniqueKeyframesIdTransformer = (options): ITransformPlugin => {
  const prefix = options.prefix || false;
  const propName = options.propName || 'props';
  const idName = options.idName || 'id';

  return {
    // 进入时记录所有的ID
    enter: (oldInfo) => {
      let info = oldInfo;
      // 清空映射表
      const map = {};
      const IdMap = {}; // 获取所有的Id

      info = transform(info, [getKeyframesIdTransformer(IdMap)]); // 生成Id映射（8位就够了，不用那么多）

      Object.keys(IdMap).forEach((key) => {
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
