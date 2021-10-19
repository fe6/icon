/** @format */

import { TGenType } from '../types';
import { camelCase, pascalCase } from '../util';

export interface IGeneratorOptions {
  author: string;
  name: string;
  nameDisplayType?: 'origin' | 'camel' | 'pascal';
  description?: string;
  prefix?: string;
  type: TGenType;
}

const prefix = 'icon';
const baseIndent = 2; // 默认缩进

const defOpts = {
  author: 'fe6',
  name: '',
  type: 'vue' as TGenType,
  prefix,
};

export class Generator {
  result = '';
  $opts: IGeneratorOptions;
  isNewLine = false;
  indentSize = 0;

  constructor(options: IGeneratorOptions = defOpts) {
    this.$opts = Object.assign(defOpts, options);
  }

  space() {
    if (this.isNewLine) {
      this.result += ' '.repeat(this.indentSize * baseIndent);
      this.isNewLine = false;
    }

    this.result += ' ';
  }

  write(word: string) {
    if (this.isNewLine) {
      this.result += ' '.repeat(this.indentSize * baseIndent);
      this.isNewLine = false;
    }

    this.result += word;
  }

  writeLine(word?: string) {
    if (!word) {
      this.result += '\n';
      this.isNewLine = true;
      return;
    }

    this.write(word);
    this.result += '\n';
    this.isNewLine = true;
  }

  indent(size: number) {
    this.indentSize = Math.max(this.indentSize + size, 0);
  }

  processHeaderComment() {
    const { name, author, nameDisplayType } = this.$opts;
    const displayName =
      nameDisplayType === 'pascal'
        ? pascalCase(name)
        : nameDisplayType === 'camel'
        ? camelCase(name)
        : name;
    this.writeLine('/**');
    this.writeLine(` * @file ${displayName} ${this.$opts.description}`);
    this.writeLine(` * @author 由 ${author} 自动生成`);
    this.writeLine(' */');
    this.writeLine('');
  } // 写一个空格

  getInterfaceName(type: string, isSvg?: boolean) {
    return `I${this.getTypeName(type, isSvg)}`;
  }

  getTypeName(type: string, isSvg?: boolean) {
    const myPrefix = this.$opts.prefix || prefix;
    return `${isSvg ? 'Svg' : ''}${pascalCase(myPrefix)}${
      type ? pascalCase(type) : ''
    }`;
  }

  getResult() {
    return this.result;
  }
}
