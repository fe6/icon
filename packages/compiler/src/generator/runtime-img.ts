/** @format */

import { RuntimeGenerator, IRuntimeGeneratorOptions } from './runtime-base';

/**
 * @file ImgRuntimeGenerator 生成运行时代码
 */

export class ImgRuntimeGenerator extends RuntimeGenerator {
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

  private processPlatformImports() {}

  private processPlatformTypes() {
    this.writeLine('// 包裹后的图标属性');
    this.writeLine(
      `export interface ${this.getInterfaceName(
        'props',
      )} extends ${this.getInterfaceName('base')} {`,
    );
    this.indent(1);
    this.writeLine('spin?: boolean;');
    this.writeLine('// ture 则返回不带 img 标签的图片 base64');
    this.writeLine('base64?: boolean;');
    this.writeLine('// id 字段的随机数');
    this.writeLine('id?: string;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
    this.writeLine('// 包裹后的图标属性');
    this.writeLine(
      `export type ${this.getTypeName('options')} = ${this.getInterfaceName(
        'props',
      )};`,
    );
    this.writeLine();
    this.writeLine('// 包裹前的图标渲染器');
    this.writeLine(
      `export type ${this.getTypeName(
        'Render',
      )} = (props: ${this.getInterfaceName('props')}) => string;`,
    );
    this.writeLine();
    this.writeLine('// 包裹后的图标');
    this.writeLine(
      `export type ${this.getTypeName(
        'Return',
      )} = (props: ${this.getInterfaceName('props')}) => string;`,
    );
    this.writeLine();
  }

  processBase64() {
    const typeNumber = this.useType ? ': number' : '';
    const typeString = this.useType ? ': string' : '';
    // this.writeLine('// Base64 编码函数');
    this.writeLine('// 一般的 Base64 编码字符');
    this.writeLine(
      "const commonbase64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';",
    );

    this.writeLine('// 对 URL 进行编码使用的字符');
    this.writeLine(
      "const urlBase64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';",
    );

    this.writeLine();
    this.writeLine('// 通用的 Base64 编码函数');

    this.writeLine(
      `export const base64encode = (str${typeString}, isUrl${
        this.useType ? '?: boolean' : ''
      })${typeString} => {`,
    );
    this.indent(1);
    this.writeLine(`let out = '';`);
    this.writeLine('let idx = 0;');
    this.writeLine(`const len${typeNumber} = str.length;`);
    this.writeLine(
      `let code1${typeNumber}, code2${typeNumber}, code3${typeNumber};`,
    );
    this.writeLine();
    this.writeLine('// 针对不同的编码方式，选择不同的字符集');
    this.writeLine('const base64EncodeChars = isUrl');
    this.indent(1);
    this.writeLine('? urlBase64EncodeChars');
    this.writeLine(': commonbase64EncodeChars;');
    this.writeLine();

    this.indent(-1);
    this.writeLine('while (idx < len) {');
    this.indent(1);
    this.writeLine('code1 = str.charCodeAt(idx++) & 0xff;');
    this.writeLine();

    this.writeLine('// 当最后只有一个字节时');
    this.writeLine('if (idx === len) {');
    this.indent(1);
    this.writeLine('out += base64EncodeChars.charAt(code1 >> 2);');
    this.writeLine('out += base64EncodeChars.charAt((code1 & 0x3) << 4);');
    this.writeLine(`out += '==';`);
    this.writeLine('break;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('code2 = str.charCodeAt(idx++);');
    this.writeLine();

    this.writeLine('// 当最后剩余两个字节时');
    this.writeLine('if (idx === len) {');
    this.indent(1);
    this.writeLine('out += base64EncodeChars.charAt(code1 >> 2);');
    this.writeLine('out += base64EncodeChars.charAt(');
    this.indent(1);
    this.writeLine('((code1 & 0x3) << 4) | ((code2 & 0xf0) >> 4),');
    this.indent(-1);
    this.writeLine(');');
    this.writeLine('out += base64EncodeChars.charAt((code2 & 0xf) << 2);');
    this.writeLine(`out += '=';`);
    this.writeLine('break;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('// 当剩余字节数大于等于3时');
    this.writeLine('code3 = str.charCodeAt(idx++);');
    this.writeLine('out += base64EncodeChars.charAt(code1 >> 2);');
    this.writeLine('out += base64EncodeChars.charAt(');
    this.indent(1);
    this.writeLine('((code1 & 0x3) << 4) | ((code2 & 0xf0) >> 4),');
    this.indent(-1);
    this.writeLine(');');
    this.writeLine('out += base64EncodeChars.charAt(');
    this.indent(1);
    this.writeLine('((code2 & 0xf) << 2) | ((code3 & 0xc0) >> 6),');
    this.indent(-1);
    this.writeLine(');');
    this.writeLine('out += base64EncodeChars.charAt(code3 & 0x3f);');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine('return out;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine('// 把 unicode 码转换成 utf8 编码');
    this.writeLine(
      `export const unicodeToUtf8 = (str${typeString})${typeString} => {`,
    );
    this.indent(1);
    this.writeLine(`let out${typeString} = '';`);
    this.writeLine(`let idx${typeNumber};`);
    this.writeLine(`let code${typeNumber};`);
    this.writeLine(`const len${typeNumber} = str.length;`);
    this.writeLine();

    this.writeLine('for (idx = 0; idx < len; idx++) {');
    this.indent(1);
    this.writeLine('code = str.charCodeAt(idx);');
    this.writeLine();
    this.writeLine('// 兼容 ASCII');
    this.writeLine('if (code >= 0x0001 && code <= 0x007f) {');
    this.indent(1);
    this.writeLine('out += str.charAt(idx);');
    this.indent(-1);
    this.writeLine('} else if (code > 0x07ff) {');
    this.indent(1);
    this.writeLine('// 占三个字节的 utf8');
    this.writeLine('out += String.fromCharCode(0xe0 | ((code >> 12) & 0x0f));');
    this.writeLine('out += String.fromCharCode(0x80 | ((code >> 6) & 0x3f));');
    this.writeLine('out += String.fromCharCode(0x80 | ((code >> 0) & 0x3f));');
    this.indent(-1);
    this.writeLine('} else {');
    this.indent(1);
    this.writeLine('// 占两个字节的 utf8');
    this.writeLine('out += String.fromCharCode(0xc0 | ((code >> 6) & 0x1f));');
    this.writeLine('out += String.fromCharCode(0x80 | ((code >> 0) & 0x3f));');
    this.indent(-1);
    this.writeLine('}');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return out;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  processConfig() {
    this.writeLine('// 图标配置');
    this.writeLine('let currentConfig = DEFAULT_ICON_CONFIGS;');
    this.writeLine();

    const configType = `: ${this.getInterfaceName('config')}`;
    this.writeLine(
      `export const setConfig = (config${this.useType ? configType : ''})${
        this.useType ? ': void' : ''
      } => {`,
    );
    this.indent(1);
    this.writeLine('currentConfig = Object.assign(currentConfig, config);');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine(
      `export const getConfig = ()${this.useType ? configType : ''} => {`,
    );
    this.indent(1);
    this.writeLine('return currentConfig;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  private processPlatformCode() {
    this.processBase64(); // base64编码函数
    this.processConfig(); // 全局配置相关
  }

  private processPlatformWrapper() {
    // const prefix = this.prefix;
    const wrapperNeedName = this.wrapperNeedName;
    const wrapperNeedRTL = this.wrapperNeedRTL;

    this.writeLine(`return (props: ${this.getInterfaceName('props')}) => {`);

    this.indent(1);

    this.writeLine('const config = getConfig();');
    this.writeLine();

    this.writeLine(
      `const cls${this.useType ? ': string[]' : ''} = [\`\${config.prefix\}-${
        this.prefix
      }\`];`,
    );

    if (wrapperNeedName) {
      this.writeLine();
      this.writeLine(
        `cls.push(\`\${config.prefix}-${this.prefix}-\${name}\`);`,
      );
    }

    if (wrapperNeedRTL) {
      this.writeLine();
      this.writeLine(`if (rtl && config.rtl) {`);
      this.indent(1);
      this.writeLine(`cls.push(\`\${config.prefix}-${this.prefix}-rtl\`);`);
      this.indent(-1);
      this.writeLine('}');
    }

    this.writeLine();
    this.writeLine(
      `if (${this.useType ? '' : 'props && '}props${
        this.useType ? '?' : ''
      }.spin) {`,
    );
    this.indent(1);
    this.writeLine(`cls.push(\`\${config.prefix}-${this.prefix}-spin\`);`);
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();

    this.writeLine('const svgProps = IconConverter(guid(), props, config);');
    this.writeLine('const svgHtml = render(svgProps);');
    this.writeLine('const src = base64encode(unicodeToUtf8(svgHtml));');
    this.writeLine(`const svgBase64 = \`data:image/svg+xml;base64,\${src}\`;`);
    this.writeLine();

    this.writeLine(
      `return (${this.useType ? '' : 'props && '}props${
        this.useType ? '?' : ''
      }.base64 ? svgBase64 : `,
    );
    this.indent(1);
    this.writeLine(`\`<span class=\"\${cls.join(' ')}\">`);
    this.indent(1);
    this.writeLine(
      `<img class="\${config.prefix}-${this.prefix}-img" src="\${svgBase64}" />`,
    );
    this.indent(-1);
    this.writeLine('</span>`');
    this.indent(-1);
    this.writeLine(');');
    this.indent(-1);
    this.writeLine('};');
  }
}
