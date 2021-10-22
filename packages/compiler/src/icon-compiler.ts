/** @format */

import { TGenType, IIconColorHueInfo, IIconColorReplaceInfo } from './types';

import { JSXGenerator } from './generator/jsx-gen';
import { ImgGenerator } from './generator/img-gen';
import { CubeVueGenerator } from './generator/cube-vue-gen';

import { LessGenerator } from './generator/less-gen';
import { IndexGenerator } from './generator/index-gen';
import { MapGenerator } from './generator/map-gen';
import { SvgGenerator } from './generator/svg-gen';
import { AllGenerator } from './generator/all-gen';
import { CubeGenerator } from './generator/cube-gen';

import { VueRuntimeGenerator } from './generator/runtime-vue';
import { ImgRuntimeGenerator } from './generator/runtime-img';
import { CubeVueRuntimeGenerator } from './generator/runtime-cube-vue';

import {
  IRuntimeGeneratorOptions,
  IRuntimeOptions,
} from './generator/runtime-base';
import { compiler } from './compiler';

import { ITransformPlugin } from './transformer/base';
import { dynamicColorTransformer } from './transformer/dynamic-color';
import { removeConditionTransformer } from './transformer/remove-condition';
import { removeTagsTransformer } from './transformer/remove-tags';
import { removePropsTransformer } from './transformer/remove-props';
import { removeDataAttrTransformer } from './transformer/remove-data-attr';
import { dynamicSizeTransformer } from './transformer/dynamic-size';
import { dynamicStrokeTransformer } from './transformer/dynamic-stroke';
import { uniqueIdTransformer } from './transformer/unique-id';
import { uniqueKeyframesIdTransformer } from './transformer/unique-keyframes-id';
import { removeCSSPrefixTransformer } from './transformer/remove-css-prefix';
import { camelTransformer } from './transformer/camel';
import { dynamicHueTransformer } from './transformer/dynamic-hue';
import { syncGroupProps } from './transformer/sync-group-props';
import { fixMaskTypeTransformer } from './transformer/fix-mask-type';

export interface IIconToolsOptions extends IRuntimeOptions {
  author: string;
  type: TGenType; // TODO 未来多种支持
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
  private readonly isImg: boolean;
  private prefix = 'icon';
  constructor(options: IIconToolsOptions) {
    this.$opts = options;
    this.compiler = this.createCompiler();
    this.runtimeCode = this.createRuntimeCode();
    const { type } = this.$opts;
    this.isImg = type === 'svg' || type === 'img';
    this.prefix = this.$opts.prefix || 'icon';
  }

