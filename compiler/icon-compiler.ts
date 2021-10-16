/** @format */

import { JSXGenerator } from './generator/jsx-gen';
import { LessGenerator } from './generator/less-gen';
import { IndexGenerator } from './generator/index-gen';
import { VueRuntimeGenerator } from './generator/runtime-vue';
import {
  IRuntimeGeneratorOptions,
  IRuntimeOptions,
} from './generator/runtime-base';
import { compiler } from './compiler';
import { pascalCase } from './util';

// interface IOption {
//   type: 'vue' | 'svg' // TODO 未来多种支持
//   useType?: boolean;
//   prefix?: string;
//   style?: boolean;
//   cssPrefix?: string;
//   author: string;
// }

export interface IIconToolsOptions extends IRuntimeOptions {
  author: string;
  type: 'react' | 'vue' | 'svg';
}

interface IRef {
  name: string;
  content: string;
  description?: string;
  rtl?: boolean;
}

interface ICompilerMap {
  [key: string]: string;
}

export interface IAIconInfo {
  content: string;
  name: string;
  description: string;
  rtl: boolean;
}

class IconCompiler {
  private $opts: IIconToolsOptions;
  private compiler: any;
  private runtimeCode: string;
  private readonly compilerMap: ICompilerMap = {};

  constructor(options: IIconToolsOptions) {
    this.$opts = options;
    this.compiler = this.createCompiler();
    this.runtimeCode = this.createRuntimeCode();
  }

  private createCompiler() {
    return (ref: IRef) => {
      const { name, content } = ref;
      const description = ref?.description || name;
      const rtl = ref?.rtl || false;
      // TODO 未来多种支持
      const generator = this.createVueGenerator(name, description, rtl);
      return compiler({
        name,
        content,
        generator,
      });
    };
  }

  private createVueGenerator(name: string, description: string, rtl: boolean) {
    return new JSXGenerator({
      name,
      author: this.$opts.author,
      rtl,
      prefix: this.$opts.prefix || 'icon',
      nameDisplayType: 'pascal',
      useDefault: true,
      useType: this.$opts.useType,
      wrapperNeedName: true,
      wrapperNeedRTL: true,
      style: this.$opts.style || false,
      description,
      importPath: '../runtime',
    });
  }

  appendIcon(aIconInfo: IAIconInfo) {
    this.compilerMap[aIconInfo.name] = this.compiler(aIconInfo);
    // console.log(this.compilerMap, 'this.compilerMap');
  }

  private getIconCode(name: string) {
    const svg = this.compilerMap[name];

    if (!this.compilerMap[name]) {
      throw new Error(`call \`this.appendIcon(${name})\` first`);
    }

    return svg;
  }

  private getIconFile(name: string) {
    const svg = this.getIconCode(name);
    const isSvg = this.$opts.type === 'svg';
    return {
      mime: 'image/svg+xml',
      path: 'icons/'
        .concat(pascalCase(name), '.')
        .concat(this.$opts.useType ? 'ts' : 'js')
        .concat(isSvg ? '' : 'x'),
      content: svg,
    };
  }

  private getRuntimeCode() {
    return this.runtimeCode;
  }

  private getRuntimeFile() {
    return {
      mime: 'text/javascript',
      path: 'runtime/index.'.concat(this.$opts.useType ? 'ts' : 'js', 'x'),
      content: this.getRuntimeCode(),
    };
  }

  private getIndexCode() {
    const generator = new IndexGenerator({
      name: 'index',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '引用出口',
      useType: this.$opts.useType,
      icons: Object.keys(this.compilerMap),
    });
    return generator.process();
  }

  private getIndexFile() {
    return {
      mime: 'text/javascript',
      path: `index.${this.$opts.useType ? 'ts' : 'js'}`,
      content: this.getIndexCode(),
    };
  }

  private getLessCode() {
    const generator = new LessGenerator({
      name: 'index',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '样式文件',
      prefix: this.$opts.prefix || 'icon',
      cssPrefix: this.$opts.cssPrefix || 'sit',
    });
    return generator.process();
  }

  private getLessFile() {
    return {
      mime: 'text/css',
      path: 'runtime/index.less',
      content: this.getLessCode(),
    };
  }

  getIconFiles() {
    const list = Object.keys(this.compilerMap).map((key: string) =>
      this.getIconFile(key),
    );
    list.push(this.getRuntimeFile(), this.getIndexFile());

    if (this.$opts.type !== 'svg') {
      list.push(this.getLessFile());
    }

    return list;
  }

  private createRuntimeCode() {
    const baseOptions: IRuntimeGeneratorOptions = {
      name: 'runtime',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '运行时',
      useType: this.$opts.useType || false,
      colors: this.$opts.colors || [],
      prefix: this.$opts.prefix || 'icon',
      cssPrefix: this.$opts.cssPrefix || 'sit',
      stroke: this.$opts.stroke || 0,
      theme: this.$opts.theme || [],
      fixedSize: this.$opts.fixedSize || false,
      style: this.$opts.style || false,
      strokeLinecap: this.$opts.strokeLinecap,
      strokeLinejoin: this.$opts.strokeLinejoin,
      wrapperNeedName: true,
      wrapperNeedRTL: true,
    };
    // TODO 未来多种支持
    const vueRuntime = new VueRuntimeGenerator(baseOptions);
    const generator =
      this.$opts.type === 'vue'
        ? vueRuntime
        : {
            process: () => '',
          };
    return generator.process();
  }
}

export const iconCompiler = (options: IIconToolsOptions) => {
  return new IconCompiler(options);
};
