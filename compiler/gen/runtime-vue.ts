/** @format */

import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

/**
 * @file VueRuntimeGenerator 生成运行时代码
 */

export class VueRuntimeGenerator extends RuntimeGenerator {
  constructor(options: IRuntimeGeneratorOptions) {
    super(options);
    this.$opts = options;
    return this;
  }

  process(): string {
    return this.innerProcess({
      processPlatformImports: this.processPlatformImports.bind(this),
      processPlatformTypes: this.processPlatformTypes.bind(this),
      processPlatformCode: this.processPlatformCode.bind(this),
      processPlatformWrapper: this.processPlatformWrapper.bind(this),
    });
  }

  private processPlatformImports() {
    if (this.useType) {
      this.writeLine(
        "import Vue, {ComponentOptions, CreateElement, VNode, VueConstructor} from 'vue';",
      );
      this.writeLine(
        'import {ArrayPropsDefinition, DefaultComputed, DefaultData, DefaultMethods} ' +
          "from 'vue/types/options';",
      );
    } else {
      this.writeLine(
        "import React, {createContext, useContext, useMemo} from 'react';",
      );
    }

    this.writeLine();
  }

  private processPlatformTypes() {
    this.writeLine('// 包裹后的图标属性');
    this.writeLine(
      'export interface '
        .concat(this.getInterfaceName('props'), ' extends ')
        .concat(this.getInterfaceName('base'), ' {'),
    );
    this.indent(1);
    this.writeLine('spin?: boolean;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('// 渲染Help函数属性');
    this.writeLine(
      'export type '.concat(this.getTypeName('helper'), ' = CreateElement;'),
    );
    this.writeLine();
    const instance = this.getInterfaceName('instance');
    this.writeLine();
    this.writeLine('// 包裹前的图标实例');
    this.writeLine(
      'export interface '
        .concat(instance, ' extends Vue, ')
        .concat(this.getInterfaceName('props'), ' {'),
    );
    this.indent(1);
    this.writeLine('id: string;');
    this.writeLine(
      ''
        .concat(this.prefix.toUpperCase(), '_CONFIGS?: ')
        .concat(this.getInterfaceName('config'), ';'),
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('// 包裹后的图标属性');
    this.writeLine('// eslint-disable-next-line max-len');
    this.writeLine(
      'export type '.concat(this.getTypeName('options'), ' = ') +
        'ComponentOptions<'.concat(
          instance,
          ', DefaultData<{id: string}>, DefaultMethods<never>, ',
        ) +
        'DefaultComputed, ArrayPropsDefinition<'.concat(
          this.getInterfaceName('props'),
          '>, ',
        ) +
        ''.concat(this.getInterfaceName('props'), '>;'),
    );
    this.writeLine();
    this.writeLine('// 包裹前的图标渲染器');
    this.writeLine(
      'export type '.concat(this.getTypeName('Render'), ' = ') +
        '(h: '
          .concat(this.getTypeName('helper'), ', props: ')
          .concat(this.getInterfaceName('props', true), ') => VNode;'),
    );
    this.writeLine();
    this.writeLine('// 包裹后的图标');
    this.writeLine(
      'export type '
        .concat(this.getTypeName(''), ' = VueConstructor<')
        .concat(instance, '>;'),
    );
    this.writeLine();
  }

  private processPlatformCode() {}

  private processPlatformWrapper() {
    const prefix = this.prefix;
    const wrapperNeedName = this.wrapperNeedName;
    const wrapperNeedRTL = this.wrapperNeedRTL;
    this.writeLine();
    this.writeLine(
      'const options: '.concat(this.getTypeName('options'), ' = {'),
    );
    this.indent(1); // 处理name

    this.writeLine("name: '".concat(prefix, "-' + name,")); // 处理inject

    this.writeLine(
      "inject: ['".concat(this.prefix.toUpperCase(), "_CONFIGS'],"),
    ); // 处理属性

    this.writeLine(
      'props: ['.concat(
        this.getPropKeys()
          .map((item) => {
            return "'".concat(item, "'");
          })
          .join(', '),
        ", 'spin'],",
      ),
    ); // 处理数据

    this.writeLine('data() {');
    this.indent(1);
    this.writeLine('return {id: guid()};');
    this.indent(-1);
    this.writeLine('},'); // 继承属性

    this.writeLine('inheritAttrs: false,'); // 渲染函数

    this.writeLine(
      'render(this: '.concat(
        this.getInterfaceName('instance'),
        ', h: CreateElement): VNode {',
      ),
    );
    this.indent(1); // 解构变量

    this.writeLine();
    this.writeLine('const {');
    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('id,');
    this.writeLine('spin,');
    this.writeLine(
      ''
        .concat(this.prefix.toUpperCase(), '_CONFIGS = DEFAULT_')
        .concat(this.prefix.toUpperCase(), '_CONFIGS'),
    );
    this.indent(-1);
    this.writeLine('} = this;');
    this.writeLine(); // 生成渲染属性

    this.writeLine(
      'const svgProps = '.concat(this.getTypeName('converter'), '(id, {'),
    );
    this.indent(1);
    this.getPropKeys().forEach((key: string, index: number, _ref: string[]) => {
      const length = _ref.length;
      this.writeLine(key + (index !== length - 1 ? ',' : ''));
    });
    this.indent(-1);
    this.writeLine('}, '.concat(this.prefix.toUpperCase(), '_CONFIGS);'));
    this.writeLine(); // 生成className

    if (this.useType) {
      this.writeLine(
        'const cls: string[] = ['.concat(this.getClassName(), '];'),
      );
    } else {
      this.writeLine('const cls = ['.concat(this.getClassName(), '];'));
    }

    if (wrapperNeedName) {
      this.writeLine();
      this.writeLine(
        'cls.push('.concat(this.getClassName(), " + '-' + name);"),
      );
    }

    if (wrapperNeedRTL) {
      this.writeLine();
      this.writeLine(
        'if (rtl && '.concat(this.prefix.toUpperCase(), '_CONFIGS.rtl) {'),
      );
      this.indent(1);
      this.writeLine('cls.push('.concat(this.getClassName('rtl'), ');'));
      this.indent(-1);
      this.writeLine('}');
    }

    this.writeLine();
    this.writeLine('if (spin) {');
    this.indent(1);
    this.writeLine('cls.push('.concat(this.getClassName('spin'), ');'));
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('return (');
    this.indent(1);
    this.writeLine("<span class={cls.join(' ')}>");
    this.indent(1);
    this.writeLine('{render(h, svgProps)}');
    this.indent(-1);
    this.writeLine('</span>');
    this.indent(-1);
    this.writeLine(');');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine('return options as '.concat(this.getTypeName(''), ';'));
  }
}