  private createCompiler() {
    const { type, strokeLinecap, strokeLinejoin } = this.$opts;
    const colors = this.$opts.colors || [];
    const stroke = this.$opts.stroke || 0;
    const fixedSize = this.$opts.fixedSize || false;
    const style = this.$opts.style || false;

    const hueList: IIconColorHueInfo[] = [];
    const replaceList: IIconColorReplaceInfo[] = [];
    colors.forEach((item) => {
      if (item.type === 'hue') {
        hueList.push(item);
      } else {
        replaceList.push(item);
      }
    });
    // const isSvg = type === 'svg' || type === 'img';
    return (ref: IRef) => {
      const { name, content } = ref;
      const description = ref?.description || name;
      const rtl = ref?.rtl || false;
      const plugins: ITransformPlugin[] = []; // 删除无用的标签

      plugins.push(
        removeTagsTransformer({
          tags: ['title', 'desc', 'a', 'metadata'],
        }),
      ); // 删除掉无用的属性（当生成目标是react时，xmlns无效）

      plugins.push(
        removePropsTransformer({
          props: ['version', 'xmlns:xlink', ...(this.isImg ? [] : ['xmlns'])],
        }),
      ); // 修复mask-type属性的错误

      plugins.push(fixMaskTypeTransformer()); // data开头的属性无用

      plugins.push(removeDataAttrTransformer()); // 增加动态颜色替换，一定要在Hue替换之前

      if (replaceList.length) {
        plugins.push(
          dynamicColorTransformer({
            prefix: true,
            array: true,
            colors: replaceList.map((item) => {
              return item.color;
            }),
            ignore: (info) =>
              info.attrs.some((item) => {
                return (
                  item.name === 'fill-opacity' && item.expression === '0.01'
                );
              }),
          }),
        );
      } // 增加动态颜色替换

      if (hueList.length) {
        plugins.push(
          dynamicHueTransformer({
            prefix: true,
            hueList: hueList.map((item) => {
              return item.hue;
            }),
            forceReplaceColor: false,
          }),
        );
      } // 删除多余的ID

      plugins.push(
        uniqueIdTransformer({
          prefix: true,
          removeUnusedIds: true,
        }),
      ); // 处理CSS动画

      if (style) {
        plugins.push(
          uniqueKeyframesIdTransformer({
            prefix: true,
          }),
        );
        plugins.push(removeCSSPrefixTransformer());
      } // size处理

      plugins.push(
        dynamicSizeTransformer({
          prefix: true,
          widthName: fixedSize ? 'size' : 'width',
          heightName: fixedSize ? 'size' : 'height',
        }),
      ); // 处理描边

      plugins.push(
        dynamicStrokeTransformer({
          prefix: true,
          disableStroke: !stroke,
          disableStrokeLinejoin: !strokeLinejoin,
          disableStrokeLinecap: !strokeLinecap,
        }),
      ); // 处理额外增加的Rect

      if (!this.isImg) {
        plugins.push(
          removeConditionTransformer({
            tag: 'rect',
            condition: (info) =>
              info.attrs.some((item) => {
                return (
                  item.name === 'fill-opacity' && item.expression === '0.01'
                );
              }),
          }),
        );
      }

      if (this.isImg) {
        plugins.push(
          syncGroupProps({
            attrNames: [
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-width',
              'stroke',
              'fill',
              'fill-rule',
            ],
          }),
        );
      } // React需要进行变量名升级

      if (!this.isImg) {
        plugins.push(
          camelTransformer({
            namespace: true,
            namespaceOnly: true,
          }),
        );
      }

      // TODO 未来多种支持
      let generator: ImgGenerator | JSXGenerator;

      if (type === 'img') {
        generator = this.createImgGenerator(name, description, rtl);
      } else if (type === 'cube-vue') {
        generator = this.createCubeVueGenerator(name, description, rtl);
      } else {
        generator = this.createVueGenerator(name, description, rtl);
      }
      return compiler({
        name,
        content,
        generator,
        plugins,
      });
    };
  }

