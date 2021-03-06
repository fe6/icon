/**
 * @format
 * @file AllGenerator 生成 all 代码
 */

import { TGenType } from '../types';
import { pascalCase } from '../util';
import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

const defOpts = {
  author: 'fe6',
  name: '',
  type: '' as TGenType,
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
    if (this.type === 'vue' || this.type === 'cube-vue') {
      this.renderVue();
    } else {
      this.renderImg();
    }
    return this.getResult();
  }

  renderImg() {
    // 写头部的注释
    this.processHeaderComment();

    const iconMap = this.getTypeName('map');
    const iconProps = this.getInterfaceName('props');
    const iconType = this.getTypeName('type');
    const allProps = this.getInterfaceName('AllProps');

    this.writeLine(`import * as ${iconMap} from './map';`);
    if (this.useType) {
      this.writeLine(
        `import { ${iconProps}, ${this.getTypeName(
          'wrapper ',
        )} } from './runtime';`,
      );
      this.writeLine();

      this.writeLine(`export type ${iconType} = keyof typeof ${iconMap};`);
      this.writeLine();
      this.writeLine(`export interface ${allProps} extends ${iconProps} {`);
      this.indent(1);
      this.writeLine(`type?: ${iconType} | string;`);
      this.indent(-1);
      this.writeLine(`}`);
      this.writeLine();
    }

    const typeString = this.useType ? ': string' : '';
    const typeStrArray = this.useType ? `${typeString}[]` : '';

    this.writeLine('// 正则 数据中的默认颜色 替换');
    this.writeLine(
      `const reColors${typeStrArray} = ['#000', '#2f88ff', '#fff', '#43ccf8'];`,
    );
    this.writeLine(
      `const reFullColors${typeStrArray} = ['#000000', '#2f88ff', '#ffffff', '#43ccf8'];`,
    );
    this.writeLine(
      `const reEnColors${typeStrArray} = ['black', '#2f88ff', 'white', '#43ccf8'];`,
    );
    this.writeLine();
    this.writeLine('// rgb 和 #fff 转换成 #ffffff');
    this.writeLine();
    this.writeLine(`const colorHex = (color${typeString}) => {`);
    this.indent(1);
    this.writeLine('let that = color;');
    this.writeLine('//十六进制颜色值的正则表达式');
    this.writeLine('const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;');
    this.writeLine('// 如果是rgb颜色表示');
    this.writeLine('if (/^(rgb|RGB)/.test(that)) {');
    this.indent(1);
    this.writeLine(
      'const aColor = that.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");',
    );
    this.writeLine('let strHex = "#";');
    this.writeLine('for (let i=0; i<aColor.length; i++) {');
    this.indent(1);
    this.writeLine('let hex = Number(aColor[i]).toString(16);');
    this.writeLine('if (hex.length < 2) {');
    this.indent(1);
    this.writeLine("hex = '0' + hex;");
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('strHex += hex;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('if (strHex.length !== 7) {');
    this.indent(1);
    this.writeLine('strHex = that;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return strHex;');
    this.indent(-1);
    this.writeLine('} else if (reg.test(that)) {');
    this.indent(1);
    this.writeLine('const aNum = that.replace(/#/,"").split("");');
    this.writeLine('if (aNum.length === 6) {');
    this.indent(1);
    this.writeLine('return that;');
    this.indent(-1);
    this.writeLine('} else if(aNum.length === 3) {');
    this.indent(1);
    this.writeLine('let numHex = "#";');
    this.writeLine('for (let i=0; i<aNum.length; i+=1) {');
    this.indent(1);
    this.writeLine('numHex += (aNum[i] + aNum[i]);');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return numHex;');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return that;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine('// 获取 SVG 内容');
    this.writeLine(
      `export const allGetContent = (svgItem${typeString}, props${
        this.useType ? `: ${iconProps}` : ''
      })${typeString} => {`,
    );
    this.indent(1);
    this.writeLine('if (!svgItem) {');
    this.indent(1);
    this.writeLine(`return '';`);
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine(
      'const { size, colors, strokeLinejoin, strokeLinecap, strokeWidth } = props;',
    );
    this.writeLine();

    this.writeLine('let originSvg = svgItem;');
    this.writeLine();
    this.writeLine(`originSvg = originSvg.replace(/\\\\/g, '');`);
    this.writeLine(
      "originSvg = originSvg[0] === '\"' ? originSvg.substr(1, originSvg.length - 1) : originSvg;",
    );
    this.writeLine(
      "originSvg = originSvg[originSvg.length - 1] === '\"' ? originSvg.substr(0, originSvg.length - 1) : originSvg;",
    );
    this.writeLine(
      `originSvg = originSvg.replace(/width="\\d{0,}\\w{2,3}"/, \`width="\${size}"\`);`,
    );
    this.writeLine(
      `originSvg = originSvg.replace(/height="\\d{0,}\\w{2,3}"/, \`height="\${size}"\`);`,
    );
    this.writeLine();
    this.writeLine("let contentHtml = svgItem ? originSvg : '';");
    this.writeLine();
    this.writeLine('if (colors) {');
    this.indent(1);
    this.writeLine(
      `colors.forEach((colorItem${typeString}, colorIdx${
        this.useType ? ': number' : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine(
      `contentHtml = contentHtml.replace(new RegExp(\`\${reColors[colorIdx]}|\${reColors[colorIdx].toUpperCase()}|\${reEnColors[colorIdx]}|\${reEnColors[colorIdx].toUpperCase()}|\${reFullColors[colorIdx]}|\${reFullColors[colorIdx].toUpperCase()}\`, 'g'), colorHex(colorItem));`,
    );
    this.indent(-1);
    this.writeLine('});');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine('contentHtml = contentHtml.replace(');
    this.indent(-1);
    this.writeLine('/stroke-linejoin="round"/g,');
    this.writeLine(`\`stroke-linejoin="\${strokeLinejoin}"\`,`);
    this.indent(-1);
    this.writeLine(');');
    this.writeLine();
    this.writeLine('contentHtml = contentHtml.replace(');
    this.indent(-1);
    this.writeLine('/stroke-linecap="round"/g,');
    this.writeLine(`\`stroke-linecap="\${strokeLinecap}"\`,`);
    this.indent(-1);
    this.writeLine(');');
    this.writeLine();
    this.writeLine('contentHtml = contentHtml.replace(');
    this.indent(-1);
    this.writeLine('/stroke-width="4"/g,');
    this.writeLine(`\`stroke-width="\${strokeWidth}"\`,`);
    this.indent(-1);
    this.writeLine(');');
    this.writeLine();
    this.writeLine('return contentHtml;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine(
      `export const iconKeg = (props${
        this.useType ? `: ${allProps}` : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine('if (props && props.type) {');
    this.indent(1);
    this.writeLine(
      `return IconMap[props.type${this.useType ? ' as IconType' : ''}](props);`,
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('if (props && props.svg) {');
    this.indent(1);
    this.writeLine(
      `return IconWrapper('icon-keg', true, (props${
        this.useType ? `: ${iconProps}` : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine('let curSvg = String(props.svg);');
    this.writeLine('return allGetContent(curSvg, props);');
    this.indent(-1);
    this.writeLine('})(props);');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('};');
  }

  renderVue() {
    // 写头部的注释
    this.processHeaderComment();

    const iconProps = this.getInterfaceName('props');
    const myPrefix = pascalCase(this.prefix);
    const iconMap = `map${myPrefix}`;
    const iconType = this.getTypeName('type');
    const allOptions = this.getInterfaceName('allOptions');
    const allIcon = `TAll${myPrefix}`;

    if (this.useType) {
      this.writeLine(
        `import type { App, DefineComponent, ComponentOptions } from 'vue';`,
      );
    }

    this.writeLine(`import { createVNode } from 'vue';`);
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

    this.writeLine(`name: 'icon-keg',`);

    this.writeLine(
      `props: [${this.getPropKeys()
        .map((item) => `'${item}'`)
        .join(', ')}, 'spin', 'type'],`,
    ); // 生成 props

    this.writeLine('render() {');
    this.indent(1);
    this.writeLine('const type = toPascalCase(this.type);');

    this.writeLine();
    this.writeLine(`if (!(type in ${iconMap})) {
      throw new Error(\`\$\{type\} is not a valid icon type name\`);
    }`);
    this.writeLine();

    this.writeLine('const {');
    this.indent(1);
    this.getPropKeys().forEach((key: string) => {
      this.writeLine(`${key},`);
    });
    this.writeLine('spin,');
    this.indent(-1);
    this.writeLine('} = this;'); // 生成渲染属性

    this.writeLine();
    this.writeLine(
      `return createVNode(${iconMap}[this.type${
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
    this.writeLine('},');
    this.indent(-1);
    this.writeLine('};');

    this.writeLine();

    this.writeLine(
      `export const ${this.getTypeName('')}Keg${
        this.useType ? `: ${allIcon}` : ''
      } = ${parkOptions}${this.useType ? ` as ${allIcon}` : ''};`,
    );

    this.writeLine();

    this.writeLine(
      `export const iconKegInstall = (Vue${
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
  }
}
