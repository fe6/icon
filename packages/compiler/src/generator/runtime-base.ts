/** @format */

import { Generator, IGeneratorOptions } from './base';
import {
  IIconColorInfo,
  StrokeLinejoin,
  StrokeLinecap,
  IIconThemeInfo,
  IThemeColor,
  TGenType,
} from '../types';
import { camelCase, pascalCase } from '../util';

/**
 * @file RuntimeGenerator 生成运行时代码
 */

export interface IRuntimeOptions {
  useType?: boolean;
  colors?: IIconColorInfo[];
  prefix?: string;
  cssPrefix?: string;
  stroke?: number;
  strokeLinecap?: StrokeLinecap;
  strokeLinejoin?: StrokeLinejoin;
  theme?: IIconThemeInfo[];
  fixedSize?: boolean;
  style?: boolean;
}

export interface IRunOptions {
  processPlatformImports: () => void;
  processPlatformTypes: () => void;
  processPlatformCode: () => void;
  processPlatformWrapper: () => void;
}

export interface IRuntimeGeneratorOptions
  extends IGeneratorOptions,
    IRuntimeOptions {
  wrapperNeedName?: boolean;
  wrapperNeedRTL?: boolean;
}

export class RuntimeGenerator extends Generator {
  prefix: string;
  hueList: IIconColorInfo[];
  replaceList: IIconColorInfo[];
  useType = false;
  cssPrefix = '';
  stroke = 0;
  theme: IIconThemeInfo[];
  fixedSize = false;
  style = false;
  colors: IIconColorInfo[];
  strokeLinecap: string;
  strokeLinejoin: string;
  wrapperNeedName = false;
  wrapperNeedRTL = false;
  hasDefaultTheme = false;
  type: TGenType = '';

  constructor(options: IRuntimeGeneratorOptions) {
    super(options);

    this.$opts = options;
    this.type = options.type;
    this.prefix = options.prefix || 'icon';
    this.hueList = [];
    this.replaceList = [];
    this.useType = options.useType || false;
    this.stroke = options.stroke || 0;
    this.cssPrefix = options.cssPrefix || 'sit';
    this.theme = options.theme || [];
    this.fixedSize = options.fixedSize || false;
    this.style = options.style || false;
    this.colors = options.colors || [];
    this.strokeLinecap = options.strokeLinecap || 'butt';
    this.strokeLinejoin = options.strokeLinejoin || 'miter';
    this.wrapperNeedName = options.wrapperNeedName || false;
    this.wrapperNeedRTL = options.wrapperNeedRTL || false;

    this.colors.forEach((item: IIconColorInfo) => {
      if (item.type === 'hue') {
        this.hueList.push(item);
      } else {
        this.replaceList.push(item);
      }
    });

    this.hasDefaultTheme = this.theme.some((item: IIconThemeInfo) =>
      item.fill.some((item: IThemeColor) => item.name),
    );

    return this;
  }

  innerProcess(runOptions: IRunOptions) {
    // 写头部的注释
    this.processHeaderComment(); // 添加外部引用

    runOptions.processPlatformImports();

    if (this.useType) {
      // 定义常量类型
      this.processConstTypes(); // 生成内部函数属性类型参数

      this.processSvgType(); // 生成配置信息类型

      this.processConfigType(); // 生成属性类型

      this.processPropsType(); // 生成平台外部类型

      runOptions.processPlatformTypes();
    } // 生成默认配置信息

    this.processConfigData(); // 生成工具函数

    if (this.type === 'cube-vue') {
      this.processCubeUtils();
      this.getTSvgAttr();
      this.processGetSvgProp();
      this.processGetColor();
    } else {
      this.processUtil(); // 生成转换函数代码
    }

    if (this.type === 'cube-vue') {
      this.processCubeVueConverter(); // 转换函数
    } else {
      this.processConverter(); // 转换函数
    }

    runOptions.processPlatformCode(); // 平台业务代码

    if (this.type === 'vue' || this.type === 'cube-vue') {
      this.processContext(); // 生成上下文

      this.processProvider(); // 图标配置Provider
    }

    this.processWrapper(runOptions);

    return this.getResult();
  }

