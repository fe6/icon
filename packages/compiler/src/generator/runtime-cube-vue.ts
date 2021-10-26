/** @format */

import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

/**
 * @file CubeVueRuntimeGenerator 生成运行时代码
 */

export class CubeVueRuntimeGenerator extends RuntimeGenerator {
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
        "import type { ComponentOptions, DefineComponent } from '@vue/runtime-dom'",
      );
    }

    this.writeLine("import { inject, provide } from '@vue/runtime-dom'");

    this.writeLine();
  }

  private processPlatformTypes() {
    this.writeLine('// 包裹后的图标属性');
    this.writeLine(
      `export interface ${this.getInterfaceName(
        'props',
      )} extends ${this.getInterfaceName('base')} {`,
    );
    this.indent(1);
    this.writeLine('spin?: boolean;');
    this.writeLine('id?: string | number;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('// 包裹后的图标属性');
    this.writeLine(
      `export type ${this.getTypeName(
        'options',
      )} = ComponentOptions<${this.getInterfaceName('props')}>;`,
    );
    this.writeLine();
    this.writeLine('// 包裹前的图标渲染器');
    this.writeLine(
      `export type ${this.getTypeName(
        'Render',
      )} = (props: ${this.getInterfaceName(
        'props',
        true,
      )}) => JSX.Element | string;`,
    );
    this.writeLine();

    this.writeLine('// 包裹后的图标');
    this.writeLine(
      `export type ${this.getTypeName(
        '',
      )} = DefineComponent<${this.getInterfaceName('props', true)}>;`,
    );
    this.writeLine();

    this.writeLine('// Window iconCube 每一条数据');
    this.writeLine(
      `export interface ${this.getInterfaceName(
        'cubeItemData',
      )} extends ${this.getInterfaceName('props')} {`,
    );
    this.indent(1);
    this.writeLine('content: string;');
    this.writeLine('viewBox: string;');
    this.writeLine('canSet?: boolean; // 是否优先定制数据');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('// Window iconCube 整个数据类型');
    this.writeLine(`export interface ${this.getInterfaceName('cubeData')}{`);
    this.indent(1);
    this.writeLine(
      `[key: number | string]: ${this.getInterfaceName('cubeItemData')};`,
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  private processPlatformCode() {}

  private processPlatformWrapper() {
    const prefix = this.prefix;
    const wrapperNeedName = this.wrapperNeedName;
    const wrapperNeedRTL = this.wrapperNeedRTL;
    const optionType = this.getTypeName('options');
    this.writeLine();

    this.writeLine(`const options${this.useType ? `: ${optionType}` : ''} = {`);
    this.indent(1); // 处理name

    this.writeLine(`name: '${prefix}-' + name,`); // 处理inject

    // this.writeLine(`inject: ['${this.prefix.toUpperCase()}_CONFIGS'],`); // 处理属性

    this.writeLine(
      `props: [${this.getPropKeys()
        .map((item) => `'${item}'`)
        .join(', ')}, 'spin', 'id'],`,
    ); // 处理数据

    this.writeLine('setup: (props) => {');
    this.indent(1);
    this.writeLine(
      `const ${this.prefix.toUpperCase()}_CONFIGS = inject(${this.getTypeName(
        'context',
      )}, DEFAULT_${this.prefix.toUpperCase()}_CONFIGS);`,
    );
    this.writeLine();
    this.writeLine('return () => {');
    this.indent(1);
    this.writeLine('const {');
    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('spin,');
    this.indent(-1);
    this.writeLine('} = props;'); // 生成渲染属性

    this.writeLine();
    this.writeLine('const propsId = String(props.id ? props.id : name);');

    this.writeLine(
      `const svgProps = ${this.getTypeName('converter')}(propsId, {`,
    );
    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('spin,');
    this.writeLine('id: propsId,');

    this.indent(-1);
    this.writeLine(`}, ${this.prefix.toUpperCase()}_CONFIGS);`);

    this.writeLine(
      `const cls${
        this.useType ? ': string[]' : ''
      } = [\`\${${this.prefix.toUpperCase()}_CONFIGS.prefix\}-${
        this.prefix
      }\`];`,
    );

    if (wrapperNeedName) {
      this.writeLine();
      this.writeLine(
        `cls.push(\`\${${this.prefix.toUpperCase()}_CONFIGS.prefix}-${
          this.prefix
        }-\${name}\`);`,
      );
    }

    if (wrapperNeedRTL) {
      this.writeLine();
      this.writeLine(`if (rtl && ${this.prefix.toUpperCase()}_CONFIGS.rtl) {`);
      this.indent(1);
      this.writeLine(
        `cls.push(\`\${${this.prefix.toUpperCase()}_CONFIGS.prefix}-${
          this.prefix
        }-rtl\`);`,
      );
      this.indent(-1);
      this.writeLine('}');
    }

    this.writeLine();
    this.writeLine("if (spin && String(spin) === 'true') {");
    this.indent(1);
    this.writeLine(
      `cls.push(\`\${${this.prefix.toUpperCase()}_CONFIGS.prefix}-${
        this.prefix
      }-spin\`);`,
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine(`return name === 'cube' ? (`);
    this.indent(1);
    this.writeLine(
      `<span class={cls.join(' ')} v-html={render(svgProps)}></span>`,
    );
    this.indent(-1);
    this.writeLine(') : (');
    this.indent(1);
    this.writeLine(`<span class={cls.join(' ')}>{render(svgProps)}</span>`);
    this.indent(-1);
    this.writeLine(');');

    this.indent(-1);
    this.writeLine('}; // setup return end');
    this.writeLine();

    this.indent(-1);
    this.writeLine('} // setup end');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine('return options;');
  }
}
