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
        "import type { ComponentOptions, DefineComponent } from '@vue/runtime-dom'",
      );
    }

    this.writeLine(
      "import { inject, provide, defineComponent } from '@vue/runtime-dom'",
    );

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
      )} = (props: ${this.getInterfaceName('props', true)}) => JSX.Element;`,
    );
    this.writeLine();
    this.writeLine('// 包裹后的图标');
    this.writeLine(
      `export type ${this.getTypeName(
        '',
      )} = DefineComponent<${this.getInterfaceName('props', true)}>;`,
    );
    this.writeLine();
  }

  private processPlatformCode() {}

  private processPlatformWrapper() {
    const prefix = this.prefix;
    const wrapperNeedName = this.wrapperNeedName;
    const wrapperNeedRTL = this.wrapperNeedRTL;
    const optionType = this.getTypeName('options');
    this.writeLine();

    this.writeLine(
      `const options${
        this.useType ? `: DefineComponent<${optionType}>` : ''
      } = ${this.useType ? 'defineComponent(' : ''}{`,
    );
    this.indent(1); // 处理name

    this.writeLine(`name: '${prefix}-' + name,`); // 处理inject

    // this.writeLine(`inject: ['${this.prefix.toUpperCase()}_CONFIGS'],`); // 处理属性

    this.writeLine(
      `props: [${this.getPropKeys()
        .map((item) => `'${item}'`)
        .join(', ')}, 'spin'],`,
    ); // 处理数据

    this.writeLine('setup: (props) => {');
    this.indent(1);
    this.writeLine('const id = guid();');
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

    this.writeLine(`const svgProps = ${this.getTypeName('converter')}(id, {`);
    this.indent(1);
    this.getPropKeys().forEach((key: string, index: number, _ref: string[]) => {
      const length = _ref.length;
      this.writeLine(key + (index !== length - 1 ? ',' : ''));
    });

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
    this.writeLine('if (spin) {');
    this.indent(1);
    this.writeLine(
      `cls.push(\`\${${this.prefix.toUpperCase()}_CONFIGS.prefix}-${
        this.prefix
      }-spin\`);`,
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('return (');
    this.indent(1);
    this.writeLine("<span class={cls.join(' ')}>");
    this.indent(1);
    this.writeLine('{render(svgProps)}');
    this.indent(-1);
    this.writeLine('</span>');
    this.indent(-1);
    this.writeLine(');');

    this.indent(-1);
    this.writeLine('}; // setup return end');
    this.writeLine();

    this.indent(-1);
    this.writeLine('} // setup end');
    this.indent(-1);
    this.writeLine(`}${this.useType ? ')' : ''};`);
    this.writeLine();
    this.writeLine('return options;');
  }
}
