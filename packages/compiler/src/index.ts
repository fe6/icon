/**
 * @format
 * @file index 图标编译工具
 */

export * from './types';

export * from './parser';

export * from './util';
export * from './tokenize';

export * from './generator/base';
export * from './generator/jsx-gen';
export * from './generator/less-gen';
export * from './generator/icon-gen';

export * from './generator/runtime-base';
export * from './generator/runtime-vue';

export * from './transformer/base';
export * from './transformer/camel';

export * from './transformer/dynamic-color';
export * from './transformer/dynamic-hue';
export * from './transformer/dynamic-size';
export * from './transformer/dynamic-stroke';

export * from './transformer/get-id';
export * from './transformer/get-keyframes-id';

export * from './transformer/remove-condition';
export * from './transformer/remove-css-prefix';
export * from './transformer/remove-data-attr';
export * from './transformer/remove-id';
export * from './transformer/remove-props';
export * from './transformer/remove-tags';

export * from './transformer/replace-id';
export * from './transformer/replace-keyframes-id';

export * from './transformer/sync-group-props';

export * from './transformer/unique-id';
export * from './transformer/unique-keyframes-id';

export * from './transformer/fix-mask-type';

export * from './icon-compiler';

export * from './logger';