  processConstTypes() {
    const theme = this.theme;
    const hueList = this.hueList;
    const strokeLinejoin = this.strokeLinejoin;
    const strokeLinecap = this.strokeLinecap; // 描边连接类型

    if (strokeLinejoin) {
      this.writeLine('// 描边连接类型');
      this.writeLine(
        "export type StrokeLinejoin = 'miter' | 'round' | 'bevel';",
      );
      this.writeLine();
    } // 描边端点类型

    if (strokeLinecap) {
      this.writeLine('// 描边端点类型');
      this.writeLine(
        "export type StrokeLinecap = 'butt' | 'round' | 'square';",
      );
      this.writeLine();
    } // 主题

    if (theme.length) {
      this.writeLine('// 主题');
      const themeString = theme
        .map((item: IIconThemeInfo) => {
          return `${
            item.name.includes('-')
              ? `'${camelCase(item.name)}' | '${pascalCase(item.name)}' | '`
              : "'"
          }${item.name}'`;
        })
        .join(' | ');
      this.writeLine(`export type Theme = ${themeString};`);
      this.writeLine();
    } // 渐变色处理

    if (hueList.length) {
      this.writeLine('// 渐变色格式化器');
      this.writeLine(
        'export type HueReplaceFormatter = (idx: number, s: number, l: number) => string',
      );
      this.writeLine();
      this.writeLine('// Hue类型');
      this.writeLine('export interface HSL {');
      this.indent(1);
      this.writeLine('h: number;');
      this.writeLine('s: number;');
      this.writeLine('l: number;');
      this.indent(-1);
      this.writeLine('}');
      this.writeLine();
    }
  }

  processSvgType() {
    const replaceList = this.replaceList;
    const hueList = this.hueList;
    this.writeLine('// 包裹前的图标属性');
    this.writeLine(
      `export interface ${this.getInterfaceName('props', true)} {`,
    );
    this.indent(1);
    this.writeLine();
    this.writeLine('// 当前图标的唯一Id');
    this.writeLine('id: string;');
    this.processSvgCommonType();

    if (replaceList.length) {
      this.writeLine();
      this.writeLine('// 换肤的颜色数组');
      this.writeLine('colors: string[];');
    }

    if (hueList.length) {
      this.writeLine();
      this.writeLine('// 渐变换肤的替换函数');
      this.writeLine('format: HueReplaceFormatter;');
    }

    this.writeLine();
    this.writeLine('// 是否旋转');
    this.writeLine('spin?: boolean;');

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processConfigType() {
    this.writeLine('// 图标配置属性');
    this.writeLine(`export interface ${this.getInterfaceName('config')} {`);
    this.indent(1);
    this.processSvgCommonType();
    this.writeLine();
    this.writeLine('// CSS前缀');
    this.writeLine('prefix: string;');

    this.writeLine();
    this.writeLine('// 旋转');
    this.writeLine('spin: boolean;');

    if (this.wrapperNeedRTL) {
      this.writeLine();
      this.writeLine('// RTL是否开启');
      this.writeLine('rtl: boolean;');
    }

    if (this.theme.length) {
      this.writeLine();
      this.writeLine('// 默认主题');
      this.writeLine('theme: Theme;');

      if (this.hasDefaultTheme) {
        this.writeLine();
        this.writeLine('// 主题默认颜色');
        this.writeLine('colors: {');
        this.indent(1);
        this.theme.forEach((item: IIconThemeInfo) => {
          if (
            !item.fill.some((item: IThemeColor) => {
              return item.name;
            })
          ) {
            return;
          }

          this.writeLine();

          this.writeLine(`${camelCase(item.name)}: {`);

          this.indent(1);

          item.fill.forEach((fItem: IThemeColor) => {
            if (!fItem.name) {
              return;
            }

            this.writeLine(
              `${camelCase(fItem.name)}: ${
                fItem.type === 'hue' ? 'HSL' : 'string'
              };`,
            );
          });

          this.indent(-1);

          this.writeLine('};');
        });
        this.indent(-1);
        this.writeLine('};');
      }
    } else if (this.colors.length) {
      const list: string[] = [];

      if (this.hueList.length) {
        list.push('HSL');
      }

      if (this.replaceList.length) {
        list.push('string');
      }

      this.writeLine();
      this.writeLine('// 默认颜色');

      if (list.length === 1) {
        this.writeLine(`colors: ${list.join(' | ')}[];`);
      } else {
        this.writeLine(`colors: Array<${list.join(' | ')}>;`);
      }
    }

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processPropsType() {
    this.writeLine('// 图标基础属性');
    this.writeLine(`export interface ${this.getInterfaceName('base')} {`);
    this.indent(1);
    this.processSvgCommonType(true);

    if (this.theme.length) {
      this.writeLine();
      this.writeLine('// 默认主题');
      this.writeLine('theme?: Theme;');
    } // 添加类型

    const list = this.getColorTypes();

    if (list.length > 0) {
      this.writeLine();
      this.writeLine('// 填充色');
      this.writeLine(`fill?: ${list.join(' | ')};`);
    }

    this.writeLine();
    this.writeLine('// 换肤的颜色数组');
    this.writeLine('colors: string[];');

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processSvgCommonType(optional?: boolean) {
    const fixedSize = this.fixedSize;
    const stroke = this.stroke;
    const strokeLinecap = this.strokeLinecap;
    const strokeLinejoin = this.strokeLinejoin;
    const isOptional = optional ? '?' : '';

    if (fixedSize) {
      this.writeLine();
      this.writeLine('// 图标尺寸大小，默认1em');
      this.writeLine(`size${isOptional}: number | string;`);
    } else {
      this.writeLine();
      this.writeLine('// 图标尺寸大小不固定，长宽默认为1em');
      this.writeLine(`width${isOptional}: number | string;`);
      this.writeLine(`height${isOptional}: number | string;`);
    }

    if (stroke) {
      this.writeLine();
      this.writeLine('// 描边宽度');
      this.writeLine(`strokeWidth${isOptional}: number;`);
    }

    if (strokeLinecap) {
      this.writeLine();
      this.writeLine('// 描边端点类型');
      this.writeLine(`strokeLinecap${isOptional}: StrokeLinecap;`);
    }

    if (strokeLinejoin) {
      this.writeLine();
      this.writeLine('// 描边连接线类型');
      this.writeLine(`strokeLinejoin${isOptional}: StrokeLinejoin;`);
    }
  }

  processConfigData() {
    const cssPrefix = this.cssPrefix;
    const fixedSize = this.fixedSize;
    const stroke = this.stroke;
    const strokeLinejoin = this.strokeLinejoin;
    const strokeLinecap = this.strokeLinecap;
    const useType = this.useType;
    const theme = this.theme;

    this.writeLine('// 默认属性');
    this.writeLine(
      `export const DEFAULT_${this.prefix.toUpperCase()}_CONFIGS${
        useType ? `: ${this.getInterfaceName('config')}` : ''
      } =  {`,
    );
    this.indent(1);

    if (fixedSize) {
      this.writeLine("size: '1em',");
    } else {
      this.writeLine();
      this.writeLine('// 图标尺寸大小不固定，长宽默认为1em');
      this.writeLine("width: '1em',");
      this.writeLine("height: '1em',");
    }

    this.writeLine('spin: false,');

    if (stroke) {
      this.writeLine(`strokeWidth: ${stroke},`);
    }

    if (strokeLinecap) {
      this.writeLine(`strokeLinecap: '${strokeLinecap}',`);
    }

    if (strokeLinejoin) {
      this.writeLine(`strokeLinejoin: '${strokeLinejoin}',`);
    }

    if (this.wrapperNeedRTL) {
      this.writeLine('rtl: false,');
    }

    if (theme.length) {
      this.writeLine(`theme: '${theme[0].name}',`);

      if (this.hasDefaultTheme) {
        this.writeLine('colors: {');
        this.indent(1);

        this.theme
          .filter((item: IIconThemeInfo) => {
            return item.fill.some((item: IThemeColor) => {
              return item.name;
            });
          })
          .forEach((item: IIconThemeInfo, i: number, arr: IIconThemeInfo[]) => {
            this.writeLine(`${camelCase(item.name)}: {`);

            this.indent(1);

            item.fill
              .filter((item: IThemeColor) => {
                return item.name;
              })
              .forEach((f: IThemeColor, i: number, arr: IThemeColor[]) => {
                const name = f.name;

                if (!name) {
                  return;
                }

                if (f.type === 'hue') {
                  this.writeLine(`${camelCase(name)}: {`);

                  this.indent(1);

                  this.writeLine(`h: ${f.hue},`);

                  this.writeLine(`s: ${f.saturation},`);

                  this.writeLine(`l: ${f.light},`);

                  this.indent(-1);

                  this.writeLine(`}${i !== arr.length - 1 ? ',' : ''}`);
                } else {
                  this.writeLine(
                    `${camelCase(name)}: '${f.color}'${
                      i !== arr.length - 1 ? ',' : ''
                    }`,
                  );
                }
              });

            this.indent(-1);

            this.writeLine(`}${i !== arr.length - 1 ? ',' : ''}`);
          });
        this.indent(-1);
        this.writeLine('},');
      }
    } else if (this.colors.length) {
      this.writeLine('colors: [');
      this.indent(1);
      this.colors.forEach(
        (f: IIconColorInfo, i: number, arr: IIconColorInfo[]) => {
          if (f.type === 'hue') {
            this.writeLine('{');

            this.indent(1);

            this.writeLine(`h: ${f.hue},`);

            this.writeLine(`s: ${f.saturation},`);

            this.writeLine(`l: ${f.light},`);

            this.indent(-1);

            this.writeLine(`}${i !== arr.length - 1 ? ',' : ''}`);
          } else {
            this.writeLine(`'${f.color}'${i !== arr.length - 1 ? ',' : ''}`);
          }
        },
      );
      this.indent(-1);
      this.writeLine('],');
    }

    this.writeLine(`prefix: '${cssPrefix}'`);
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  processUtil() {
    this.writeLine(`const guid = ()${this.useType ? ': string' : ''} => {`);
    this.indent(1);
    this.writeLine(
      `return '${this.prefix}-' + (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);`,
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processCubeVueConverter() {
    const typeMay = this.useType ? '?' : '';

    this.writeLine('// 属性转换函数');
    const casePrefix = pascalCase(this.prefix);

    if (this.useType) {
      this.writeLine(
        `export const ${casePrefix}Converter = (id: string, icon: ${this.getInterfaceName(
          'props',
        )}, config: ${this.getInterfaceName(
          'config',
        )}): ${this.getInterfaceName('props', true)} => {`,
      );
    } else {
      this.writeLine(
        `export const ${casePrefix}Converter = (id, icon, config) => {`,
      );
    }

    this.indent(1);

    if (this.colors.length) {
      this.writeLine(
        `const fill = ${
          this.useType ? '' : 'icon && ('
        }typeof icon${typeMay}.fill === 'string' ? [icon${typeMay}.fill] : icon${typeMay}.fill${
          this.useType ? '' : ')'
        } || [];`,
      );
    }

    if (this.replaceList.length) {
      if (this.useType) {
        this.writeLine('const oldColors: string[] = [];');
      } else {
        this.writeLine('const oldColors = [];');
      }
    }

    if (this.hueList.length) {
      if (this.useType) {
        this.writeLine('const hsl: HSL[] = [];');
      } else {
        this.writeLine('const hsl = [];');
      }
    }

    const typeSvg = this.useType
      ? `: ${this.getInterfaceName('cubeItemData')} | null`
      : '';
    this.writeLine(`const svgItem${typeSvg} = getSvgItem(id);`);
    this.writeLine(
      "const canSet = getSvgProp(svgItem, 'canSet', 'Boolean', false, true);",
    );

    if (this.hasDefaultTheme) {
      this.writeLine();
      this.writeLine(
        "const theme = getSvgProp(svgItem, 'theme', 'String', canSet, icon?.theme || config.theme);",
      );

      this.writeLine();
      this.writeLine('switch (theme) {');
      this.indent(1);
      this.theme.forEach((theme: IIconThemeInfo) => {
        this.writeLine(`case '${theme.name}':`);

        if (theme.name.includes('-')) {
          this.writeLine(`case '${camelCase(theme.name)}':`);
          this.writeLine(`case '${pascalCase(theme.name)}':`);
        }

        this.indent(1);

        this.colors.forEach((color, i) => {
          const order = theme.order[i];
          const fill = theme.fill[order];

          if (color.type === 'color') {
            if (fill.type !== 'color') {
              throw new Error('theme type and color type are different');
            }

            this.write('oldColors.push('); // 固定颜色

            if (fill.fixed) {
              this.write(`'${fill.color}'`);
            } else {
              this.write(
                `typeof fill[${order}] === 'string' ? fill[${order}] : `,
              );

              if (fill.currentColor) {
                this.write("'currentColor'");
              } else {
                this.write(
                  `config.colors.${camelCase(theme.name)}.${camelCase(
                    fill.name,
                  )}`,
                );
              }
            }

            this.writeLine(');');
          } else {
            if (fill.type !== 'hue') {
              throw new Error('theme type and color type are different');
            }

            this.write('hsl.push('); // 固定颜色

            if (fill.fixed) {
              this.write(
                `{h: ${fill.hue}, s: ${fill.saturation}, l: ${fill.light}`,
              );
            } else {
              this.write(
                `typeof fill[${order}] === 'object' ? fill[${order}] : `,
              );
              this.write(
                `config.colors.${camelCase(theme.name)}.${camelCase(
                  fill.name,
                )}`,
              );
            }

            this.writeLine(');');
          }
        });

        this.writeLine('break;');

        this.indent(-1);
      });
      this.indent(-1);
      this.writeLine('}');
    } else if (this.colors.length) {
      this.colors.forEach((fill: IIconColorInfo, order: number) => {
        if (fill.type === 'color') {
          this.writeLine();

          this.writeLine(`if (typeof fill[${order}] === 'string') {`);

          this.indent(1);

          this.writeLine(`oldColors.push(fill[${order}]);`);

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(`if (typeof config.colors[${order}]] !== 'string') {`);

          this.indent(1);

          this.writeLine(
            `throw new Error('config.colors[${order}] expect string to be HSL');`,
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(`oldColors.push(config.colors[${order}]);`);

          this.indent(-1);

          this.writeLine('}');
        } else {
          this.writeLine();

          this.writeLine(`if (typeof fill[\`\${order}\`] === 'string') {`);

          this.indent(1);

          this.writeLine(`hsl.push(fill[${order}]);`);

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(`if (typeof config.colors[${order}] !== 'object') {`);

          this.indent(1);

          this.writeLine(
            `throw new Error('config.colors[${order}] expect HSL to be string');`,
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(`hsl.push(config.colors[${order}]);`);

          this.indent(-1);

          this.writeLine('}');
        }
      });
    }

    const mayBeText = (diyKey: string) =>
      this.useType
        ? `icon${typeMay}.${diyKey} || `
        : `icon & icon.${diyKey} ? icon.${diyKey} : `;

    this.writeLine(
      `const size = getSvgProp(svgItem, 'size', 'String', canSet, String(${mayBeText(
        'size',
      )}config.size));`,
    );
    this.writeLine(
      `const strokeLinejoin = getSvgProp(svgItem, 'strokeLinejoin', 'String', canSet, ${mayBeText(
        'strokeLinejoin',
      )}config.strokeLinejoin);`,
    );
    this.writeLine(
      `const strokeLinecap = getSvgProp(svgItem, 'strokeLinecap', 'String', canSet, ${mayBeText(
        'strokeLinecap',
      )}config.strokeLinecap);`,
    );
    this.writeLine(
      `const strokeWidth = getSvgProp(svgItem, 'strokeWidth', 'String', canSet, ${mayBeText(
        'strokeWidth',
      )}config.strokeWidth);`,
    );
    this.writeLine(
      `const spin = getSvgProp(svgItem, 'spin', 'String', canSet, ${mayBeText(
        'spin',
      )}config.spin);`,
    );
    this.writeLine(
      `let colors = getSvgProp(svgItem, 'colors', 'Array', canSet, ${mayBeText(
        'colors',
      )}oldColors).slice();`,
    );
    this.writeLine('colors = getColors(theme, colors);');
    this.writeLine();

    this.writeLine('return {');
    this.indent(1);

    this.writeLine(`size,`);

    if (this.stroke) {
      this.writeLine(`strokeWidth,`);
    }

    if (this.strokeLinecap) {
      this.writeLine(`strokeLinecap,`);
    }

    if (this.strokeLinejoin) {
      this.writeLine(`strokeLinejoin,`);
    }

    if (this.replaceList.length) {
      this.writeLine(`colors,`);
    }

    if (this.hueList.length) {
      this.writeLine('format: (idx, s , l) => {');
      this.writeLine('},');
    }

    this.writeLine('spin,');
    this.writeLine('id,');
    this.indent(-1);
    this.writeLine('};');
    this.indent(-1);
    this.writeLine(`} // 属性转换函数 ${pascalCase(this.prefix)}Converter end`);
    this.writeLine();
  }

  processConverter() {
    const typeMay = this.useType ? '?' : '';

    this.writeLine('// 属性转换函数');
    const casePrefix = pascalCase(this.prefix);

    if (this.useType) {
      this.writeLine(
        `export const ${casePrefix}Converter = (id: string, icon: ${this.getInterfaceName(
          'base',
        )}, config: ${this.getInterfaceName(
          'config',
        )}): ${this.getInterfaceName('props', true)} => {`,
      );
    } else {
      this.writeLine(
        `export const ${casePrefix}Converter = (id, icon, config) => {`,
      );
    }

    this.indent(1);

    if (this.colors.length) {
      this.writeLine(
        `const fill = ${
          this.useType ? '' : 'icon && ('
        }typeof icon${typeMay}.fill === 'string' ? [icon${typeMay}.fill] : icon${typeMay}.fill${
          this.useType ? '' : ')'
        } || [];`,
      );
    }

    if (this.replaceList.length) {
      if (this.useType) {
        this.writeLine('const colors: string[] = [];');
      } else {
        this.writeLine('const colors = [];');
      }
    }

    if (this.hueList.length) {
      if (this.useType) {
        this.writeLine('const hsl: HSL[] = [];');
      } else {
        this.writeLine('const hsl = [];');
      }
    }

    if (this.hasDefaultTheme) {
      this.writeLine();

      if (this.useType) {
        this.writeLine('const theme: Theme = icon?.theme || config.theme;');
      } else {
        this.writeLine(
          'const theme = icon && icon.theme ? icon.theme : config.theme;',
        );
      }

      this.writeLine();
      this.writeLine('switch (theme) {');
      this.indent(1);
      this.theme.forEach((theme: IIconThemeInfo) => {
        this.writeLine(`case '${theme.name}':`);

        if (theme.name.includes('-')) {
          this.writeLine(`case '${camelCase(theme.name)}':`);
          this.writeLine(`case '${pascalCase(theme.name)}':`);
        }

        this.indent(1);

        this.colors.forEach((color, i) => {
          const order = theme.order[i];
          const fill = theme.fill[order];

          if (color.type === 'color') {
            if (fill.type !== 'color') {
              throw new Error('theme type and color type are different');
            }

            this.write('colors.push('); // 固定颜色

            if (fill.fixed) {
              this.write(`'${fill.color}'`);
            } else {
              this.write(
                `typeof fill[${order}] === 'string' ? fill[${order}] : `,
              );

              if (fill.currentColor) {
                this.write("'currentColor'");
              } else {
                this.write(
                  `config.colors.${camelCase(theme.name)}.${camelCase(
                    fill.name,
                  )}`,
                );
              }
            }

            this.writeLine(');');
          } else {
            if (fill.type !== 'hue') {
              throw new Error('theme type and color type are different');
            }

            this.write('hsl.push('); // 固定颜色

            if (fill.fixed) {
              this.write(
                `{h: ${fill.hue}, s: ${fill.saturation}, l: ${fill.light}`,
              );
            } else {
              this.write(
                `typeof fill[${order}] === 'object' ? fill[${order}] : `,
              );
              this.write(
                `config.colors.${camelCase(theme.name)}.${camelCase(
                  fill.name,
                )}`,
              );
            }

            this.writeLine(');');
          }
        });

        this.writeLine('break;');

        this.indent(-1);
      });
      this.indent(-1);
      this.writeLine('}');
    } else if (this.colors.length) {
      this.colors.forEach((fill: IIconColorInfo, order: number) => {
        if (fill.type === 'color') {
          this.writeLine();

          this.writeLine(`if (typeof fill[${order}] === 'string') {`);

          this.indent(1);

          this.writeLine(`colors.push(fill[${order}]);`);

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(`if (typeof config.colors[${order}]] !== 'string') {`);

          this.indent(1);

          this.writeLine(
            `throw new Error('config.colors[${order}] expect string to be HSL');`,
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(`colors.push(config.colors[${order}]);`);

          this.indent(-1);

          this.writeLine('}');
        } else {
          this.writeLine();

          this.writeLine(`if (typeof fill[\`\${order}\`] === 'string') {`);

          this.indent(1);

          this.writeLine(`hsl.push(fill[${order}]);`);

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(`if (typeof config.colors[${order}] !== 'object') {`);

          this.indent(1);

          this.writeLine(
            `throw new Error('config.colors[${order}] expect HSL to be string');`,
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(`hsl.push(config.colors[${order}]);`);

          this.indent(-1);

          this.writeLine('}');
        }
      });
    }

    this.writeLine();
    this.writeLine('return {');
    this.indent(1);

    const mayBeText = (diyKey: string) =>
      this.useType
        ? `icon${typeMay}.${diyKey} || `
        : `icon & icon.${diyKey} ? icon.${diyKey} : `;

    if (this.fixedSize) {
      this.writeLine(`size: ${mayBeText('size')}config.size,`);
    } else {
      this.writeLine();
      this.writeLine('// 图标尺寸大小不固定，长宽默认为1em');
      this.writeLine(`width: ${mayBeText('width')}config.width,`);
      this.writeLine(`height: ${mayBeText('height')}config.height,`);
    }

    if (this.stroke) {
      this.writeLine(
        `strokeWidth: ${mayBeText('strokeWidth')}config.strokeWidth,`,
      );
    }

    if (this.strokeLinecap) {
      this.writeLine(
        `strokeLinecap: ${mayBeText('strokeLinecap')}config.strokeLinecap,`,
      );
    }

    if (this.strokeLinejoin) {
      this.writeLine(
        `strokeLinejoin: ${mayBeText('strokeLinejoin')}config.strokeLinejoin,`,
      );
    }

    if (this.replaceList.length) {
      this.writeLine(`colors: ${mayBeText('colors')}colors,`);
    }

    if (this.hueList.length) {
      this.writeLine('format: (idx, s , l) => {');
      this.writeLine('},');
    }

    this.writeLine('id');
    this.indent(-1);
    this.writeLine('};');
    this.indent(-1);
    this.writeLine(`} // 属性转换函数 ${pascalCase(this.prefix)}Converter end`);
    this.writeLine();
  }

  processContext() {
    this.writeLine(
      `const ${this.getTypeName('context')} = Symbol(${this.getClassName(
        'context',
      )});`,
    );
    this.writeLine();
  }

  processCubeUtils() {
    this.writeLine('// 获取 SVG 配置数据');
    const typeString = this.useType ? ': string' : '';
    const typeSvg = this.useType
      ? `: ${this.getInterfaceName('cubeData')} | null`
      : '';
    const typeItemSvg = this.useType
      ? `: ${this.getInterfaceName('cubeItemData')} | null`
      : '';
    this.writeLine(
      `export const getSvgItem = (svgId${typeString})${typeItemSvg} => {`,
    );
    this.writeLine(
      `const iconCube${typeSvg} = (window${
        this.useType ? ' as any' : ''
      }).__iconCube__;`,
    );
    this.indent(1);
    this.writeLine('return svgId && iconCube ? iconCube[svgId] : null;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();

    this.writeLine('const hasOwnProperty = Object.prototype.hasOwnProperty;');
    this.writeLine(
      `const hasOwn = (val${
        this.useType ? ': Object' : ''
      }, key${typeString}) => hasOwnProperty.call(val, key);`,
    );
    this.writeLine('const objectToString = Object.prototype.toString;');
    this.writeLine(
      `const toTypeString = (value${
        this.useType ? ': any' : ''
      }) => objectToString.call(value);`,
    );
    this.writeLine();
  }

  getTSvgAttr() {
    this.writeLine();
    this.writeLine(
      `type TSvgAttr = 'canSet' | 'theme' | 'size' | 'strokeWidth' | 'strokeLinecap' | 'strokeLinejoin' | 'theme' | 'fill' | 'colors' | 'spin' | 'content' | 'viewBox';`,
    );
    this.writeLine();
  }

  processGetSvgProp() {
    this.writeLine('// 获取 SVG 设置属性数据');
    const typeSvg = this.useType
      ? `: ${this.getInterfaceName('cubeItemData')} | null`
      : '';
    const typeString = this.useType ? ': string' : '';
    this.writeLine(
      `export const getSvgProp = (svgItem${typeSvg}, attr${
        this.useType ? ': TSvgAttr' : ''
      }, type${typeString}, canSet${this.useType ? ': boolean' : ''}, defValue${
        this.useType ? ': any' : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine('if (!svgItem || !hasOwn(svgItem, attr)) {');
    this.indent(1);
    this.writeLine('return defValue;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
    this.writeLine(
      `const propConfig = toTypeString(svgItem[attr]) === \`[object \${type}]\` ? svgItem[attr] : defValue;`,
    );
    this.writeLine();
    this.writeLine("if (attr ==='content' || attr === 'canSet') {");
    this.indent(1);
    this.writeLine('return propConfig;');
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return canSet ? propConfig : defValue;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  processGetColor() {
    this.writeLine('// 获取颜色');
    this.writeLine(
      `const getColors = (theme${this.useType ? ': Theme' : ''}, oldColor${
        this.useType ? ': string[]' : ''
      }) => {`,
    );
    this.indent(1);
    this.writeLine('const newColors: string[] = [];');
    this.writeLine();
    this.writeLine('switch (theme) {');
    this.indent(1);
    this.writeLine("case 'outline':");
    this.indent(1);
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine("newColors.push('transparent');");
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine("newColors.push('transparent');");
    this.writeLine('break;');
    this.indent(-1);
    this.writeLine("case 'filled':");
    this.indent(1);
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine('newColors.push(oldColor[2]);');
    this.writeLine('newColors.push(oldColor[2]);');
    this.writeLine('break;');
    this.indent(-1);
    this.writeLine("case 'two-tone':");
    this.writeLine("case 'twoTone':");
    this.writeLine("case 'TwoTone':");
    this.indent(1);
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine('newColors.push(oldColor[1]);');
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine('newColors.push(oldColor[1]);');
    this.writeLine('break;');
    this.indent(-1);
    this.writeLine("case 'multi-color':");
    this.writeLine("case 'multiColor':");
    this.writeLine("case 'MultiColor':");
    this.indent(1);
    this.writeLine('newColors.push(oldColor[0]);');
    this.writeLine('newColors.push(oldColor[1]);');
    this.writeLine('newColors.push(oldColor[2]);');
    this.writeLine('newColors.push(oldColor[3]);');
    this.writeLine('break;');
    this.indent(-1);
    this.indent(-1);
    this.writeLine('}');
    this.writeLine('return newColors;');
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  processProvider() {
    this.writeLine('// 图标配置Provider');
    this.write(`export const ${this.getTypeName('provider')} = (`);

    if (this.useType) {
      this.write(`config: ${this.getInterfaceName('Config')}`);
      this.writeLine(`): void => {`);
    } else {
      this.write('config, ');
      this.writeLine(') => {');
    }

    this.indent(1);

    this.writeLine(`provide(${this.getTypeName('context')}, config);`);

    this.indent(-1);

    this.writeLine('}');

    this.writeLine();
  }

  processWrapper(runOptions: IRunOptions) {
    const wrapperFunc = this.getTypeName('wrapper');

    this.writeLine('// 图标Wrapper');
    this.write(`export const ${wrapperFunc} = (`);

    if (this.wrapperNeedName) {
      if (this.useType) {
        this.write('name: string, ');
      } else {
        this.write('name, ');
      }
    }

    if (this.wrapperNeedRTL) {
      if (this.useType) {
        this.write('rtl: boolean, ');
      } else {
        this.write('rtl, ');
      }
    }

    if (this.useType) {
      this.write(`render: ${this.getTypeName('Render')}`);
    } else {
      this.write('render');
    }

    if (this.style) {
      this.write(', ');
      this.write(
        `cssRender${
          this.useType ? `?: ${this.getInterfaceName('props', true)}` : ''
        }`,
      );
    }

    this.writeLine(
      `)${
        this.useType
          ? `: ${this.getTypeName(this.type === 'img' ? 'Return' : 'options')}`
          : ''
      } => {`,
    );

    this.indent(1); // 生成平台Wrapper代码

    runOptions.processPlatformWrapper();

    this.indent(-1);
    this.writeLine(`}; // end ${wrapperFunc}`);
  }

  getPropKeys() {
    const arr: string[] = [];
    const fixedSize = this.fixedSize;
    const stroke = this.stroke;
    const hueList = this.hueList;
    const replaceList = this.replaceList;
    const strokeLinecap = this.strokeLinecap;
    const strokeLinejoin = this.strokeLinejoin;

    if (fixedSize) {
      arr.push('size');
    } else {
      arr.push('width', 'height');
    }

    if (stroke) {
      arr.push('strokeWidth');
    }

    if (strokeLinecap) {
      arr.push('strokeLinecap');
    }

    if (strokeLinejoin) {
      arr.push('strokeLinejoin');
    }

    if (this.theme.length) {
      arr.push('theme');
    }

    if (hueList.length || replaceList.length) {
      arr.push('fill');
    }

    arr.push('colors');

    return arr;
  }

  getClassName(key?: string) {
    const cssPrefix = this.cssPrefix;
    const prefix = this.prefix;
    return `'${cssPrefix}-${prefix}${key ? `-${key}` : ''}'`;
  }

  getColorTypes() {
    // 添加类型
    const list: string[] = [];

    if (this.hueList.length) {
      list.push('HSL');
    }

    if (this.replaceList.length) {
      list.push('string');
    }

    if (list.length === 1) {
      list.push(`${list[0]}[]`);
    } else if (list.length > 1) {
      list.push(`Array<${list.join(' | ')}>`);
    }

    return list;
  }
}