  private createVueGenerator(name: string, description: string, rtl: boolean) {
    return new JSXGenerator({
      name,
      author: this.$opts.author,
      rtl,
      type: this.$opts.type,
      prefix: this.prefix,
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

  private createImgGenerator(name: string, description: string, rtl: boolean) {
    return new ImgGenerator({
      name,
      author: this.$opts.author,
      rtl,
      type: this.$opts.type,
      prefix: this.prefix,
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

  private createCubeVueGenerator(
    name: string,
    description: string,
    rtl: boolean,
  ) {
    return new CubeVueGenerator({
      name,
      author: this.$opts.author,
      rtl,
      type: this.$opts.type,
      prefix: this.prefix,
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
    return {
      mime: 'image/svg+xml',
      path: `icons/${name}.${this.$opts.useType ? 't' : 'j'}s${
        this.isImg ? '' : 'x'
      }`,
      content: svg,
    };
  }

  private getRuntimeCode() {
    return this.runtimeCode;
  }

  private getRuntimeFile() {
    return {
      mime: 'text/javascript',
      path: `runtime/index.${this.$opts.useType ? 't' : 'j'}s${
        this.isImg ? '' : 'x'
      }`,
      content: this.getRuntimeCode(),
    };
  }

  private getIndexCode() {
    const generator = new IndexGenerator({
      name: 'index',
      type: this.$opts.type,
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '引用出口',
    });
    return generator.process();
  }

  private getIndexFile() {
    return {
      mime: 'text/javascript',
      path: `index.${this.$opts.useType ? 't' : 'j'}s`,
      content: this.getIndexCode(),
    };
  }

  private getMapCode() {
    const generator = new MapGenerator({
      prefix: this.prefix,
      name: 'map',
      type: '',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '组件集合',
      icons: Object.keys(this.compilerMap),
    });
    return generator.process();
  }

  private getMapFile() {
    return {
      mime: 'text/javascript',
      path: `map.${this.$opts.useType ? 'ts' : 'js'}`,
      content: this.getMapCode(),
    };
  }

  private getSvgCode() {
    const generator = new SvgGenerator({
      prefix: this.prefix,
      name: 'svg',
      type: '',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '组件集合',
      icons: Object.keys(this.compilerMap),
    });
    return generator.process();
  }

  private getSvgFile() {
    return {
      mime: 'text/javascript',
      path: `svg.${this.$opts.useType ? 'ts' : 'js'}`,
      content: this.getSvgCode(),
    };
  }

  private getAllCode() {
    const generator = new AllGenerator({
      name: 'all',
      type: this.$opts.type,
      prefix: this.prefix,
      author: this.$opts.author,
      fixedSize: this.$opts.fixedSize || false,
      stroke: this.$opts.stroke || 0,
      strokeLinecap: this.$opts.strokeLinecap,
      strokeLinejoin: this.$opts.strokeLinejoin,
      wrapperNeedName: true,
      useType: this.$opts.useType,
      wrapperNeedRTL: true,
      theme: this.$opts.theme || [],
      colors: this.$opts.colors || [],
      nameDisplayType: 'camel',
      description: '所有组件出口',
    });
    return generator.process();
  }

  private getAllFile() {
    return {
      mime: 'text/javascript',
      path: `all.${this.$opts.useType ? 't' : 'j'}s`,
      content: this.getAllCode(),
    };
  }

  private getCubeCode() {
    const generator = new CubeGenerator({
      name: 'cube',
      type: this.$opts.type,
      prefix: this.prefix,
      author: this.$opts.author,
      fixedSize: this.$opts.fixedSize || false,
      stroke: this.$opts.stroke || 0,
      strokeLinecap: this.$opts.strokeLinecap,
      strokeLinejoin: this.$opts.strokeLinejoin,
      wrapperNeedName: true,
      useType: this.$opts.useType,
      wrapperNeedRTL: true,
      theme: this.$opts.theme || [],
      colors: this.$opts.colors || [],
      nameDisplayType: 'camel',
      description: '自定义组件出口',
    });
    return generator.process();
  }

  private getCubeFile() {
    return {
      mime: 'text/javascript',
      path: `cube.${this.$opts.useType ? 't' : 'j'}sx`,
      content: this.getCubeCode(),
    };
  }

  private getLessCode(type: TGenType) {
    const generator = new LessGenerator({
      name: 'index',
      type,
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '样式文件',
      prefix: this.prefix,
      cssPrefix: this.$opts.cssPrefix || 'sit',
    });
    return generator.process();
  }

  private getLessFile() {
    return {
      mime: 'text/css',
      path: 'runtime/index.less',
      content: this.getLessCode('less'),
    };
  }

  private getLessJsFile() {
    return {
      mime: 'text/javascript',
      path: `cube-style.${this.$opts.useType ? 't' : 'j'}s`,
      content: this.getLessCode('cube-vue'),
    };
  }

  getIconFiles() {
    const list = Object.keys(this.compilerMap).map((key: string) =>
      this.getIconFile(key),
    );
    list.push(
      this.getRuntimeFile(),
      this.getIndexFile(),
      this.getMapFile(),
      this.getAllFile(),
    );

    if (this.$opts.type !== 'svg') {
      list.push(this.getLessFile());
    }

    if (this.$opts.type === 'cube-vue') {
      list.push(this.getLessJsFile());
      list.push(this.getCubeFile());
    }

    if (this.isImg) {
      list.push(this.getSvgFile());
    }

    return list;
  }

  private createRuntimeCode() {
    const baseOptions: IRuntimeGeneratorOptions = {
      prefix: this.prefix,
      name: 'runtime',
      type: this.$opts.type,
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '运行时',
      useType: this.$opts.useType || false,
      colors: this.$opts.colors || [],
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
    const vueRuntime = new VueRuntimeGenerator(
      Object.assign(baseOptions, {
        type: 'vue' as TGenType,
      }),
    );
    const cubeVueRuntime = new CubeVueRuntimeGenerator(
      Object.assign(baseOptions, {
        type: 'cube-vue' as TGenType,
      }),
    );
    const imgRuntime = new ImgRuntimeGenerator(
      Object.assign(baseOptions, {
        type: 'img' as TGenType,
      }),
    );
    let generator:
      | VueRuntimeGenerator
      | ImgRuntimeGenerator
      | CubeVueRuntimeGenerator
      | { process: () => string };
    switch (this.$opts.type) {
      case 'vue':
        generator = vueRuntime;
        break;
      case 'img':
        generator = imgRuntime;
        break;
      case 'cube-vue':
        generator = cubeVueRuntime;
        break;

      default:
        generator = {
          process: () => '',
        };
        break;
    }
    return generator.process();
  }
}

export const iconCompiler = (options: IIconToolsOptions) => {
  return new IconCompiler(options);
};
