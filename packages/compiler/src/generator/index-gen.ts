/** @format */

import { TGenType } from '../types';
import { Generator, IGeneratorOptions } from './base';

const defOpts = {
  author: 'fe6',
  name: '',
  type: '' as TGenType,
};

export class IndexGenerator extends Generator {
  prefix: string;
  type: TGenType = '';

  constructor(options: IGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.type = this.$opts.type;
    this.prefix = options.prefix || 'icon';
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();
    this.writeLine("export * from './map';");
    this.writeLine("export * as waterMap from './map';");
    if (this.type === 'img' || this.type === 'svg') {
      this.writeLine("export * from './svg';");
    }
    this.writeLine("export * from './all';");

    let configName = '';

    if (this.type === 'img') {
      configName = 'setConfig';
    } else {
      configName = this.getTypeName('provider');
    }

    this.writeLine(
      `export { ${configName}, DEFAULT_${this.prefix.toUpperCase()}_CONFIGS } from './runtime';`,
    );

    return this.getResult();
  }
}
