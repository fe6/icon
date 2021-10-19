/** @format */

import { pascalCase } from '../util';
import { TGenType } from '../types';
import { Generator, IGeneratorOptions } from './base';

const defOpts = {
  author: 'fe6',
  name: '',
  icons: [],
  type: '' as TGenType,
  prefix: 'icon',
};

export interface ISvgGeneratorOptions extends IGeneratorOptions {
  icons: string[];
}

export class SvgGenerator extends Generator {
  icons: string[] = [];
  prefix: string;

  constructor(options: ISvgGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.icons = options.icons;
    this.prefix = this.$opts.prefix || 'icon';
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();
    this.icons.forEach((name: string) => {
      this.writeLine(
        `export { get${pascalCase(this.prefix)}${pascalCase(
          name,
        )}SvgHtml } from './icons/${name}';`,
      );
    });

    return this.getResult();
  }
}
