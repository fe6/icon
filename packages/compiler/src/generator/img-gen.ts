/** @format */

import { pascalCase, hyphenate } from '../util';
import {
  ISvgElementInfo,
  ISvgStyleInfo,
  SvgShapeAttr,
  ISvgAttr,
  ISvgInlineStyleAttr,
  TGenType,
} from '../types';
import { IGeneratorOptions } from './base';
import { IconGenerator } from './icon-gen';

const defOpts = {
  author: '',
  name: '',
  type: 'img' as TGenType,
  prefix: 'icon',
  extraImport: [],
  importPath: '../runtime',
  rtl: true,
  propName: 'props',
  style: false,
  // helperName: 'h',
  stylePropName: 'props',
  wrapperNeedName: false,
  wrapperNeedRTL: false,
};

export interface IImgGeneratorOptions extends IGeneratorOptions {
  useDefault?: boolean;
  useType?: boolean;
  style?: boolean;
  wrapperNeedName?: boolean;
  wrapperNeedRTL?: boolean;
  rtl?: boolean;
  importPath?: string;
}

interface IInfo {
  name: string;
  element: ISvgElementInfo;
  style: ISvgStyleInfo;
}

export class ImgGenerator extends IconGenerator {
  useDefault: boolean;
  useType: boolean;
  style: boolean;
  wrapperNeedName: boolean;
  wrapperNeedRTL: boolean;
  rtl: boolean;
  importPath: string;

  constructor(options: IImgGeneratorOptions = defOpts) {
    super(options);

    const curOpts = (this.$opts = Object.assign(defOpts, options));
    this.useDefault = curOpts.useDefault || false;
    this.useType = curOpts.useType || false;
    this.style = curOpts.style || false;
    this.wrapperNeedName = curOpts.wrapperNeedName || false;
    this.importPath = curOpts.importPath || '../runtime';
    this.rtl = curOpts.rtl || false;
    this.wrapperNeedRTL = curOpts.wrapperNeedRTL || false;
  }

  renderGetSvgCode(info: IInfo) {
    const useType = this.useType;
    const typeName = this.getInterfaceName('props', true);

    this.write(`(props${useType ? `: ${typeName}` : ''}) => `);
    this.writeLine();
    this.writeLine('`<?xml version="1.0" encoding="UTF-8"?>');
    this.processTag(info.element, info.style);
    this.writeLine();
  }

  process(info: IInfo) {
    const useDefault = this.useDefault;
    const useType = this.useType;
    const wrapperNeedName = this.wrapperNeedName;
    const wrapperNeedRTL = this.wrapperNeedRTL;
    const rtl = this.rtl;
    const importPath = this.importPath;
    this.processHeaderComment();

    this.write('import');
    this.space();
    this.write('{');
    const imports: string[] = [];
    const typeName = this.getInterfaceName('props', true);
    const wrapperName = this.getTypeName('wrapper');

    if (useType) {
      imports.push(typeName);
    }

    imports.push(wrapperName);
    this.write(imports.join(', '));
    this.write('}');
    this.space();
    this.write('from');
    this.space();
    this.write("'");
    this.write(importPath);
    this.writeLine("';");
    this.writeLine(); // 处理顶部导出

    this.writeLine('// 获取 SVG 的 HTML 字符串');
    this.write(
      `export const get${pascalCase(this.prefix)}${pascalCase(
        info.name,
      )}SvgHtml = `,
    );
    this.renderGetSvgCode(info);

    this.writeLine('// 默认导出组件');
    this.write('export');
    this.space();

    if (useDefault) {
      this.write('default');
      this.space();
    } // 处理const Name = IConWrapper(xxx)/IConWrapper(xxx)

    if (!useDefault) {
      this.write('const');
      this.space();
      this.write(pascalCase(info.name));
      this.space();
      this.write('=');
      this.space();
    }

    this.write(wrapperName);
    this.write('(');

    if (wrapperNeedName) {
      this.write("'");
      this.write(info.name);
      this.write("'");
      this.write(', ');
    }

    if (wrapperNeedRTL) {
      this.write(String(rtl));
      this.write(', ');
    } // 处理函数参数：(props: IIconProps)

    this.write(`get${pascalCase(this.prefix)}${pascalCase(info.name)}SvgHtml`);

    this.writeLine(');');
    return this.getResult();
  }

  processTag(info: ISvgElementInfo, css: ISvgStyleInfo) {
    const type = info.type;
    const attrs = info.attrs;
    const style = info.style;
    const children = info.children;

    this.write('');
    this.write('<');
    this.write(type);

    attrs.forEach((item) => {
      this.processAttr(item);
    });

    if (style.length) {
      this.processInlineStyle(style);
    }

    if (type === 'svg' && (this.style || children.length)) {
      this.writeLine('>');
      this.indent(1);

      if (type === 'svg' && this.style) {
        this.writeLine('<style>');
        this.processStyle(css);
        this.writeLine('</style>');
      }

      children.forEach((item) => {
        this.processTag(item, css);
      });
      this.indent(-1);
      this.writeLine(`</${type}>\`;`);

      return;
    }

    this.writeLine('/>');
  }

  processAttr(attr: ISvgAttr) {
    const name = attr.name;
    const type = attr.type;
    const expression = attr.expression;
    this.write(' ');
    this.write(name === 'viewBox' ? name : hyphenate(name));
    this.write('="');

    if (type === SvgShapeAttr.DYNAMIC) {
      this.write(`\$\{${expression}\}`);
    } else {
      this.write(expression);
    }

    this.write('"');
  }

  processInlineStyle(exp: ISvgInlineStyleAttr[]) {
    this.write(' style="');
    exp.forEach((_ref, index) => {
      const { name, expression, type } = _ref;

      this.write(name);

      this.write(':');

      this.space();

      if (type === SvgShapeAttr.DYNAMIC) {
        this.write(`' + ${expression} + '`);
      } else {
        this.write(expression);
      }

      if (index !== exp.length - 1) {
        this.write(',');

        this.space();
      }
    });
    this.write('"');
  }
}
