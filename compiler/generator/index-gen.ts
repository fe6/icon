/** @format */

import { Generator, IGeneratorOptions } from './base';
import { pascalCase } from '../util';

const defOpts = {
  author: 'fe6',
  name: '',
  useType: false,
  icons: [],
};

export interface IIndexGeneratorOptions extends IGeneratorOptions {
  useType?: boolean;
  icons: string[];
}

export class IndexGenerator extends Generator {
  useType = false;
  icons: string[] = [];

  constructor(options: IIndexGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.useType = options.useType || false;
    this.icons = options.icons;
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();
    this.icons.forEach((name: string) => {
      this.writeLine(
        'export {default as '
          .concat(pascalCase(name), "} from './icons/")
          .concat(pascalCase(name), "';"),
      );
    });
    return this.getResult();
  }
}
