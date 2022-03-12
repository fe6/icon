/** @format */

import { TGenType } from '../types';
import { Generator, IGeneratorOptions } from './base';
import lessConfig, { ILessConfig } from './less-config';

const defOpts = {
  author: '',
  name: '',
  type: '' as TGenType,
  prefix: 'icon',
  style: false,
  stylePropName: 'props',
  wrapperNeedName: false,
  cssPrefix: '',
};

export interface ILessGeneratorOptions extends IGeneratorOptions {
  prefix: string;
  cssPrefix: string;
}

export class LessGenerator extends Generator {
  prefix = '';
  cssPrefix = '';

  constructor(options: ILessGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.prefix = options.prefix as string;
    this.cssPrefix = options.cssPrefix;
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();

    const prefix = this.prefix;
    const cssPrefix = this.cssPrefix;
    const cssClassName = `${cssPrefix}-${prefix}`;

    if (this.$opts.type === 'cube-vue') {
      this.write('export default `');
    }

    lessConfig(cssClassName).forEach(({ type, text }: ILessConfig) => {
      (this[type] as Function)(text);
    });

    if (this.$opts.type === 'cube-vue') {
      this.write('`;');
    }

    return this.getResult();
  }
}
