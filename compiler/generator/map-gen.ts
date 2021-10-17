/** @format */

import { Generator, IGeneratorOptions } from './base';
import { pascalCase } from '../util';

const defOpts = {
  author: 'fe6',
  name: '',
  icons: [],
};

export interface IMapGeneratorOptions extends IGeneratorOptions {
  icons: string[];
}

export class MapGenerator extends Generator {
  icons: string[] = [];

  constructor(options: IMapGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.icons = options.icons;
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();
    this.icons.forEach((name: string) => {
      this.writeLine(
        'export {default as '
          .concat(pascalCase(name), "} from './icons/")
          .concat(name, "';"),
      );
    });

    return this.getResult();
  }
}
