/**
 * @format
 * @file CamelTransformer 将属性转化成驼峰命名
 */

import { ISvgAttr, ISvgInlineStyleAttr } from '../types';
import { camelCase } from '../util';

export interface ICamelTransformerOptions {
  namespace?: boolean;
  styleOnly?: boolean;
  namespaceOnly?: boolean;
}

export const camelTransformer = (options: ICamelTransformerOptions) => {
  const namespace = options.namespace || false;
  const styleOnly = options.styleOnly || false;
  const namespaceOnly = options.namespaceOnly || false;
  return {
    '*': {
      attr: (_attr: ISvgAttr) => {
        const { name, ...otherParams } = _attr;

        if (styleOnly) {
          return _attr;
        }

        return {
          name: camelCase(name, namespaceOnly ? ':' : namespace ? '-:' : '-'),
          ...otherParams,
        };
      },
      style: ({ name, ...otherOptions }: ISvgInlineStyleAttr) => {
        return {
          name: camelCase(name, '-'),
          ...otherOptions,
        };
      },
    },
  };
};
