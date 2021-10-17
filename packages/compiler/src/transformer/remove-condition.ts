/**
 * @format
 * @file RemoveConditionTransformer 根据条件删除元素
 */

import { ISvgElementInfo } from '../types';
import { ITransformPlugin } from './base';

export interface IRemoveConditionTransformerOptions {
  tag?: string;
  condition: (info: ISvgElementInfo) => boolean;
}

export const removeConditionTransformer = (
  options: IRemoveConditionTransformerOptions,
): ITransformPlugin => {
  const condition = options.condition;
  return {
    '*': {
      enter: (info) => {
        const remove = condition(info);
        return remove ? null : info;
      },
    },
  };
};
