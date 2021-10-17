/** @format */

import { JSXGenerator } from './generator/jsx-gen';
import { LessGenerator } from './generator/less-gen';
import { IndexGenerator } from './generator/index-gen';
import { MapGenerator } from './generator/map-gen';
import { VueRuntimeGenerator } from './generator/runtime-vue';
import {
  IRuntimeGeneratorOptions,
  IRuntimeOptions,
} from './generator/runtime-base';
import { compiler } from './compiler';
import { IIconColorHueInfo, IIconColorReplaceInfo } from './types';

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
    const isSvg = type === 'svg';
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
          props: ['version', 'xmlns:xlink'].concat(isSvg ? [] : ['xmlns']),
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
            ignore: function ignore(info) {
              return info.attrs.some((item) => {
                return (
                  item.name === 'fill-opacity' && item.expression === '0.01'
                );
              });
            },
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

      if (!isSvg) {
        plugins.push(
          removeConditionTransformer({
            tag: 'rect',
            condition: function condition(info) {
              return info.attrs.some((item) => {
                return (
                  item.name === 'fill-opacity' && item.expression === '0.01'
                );
              });
            },
          }),
        );
      }

      if (isSvg) {
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

      if (!isSvg) {
        plugins.push(
          camelTransformer({
            namespace: true,
            namespaceOnly: type === 'vue',
          }),
        );
      }

      // TODO 未来多种支持
      const generator = this.createVueGenerator(name, description, rtl);
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
        .concat(name, '.')
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

  private getMapCode() {
    const generator = new MapGenerator({
      name: 'map',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '引用出口',
      icons: Object.keys(this.compilerMap),
    });
    return generator.process();
  }

  private getIndexCode() {
    const generator = new IndexGenerator({
      name: 'index',
      author: this.$opts.author,
      nameDisplayType: 'camel',
      description: '引用出口',
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

  private getMapFile() {
    return {
      mime: 'text/javascript',
      path: `map.${this.$opts.useType ? 'ts' : 'js'}`,
      content: this.getMapCode(),
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
    list.push(this.getRuntimeFile(), this.getIndexFile(), this.getMapFile());

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
