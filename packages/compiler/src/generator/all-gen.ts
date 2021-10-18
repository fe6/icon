/**
 * @format
 * @file AllGenerator 生成 all 代码
 */

import { pascalCase } from '../util';
import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

const defOpts = {
  author: 'fe6',
  name: '',
};

export class AllGenerator extends RuntimeGenerator {
  prefix: string;
  useType: boolean;

  constructor(options: IRuntimeGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.prefix = options.prefix || 'icon';
    this.useType = options.useType || false;
  }

  process() {
    // 写头部的注释
    this.processHeaderComment();

    const iconProps = this.getInterfaceName('props');
    const iconMap = this.getTypeName('map');
    const iconType = this.getTypeName('type');
    const allOptions = this.getInterfaceName('allOptions');
    const allIcon = `All${pascalCase(this.prefix)}`;

    this.writeLine(
      `import { createVNode${
        this.useType ? ', App, DefineComponent, ComponentOptions' : ''
      } } from '@vue/runtime-dom';`,
    );
    this.writeLine(`import * as ${iconMap} from './map';`);
    if (this.useType) {
      this.writeLine(`import { ${iconProps} } from './runtime';`);
      this.writeLine();
    }

    if (this.useType) {
      const allProps = this.getInterfaceName('AllProps');
      this.writeLine(`export type ${iconType} = keyof typeof ${iconMap};`);
      this.writeLine();
      this.writeLine(`export interface ${allProps} extends ${iconProps} {`);
      this.indent(1);
      this.writeLine(`type: ${iconType} | string;`);
      this.indent(-1);
      this.writeLine(`}`);
      this.writeLine();
      this.writeLine(
        `export type ${allOptions} = ComponentOptions<${allProps}>;`,
      );

      this.writeLine('// 包裹后的图标');
      this.writeLine(`export type ${allIcon} = DefineComponent<${allProps}>;`);
    }

    this.writeLine();
    this.writeLine(
      `const toPascalCase = (val${this.useType ? ': string' : ''})${
        this.useType ? ': string' : ''
      } => {`,
    );
    this.indent(1);
    this.writeLine(
      'return val.replace(/(^w|-w)/g, c => c.slice(-1).toUpperCase());',
    );
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    const parkOptions = this.getInterfaceName('waterOptions');
    this.writeLine(
      `const ${parkOptions}${this.useType ? `: ${allOptions}` : ''} = {`,
    );
    this.indent(1); // 处理name

    this.writeLine(`name: 'water-icon',`);

    this.writeLine(
      `props: [${this.getPropKeys()
        .map((item) => `'${item}'`)
        .join(', ')}, 'spin', 'type'],`,
    ); // 生成 props

    this.writeLine('setup: (props => {');
    this.indent(1);
    this.writeLine('const type = toPascalCase(props.type);');
    this.writeLine('const {');
    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('spin,');
    this.indent(-1);
    this.writeLine('} = props;'); // 生成渲染属性

    this.writeLine();
    this.writeLine(`if (!(type in ${iconMap})) {
      throw new Error(\`\$\{type\} is not a valid icon type name\`);
    }`);

    this.writeLine();
    this.writeLine(
      `return () => createVNode(${iconMap}[type${
        this.useType ? ` as ${iconType}` : ''
      }], {`,
    );

    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('spin,');
    this.indent(-1);

    this.writeLine('});');
    this.indent(-1);
    this.writeLine('}),');
    this.indent(-1);
    this.writeLine('};');

    this.writeLine();

    this.writeLine(
      `export const ${this.getTypeName('Water')}${
        this.useType ? `: ${allIcon}` : ''
      } = ${parkOptions}${this.useType ? ` as ${allIcon}` : ''};`,
    );

    this.writeLine();

    this.writeLine(
      `export const waterIconInstall = (Vue${
        this.useType ? ': App' : ''
      }, prefix${this.useType ? '?: string' : ''})${
        this.useType ? ': void' : ''
      } => {`,
    );
    this.indent(1);
    this.writeLine(`Object.values(${iconMap}).forEach((icon) => {`);
    this.indent(1);
    this.writeLine('if (icon.name) {');
    this.indent(1);
    this.writeLine(
      `Vue.component(prefix ? prefix + '-' + icon.name.slice(5) : icon.name, icon);`,
    );
    this.indent(-1);
    this.writeLine('};');
    this.indent(-1);
    this.writeLine('});');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    return this.getResult();
  }
}
