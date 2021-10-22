/**
 * @format
 * @file CubeGenerator 生成 cube 代码
 */

import { TGenType } from '../types';
import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

const defOpts = {
  author: 'fe6',
  name: '',
  type: '' as TGenType,
};

export class CubeGenerator extends RuntimeGenerator {
  prefix: string;
  useType: boolean;

  constructor(options: IRuntimeGeneratorOptions = defOpts) {
    super(options);

    this.$opts = Object.assign(defOpts, options);
    this.prefix = options.prefix || 'icon';
    this.useType = options.useType || false;
  }

  process() {
    this.renderCube();
    return this.getResult();
  }

  renderCube() {
    // 写头部的注释
    this.processHeaderComment();

    this.writeLine(`import { defineCustomElement } from '@vue/runtime-dom';`);
    this.writeLine();
    this.writeLine(`import cubeStyle from './cube-style';`);

    const iPropsName = this.getInterfaceName('props');
    const wrapperName = this.getTypeName('wrapper');
    const iCubeItemDataName = this.getInterfaceName('cubeItemData');
    this.writeLine(`import {`);
    this.indent(1);
    if (this.useType) {
      this.writeLine(`${iPropsName},`);
      this.writeLine(`${iCubeItemDataName},`);
    }
    this.writeLine(`${wrapperName},`);
    this.writeLine('getSvgItem,');
    this.writeLine('getSvgProp,');
    this.indent(-1);
    this.writeLine(`} from './runtime';`);
    this.writeLine();

    if (this.useType) {
      this.writeLine(
        `export interface ${this.getInterfaceName('customData')} {`,
      );
      this.indent(1);
      this.writeLine(
        `[key: number | string]: ${this.getInterfaceName('cubeItemData')},`,
      );
      this.indent(-1);
      this.writeLine('};');
      this.writeLine();
    }

    const typeString = this.useType ? ': string' : '';
    const typeStrArray = this.useType ? `${typeString}[]` : '';

    this.writeLine('// 正则 数据中的默认颜色 替换');
    this.writeLine(
      `const reColors${typeStrArray} = ['#333', '#2f88ff', '#fff', '#43ccf8'];`,
    );
    this.writeLine();
    this.writeLine('// 获取 SVG 内容');
    this.writeLine(
      `export const cubeGetContent = (props${
        this.useType ? `: ${iPropsName}` : ''
      })${typeString} => {`,
    );
    this.indent(1);
    this.writeLine('if (!props.id) {');
    this.indent(1);
    this.writeLine(`return '';`);
    this.indent(-1);
    this.writeLine('};');
    this.writeLine(
      `const svgItem${
        this.useType ? `: ${iCubeItemDataName} | null` : ''
      } = getSvgItem(String(props.id));`,
    );
    this.writeLine();
    this.writeLine('if (!svgItem) {');
    this.indent(1);
    this.writeLine(`return '';`);
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine('const {');
    this.indent(1);
    this.writeLine('size,');
    this.writeLine('colors,');
    this.writeLine('strokeLinejoin,');
    this.writeLine('strokeLinecap,');
    this.writeLine('strokeWidth,');
    this.indent(-1);
    this.writeLine('} = props;');
    this.writeLine();
    this.writeLine(
      `const canSet = getSvgProp(svgItem, 'canSet', 'Boolean', false, true);`,
    );
    this.writeLine(
      `const viewBox = getSvgProp(svgItem, 'viewBox', 'String', canSet, '0 0 48 48');`,
    );
    this.writeLine(
      `let originSvg = getSvgProp(svgItem, 'content', 'String', canSet, '');`,
    );
    this.writeLine();
    this.writeLine(
      `originSvg = originSvg.replace(/viewBox=\"\d{0,} \d{0,} \d{0,} \d{0,}\"/, \`viewBox="\${viewBox}"\`);`,
    );
    this.writeLine(
      `originSvg = originSvg.replace(/width="\d{0,}"/, \`width="\${size}"\`);`,
    );
    this.writeLine(
      `originSvg = originSvg.replace(/height="\d{0,}"/, \`height="\${size}"\`);`,
    );
    this.writeLine();
    this.writeLine(`let contentHtml = svgItem ? originSvg : '';`);
    this.writeLine();
    this.writeLine(
      `colors.forEach((colorItem${typeString}, colorIdx${
        this.useType ? ': number' : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine(
      `contentHtml = contentHtml.replace(new RegExp(\`\${reColors[colorIdx]}|\${reColors[colorIdx].toUpperCase()}\`, 'g'), colorItem);`,
    );
    this.indent(-1);
    this.writeLine('});');
    this.writeLine();
    this.writeLine(
      `contentHtml = contentHtml.replace(/stroke-linejoin="round"/g, \`stroke-linejoin="\${strokeLinejoin}"\`);`,
    );
    this.writeLine(
      `contentHtml = contentHtml.replace(/stroke-linecap="round"/g, \`stroke-linecap="\${strokeLinecap}"\`);`,
    );
    this.writeLine(
      `contentHtml = contentHtml.replace(/stroke-width="4"/g, \`stroke-width="\${strokeWidth}"\`);`,
    );
    this.writeLine();
    this.writeLine('return contentHtml;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine(`const name = 'cube';`);
    this.writeLine('// 声明 cube 组件');
    this.writeLine('export const CubeVueOptions = defineCustomElement({');
    this.indent(1);
    this.writeLine(
      `...${wrapperName}(name, false, (props${
        this.useType ? `: ${iPropsName}` : ''
      })${this.useType ? ': string' : ''} => {`,
    );
    this.indent(1);
    this.writeLine('return cubeGetContent(props);');
    this.indent(-1);
    this.writeLine('}),');
    this.writeLine('styles: [ cubeStyle ],');
    this.indent(-1);
    this.writeLine('});');
    this.writeLine();

    this.writeLine(
      `if (customElements && typeof customElements.define === 'function' && !customElements.get(\`icon-\${name}\`)) {`,
    );
    this.indent(1);
    this.writeLine(`customElements.define(\`icon-\${name}\`, CubeVueOptions);`);
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }
}
