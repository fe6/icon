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

export interface IMapGeneratorOptions extends IGeneratorOptions {
  icons: string[];
}

export class MapGenerator extends Generator {
  icons: string[] = [];
  prefix: string;

  constructor(options: IMapGeneratorOptions = defOpts) {
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
        `export { default as ${pascalCase(this.prefix)}${pascalCase(
          name,
        )} } from './icons/${name}';`,
      );
    });

    return this.getResult();
  }
}
