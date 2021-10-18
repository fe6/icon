/** @format */

import { Generator, IGeneratorOptions } from './base';

const defOpts = {
  author: 'fe6',
  name: '',
};

export class IndexGenerator extends Generator {
  prefix: string;

  constructor(options: IGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.prefix = options.prefix || 'icon';
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();
    this.writeLine("export * from './map'");
    this.writeLine("export * from './all'");
    this.writeLine(
      `export { ${this.getTypeName(
        'provider',
      )}, DEFAULT_${this.prefix.toUpperCase()}_CONFIGS } from './runtime';`,
    );

    return this.getResult();
  }
}
