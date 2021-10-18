/** @format */

import { Generator, IGeneratorOptions } from './base';

const defOpts = {
  author: '',
  name: '',
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

    this.writeLine(`.${cssClassName} {`);
    this.indent(1);
    this.writeLine('display: inline-block;');
    this.writeLine('color: inherit;');
    this.writeLine('font-style: normal;');
    this.writeLine('line-height: 0;');
    this.writeLine('text-align: center;');
    this.writeLine('text-transform: none;');
    this.writeLine('vertical-align: -0.125em;');
    this.writeLine('text-rendering: optimizeLegibility;');
    this.writeLine('-webkit-font-smoothing: antialiased;');
    this.writeLine('-moz-osx-font-smoothing: grayscale;');
    this.writeLine();

    this.writeLine('&-spin svg {');
    this.indent(1);
    this.writeLine(`animation: ${cssClassName}-spin 1s infinite linear;`);
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('&-rtl {');
    this.indent(1);
    this.writeLine('transform: scaleX(-1);');
    this.indent(-1);
    this.writeLine('}');

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine(`@keyframes ${cssClassName}-spin {`);
    this.indent(1);
    this.writeLine('100% {');
    this.indent(1);
    this.writeLine('-webkit-transform: rotate(360deg);');
    this.writeLine('transform: rotate(360deg)');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine(`@-webkit-keyframes ${cssClassName}-spin {`);
    this.indent(1);
    this.writeLine('100% {');
    this.indent(1);
    this.writeLine('-webkit-transform: rotate(360deg);');
    this.writeLine('transform: rotate(360deg)');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    return this.getResult();
  }
}
