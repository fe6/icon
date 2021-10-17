/**
 * @format
 * @file RemovePropsTransformer 删除属性
 */

import { ITransformPlugin } from './base';

export interface IRemovePropsTransformerOptions {
  props: string[];
}

export const removePropsTransformer = (
  options: IRemovePropsTransformerOptions,
): ITransformPlugin => {
  const { props } = options;
  return {
    '*': {
      attr: (_attr) => {
        const { name, ...otherAttr } = _attr;

        if (props.includes(name)) {
          return null;
        }

        return {
          name,
          ...otherAttr,
        };
      },
    },
  };
};
