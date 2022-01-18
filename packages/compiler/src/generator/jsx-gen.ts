/** @format */

import { pascalCase } from '../util';
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
  type: 'vue' as TGenType,
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

export interface IJSXGeneratorOptions extends IGeneratorOptions {
  useDefault?: boolean;
  useType?: boolean;
  wrapperNeedName?: boolean;
  wrapperNeedRTL?: boolean;
  style?: boolean;
  rtl?: boolean;
  helperName?: string;
  propName?: string;
  stylePropName?: string;
  importPath?: string;
  extraImport?: string[];
}

interface IInfo {
  name: string;
  element: ISvgElementInfo;
  style: ISvgStyleInfo;
}

export class JSXGenerator extends IconGenerator {
  result = '';
  isNewLine = false;
  indentSize = 0;
  constructor(options: IJSXGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
  }

  process(info: IInfo) {
    // 生成每个 icon 的组件(tsx)
    const {
      extraImport,
      useType,
      useDefault,
      wrapperNeedName,
      propName,
      style,
      stylePropName,
      wrapperNeedRTL,
      rtl,
      importPath,
    } = this.$opts as IJSXGeneratorOptions;

    // 处理顶部引用import {IIconType, IconWrapper} from '../components/icon'
    if (extraImport && extraImport.length) {
      extraImport.forEach((item: string) => {
        return this.writeLine(item);
      });
    }

    // if (useDefault) {
    //   if (useType) {
    //     this.writeLine("import type { IconOptions } from '../runtime';");
    //   }
    // } // 处理const Name = IConWrapper(xxx)/IConWrapper(xxx)

    this.write('import');
    this.space();
    this.write('{ ');

    const imports: string[] = [];
    const typeName = this.getInterfaceName('props', true);
    const wrapperName = this.getTypeName('wrapper');

    if (useType) {
      imports.push(typeName);
    }
    imports.push(wrapperName);
    this.write(imports.join(', '));
    this.write(' }');
    this.space();
    this.write('from');
    this.space();
    this.write("'");
    this.write(importPath as string);
    this.writeLine("';");
    this.writeLine(); // 处理顶部导出

    this.write('export');
    this.space();

    this.write('const');
    this.space();
    this.write(pascalCase(info.name));
    this.space();
    this.write('=');
    this.space();

    this.write(wrapperName);
    this.writeLine('(');
    this.indent(1);

    if (wrapperNeedName) {
      this.write("'");
      this.write(info.name);
      this.write("'");
      this.writeLine(',');
    }

    if (wrapperNeedRTL) {
      this.write(String(rtl));
      this.writeLine(',');
    } // 处理函数参数：(props: IIconProps)

    this.write('(');

    if (propName) {
      this.write(propName);
    }

    if (useType) {
      this.write(':');
      this.space();
      this.write(typeName);
    }

    this.write(')');
    this.space(); // wrapper用箭头函数

    this.write('=>');
    this.space();
    this.writeLine('(');
    this.indent(1);
    this.processTag(info.element);
    this.indent(-1);
    this.write(')');

    if (style) {
      this.writeLine(',');
      this.write('(');
      if (stylePropName) {
        this.write(stylePropName);
      }

      if (useType) {
        this.write(': ');
        this.write(typeName);
      }

      this.write(')');
      this.write(' => ');
      this.processStyle(info.style);
      this.writeLine();
    } else {
      this.writeLine();
    }

    this.indent(-1);
    this.writeLine(');');

    if (useDefault) {
      this.write(`export default ${pascalCase(info.name)}`);
      this.writeLine();
    } // 处理const Name = IConWrapper(xxx)/IConWrapper(xxx)

    return this.getResult();
  }

  processTag(info: ISvgElementInfo) {
    const type = info.type;
    const attrs = info.attrs;
    const style = info.style;
    const children = info.children;

    this.write('<');
    this.write(type);

    attrs.forEach((item: ISvgAttr) => {
      return this.processAttr(item);
    });

    if (style.length) {
      this.processInlineStyle(style);
    }

    if (attrs.length) {
      this.writeLine();
    }

    if (children.length) {
      this.writeLine('>');
      this.indent(1);
      children.forEach((item: ISvgElementInfo) => {
        return this.processTag(item);
      });
      this.indent(-1);
      this.writeLine(`</${info.type}>`);
    } else {
      this.writeLine('/>');
    }
  }

  processAttr(attr: ISvgAttr) {
    const name = attr.name;
    const type = attr.type;
    const expression = attr.expression;
    this.writeLine('');
    this.indent(1);
    this.write(name);
    this.write('=');

    if (type === SvgShapeAttr.DYNAMIC) {
      this.write('{');
      this.write(expression);
      this.write('}');
    } else {
      this.write('"');
      this.write(expression);
      this.write('"');
    }

    this.indent(-1);
  }

  processInlineStyle(exp: ISvgInlineStyleAttr[]) {
    this.write(' style={{');
    exp.forEach((_ref: ISvgInlineStyleAttr, index: number) => {
      const name = _ref.name;
      const expression = _ref.expression;
      const type = _ref.type;

      this.write(name);

      this.write(':');

      this.space();

      if (type === SvgShapeAttr.DYNAMIC) {
        this.write(expression);
      } else {
        const nv = +expression;

        if (Number.isNaN(nv)) {
          this.write("'");

          this.write(expression.replace(/'/g, "\\'"));

          this.write("'");
        } else {
          this.write(expression);
        }
      }

      if (index !== exp.length - 1) {
        this.write(',');

        this.space();
      }
    });
    this.write('}}');
  }
}
