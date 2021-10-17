/** @format */

import { Generator, IGeneratorOptions } from './base';
import {
  IIconColorInfo,
  StrokeLinejoin,
  StrokeLinecap,
  IIconThemeInfo,
  IThemeColor,
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

  constructor(options: IRuntimeGeneratorOptions) {
    super(options);

    this.$opts = options;
    this.prefix = options.prefix || '';
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

    this.processUtil(); // 生成转换函数代码

    this.processConverter(); // 平台业务代码

    runOptions.processPlatformCode(); // 生成Wrapper代码

    this.processContext(); // 生成上下文

    this.processProvider(); // 图标配置Provider

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
      this.writeLine(
        'export type Theme = '.concat(
          theme
            .map((item: IIconThemeInfo) =>
              (item.name.includes('-')
                ? `'${camelCase(item.name)}' | '${pascalCase(item.name)}' | '`
                : "'"
              ).concat(item.name, "'"),
            )
            .join(' | '),
          ';',
        ),
      );
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
      'export interface '.concat(this.getInterfaceName('props', true), ' {'),
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

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processConfigType() {
    this.writeLine('// 图标配置属性');
    this.writeLine(
      'export interface '.concat(this.getInterfaceName('config'), ' {'),
    );
    this.indent(1);
    this.processSvgCommonType();
    this.writeLine();
    this.writeLine('// CSS前缀');
    this.writeLine('prefix: string;');

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

          this.writeLine(''.concat(camelCase(item.name), ': {'));

          this.indent(1);

          item.fill.forEach((fItem: IThemeColor) => {
            if (!fItem.name) {
              return;
            }

            this.writeLine(
              ''
                .concat(camelCase(fItem.name), ': ')
                .concat(fItem.type === 'hue' ? 'HSL' : 'string', ';'),
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
        this.writeLine('colors: '.concat(list.join(' | '), '[];'));
      } else {
        this.writeLine('colors: Array<'.concat(list.join(' | '), '>;'));
      }
    }

    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processPropsType() {
    this.writeLine('// 图标基础属性');
    this.writeLine(
      'export interface '.concat(this.getInterfaceName('base'), ' {'),
    );
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
      this.writeLine('fill?: '.concat(list.join(' | '), ';'));
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

    if (fixedSize) {
      this.writeLine();
      this.writeLine('// 图标尺寸大小，默认1em');
      this.writeLine('size'.concat(optional ? '?' : '', ': number | string;'));
    } else {
      this.writeLine();
      this.writeLine('// 图标尺寸大小不固定，长宽默认为1em');
      this.writeLine('width'.concat(optional ? '?' : '', ': number | string;'));
      this.writeLine(
        'height'.concat(optional ? '?' : '', ': number | string;'),
      );
    }

    if (stroke) {
      this.writeLine();
      this.writeLine('// 描边宽度');
      this.writeLine('strokeWidth'.concat(optional ? '?' : '', ': number;'));
    }

    if (strokeLinecap) {
      this.writeLine();
      this.writeLine('// 描边端点类型');
      this.writeLine(
        'strokeLinecap'.concat(optional ? '?' : '', ': StrokeLinecap;'),
      );
    }

    if (strokeLinejoin) {
      this.writeLine();
      this.writeLine('// 描边连接线类型');
      this.writeLine(
        'strokeLinejoin'.concat(optional ? '?' : '', ': StrokeLinejoin;'),
      );
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
      `${
        'export const DEFAULT_'.concat(this.prefix.toUpperCase(), '_CONFIGS') +
        (useType ? ': '.concat(this.getInterfaceName('config')) : '')
      } = {`,
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

    if (stroke) {
      this.writeLine('strokeWidth: '.concat(String(stroke), ','));
    }

    if (strokeLinecap) {
      this.writeLine("strokeLinecap: '".concat(strokeLinecap, "',"));
    }

    if (strokeLinejoin) {
      this.writeLine("strokeLinejoin: '".concat(strokeLinejoin, "',"));
    }

    if (this.wrapperNeedRTL) {
      this.writeLine('rtl: false,');
    }

    if (theme.length) {
      this.writeLine("theme: '".concat(theme[0].name, "',"));

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
            this.writeLine(''.concat(camelCase(item.name), ': {'));

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
                  this.writeLine(''.concat(camelCase(name), ': {'));

                  this.indent(1);

                  this.writeLine('h: '.concat(String(f.hue), ','));

                  this.writeLine('s: '.concat(String(f.saturation), ','));

                  this.writeLine('l: '.concat(String(f.light)));

                  this.indent(-1);

                  this.writeLine(`}${i !== arr.length - 1 ? ',' : ''}`);
                } else {
                  this.writeLine(
                    ''.concat(camelCase(name), ": '").concat(f.color, "'") +
                      (i !== arr.length - 1 ? ',' : ''),
                  );
                }
              });

            this.indent(-1);

            this.writeLine('}'.concat(i !== arr.length - 1 ? ',' : ''));
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

            this.writeLine('h: '.concat(String(f.hue), ','));

            this.writeLine('s: '.concat(String(f.saturation), ','));

            this.writeLine('l: '.concat(String(f.light)));

            this.indent(-1);

            this.writeLine(`}${i !== arr.length - 1 ? ',' : ''}`);
          } else {
            this.writeLine(
              "'".concat(f.color, "'") + (i !== arr.length - 1 ? ',' : ''),
            );
          }
        },
      );
      this.indent(-1);
      this.writeLine('],');
    }

    this.writeLine("prefix: '".concat(cssPrefix, "'"));
    this.indent(-1);
    this.writeLine('};');
    this.writeLine();
  }

  processUtil() {
    this.writeLine(
      'function guid()'.concat(this.useType ? ': string' : '', ' {'),
    );
    this.indent(1);
    this.writeLine(
      "return '".concat(
        this.prefix,
        "-' + (((1 + Math.random()) * 0x100000000) | 0).toString(16).substring(1);",
      ),
    );
    this.indent(-1);
    this.writeLine('}');
    this.writeLine();
  }

  processConverter() {
    this.writeLine('// 属性转换函数');

    if (this.useType) {
      this.writeLine(
        'export function '.concat(pascalCase(this.prefix), 'Converter') +
          '(id: string, icon: '
            .concat(this.getInterfaceName('base'), ', config: ')
            .concat(this.getInterfaceName('config'), ')') +
          ': '.concat(this.getInterfaceName('props', true), ' {'),
      );
    } else {
      this.writeLine(
        'export function '.concat(
          pascalCase(this.prefix),
          'Converter (id, icon, config) {',
        ),
      );
    }

    this.indent(1);
    this.writeLine();

    if (this.colors.length) {
      this.writeLine(
        "const fill = typeof icon.fill === 'string' ? [icon.fill] : icon.fill || [];",
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
        this.writeLine('const theme: Theme = icon.theme || config.theme;');
      } else {
        this.writeLine('const theme = icon.theme || config.theme;');
      }

      this.writeLine();
      this.writeLine('switch (theme) {');
      this.indent(1);
      this.theme.forEach((theme: IIconThemeInfo) => {
        this.writeLine("case '".concat(theme.name, "':"));

        if (theme.name.includes('-')) {
          this.writeLine("case '".concat(camelCase(theme.name), "':"));
          this.writeLine("case '".concat(pascalCase(theme.name), "':"));
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
              this.write("'".concat(fill.color, "'"));
            } else {
              this.write(
                'typeof fill['
                  .concat(String(order), "] === 'string' ? fill[")
                  .concat(String(order), '] : '),
              );

              if (fill.currentColor) {
                this.write("'currentColor'");
              } else {
                this.write(
                  'config.colors.'
                    .concat(camelCase(theme.name), '.')
                    .concat(camelCase(fill.name)),
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
                '{h: '
                  .concat(String(fill.hue), ', s: ')
                  .concat(String(fill.saturation), ', l: ')
                  .concat(String(fill.light)),
              );
            } else {
              this.write(
                'typeof fill['
                  .concat(String(order), "] === 'object' ? fill[")
                  .concat(String(order), '] : '),
              );

              this.write(
                'config.colors.'
                  .concat(camelCase(theme.name), '.')
                  .concat(camelCase(fill.name)),
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

          this.writeLine(
            'if (typeof fill['.concat(String(order), "] === 'string') {"),
          );

          this.indent(1);

          this.writeLine('colors.push(fill['.concat(String(order), ']);'));

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(
            'if (typeof config.colors['.concat(
              String(order),
              "] !== 'string') {",
            ),
          );

          this.indent(1);

          this.writeLine(
            "throw new Error('config.colors[".concat(
              String(order),
              "] expect string to be HSL');",
            ),
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(
            'colors.push(config.colors['.concat(String(order), ']);'),
          );

          this.indent(-1);

          this.writeLine('}');
        } else {
          this.writeLine();

          // eslint-disable-next-line no-template-curly-in-string
          this.writeLine("if (typeof fill[`${order}`] === 'string') {");

          this.indent(1);

          this.writeLine('hsl.push(fill['.concat(String(order), ']);'));

          this.indent(-1);

          this.writeLine();

          this.writeLine('} else {');

          this.indent(1);

          this.writeLine();

          this.writeLine(
            'if (typeof config.colors['.concat(
              String(order),
              "] !== 'object') {",
            ),
          );

          this.indent(1);

          this.writeLine(
            "throw new Error('config.colors[".concat(
              String(order),
              "] expect HSL to be string');",
            ),
          );

          this.indent(-1);

          this.writeLine('}');

          this.writeLine();

          this.writeLine(
            'hsl.push(config.colors['.concat(String(order), ']);'),
          );

          this.indent(-1);

          this.writeLine('}');
        }
      });
    }

    this.writeLine();
    this.writeLine('return {');
    this.indent(1);

    if (this.fixedSize) {
      this.writeLine('size: icon.size || config.size,');
    } else {
      this.writeLine();
      this.writeLine('// 图标尺寸大小不固定，长宽默认为1em');
      this.writeLine('width: icon.width || config.width,');
      this.writeLine('height: icon.height || config.height,');
    }

    if (this.stroke) {
      this.writeLine('strokeWidth: icon.strokeWidth || config.strokeWidth,');
    }

    if (this.strokeLinecap) {
      this.writeLine(
        'strokeLinecap: icon.strokeLinecap || config.strokeLinecap,',
      );
    }

    if (this.strokeLinejoin) {
      this.writeLine(
        'strokeLinejoin: icon.strokeLinejoin || config.strokeLinejoin,',
      );
    }

    if (this.replaceList.length) {
      this.writeLine('colors: icon.colors || colors,');
    }

    if (this.hueList.length) {
      this.writeLine('format: (idx, s , l) => {');
      this.writeLine('},');
    }

    this.writeLine('id');
    this.indent(-1);
    this.writeLine('};');
    this.indent(-1);
    this.writeLine(
      '} // 属性转换函数 '.concat(pascalCase(this.prefix), 'Converter end'),
    );
    this.writeLine();
  }

  processContext() {
    this.writeLine(
      'const '.concat(
        this.getTypeName('context'),
        ` = Symbol(${this.getClassName('context')}`,
        ');',
      ),
    );
    this.writeLine();
  }

  processProvider() {
    this.writeLine('// 图标配置Provider');
    this.write('export const '.concat(this.getTypeName('provider'), ' = ('));

    if (this.useType) {
      this.write('config: '.concat(this.getInterfaceName('Config')));
    } else {
      this.write('config, ');
    }

    if (this.useType) {
      this.writeLine(`): void => {`);
    } else {
      this.writeLine(') {');
    }

    this.indent(1);

    this.writeLine(
      'provide('.concat(this.getTypeName('context'), ', config);'),
    );

    this.indent(-1);

    this.writeLine('}');

    this.writeLine();
  }

  processWrapper(runOptions: IRunOptions) {
    this.writeLine('// 图标Wrapper');
    this.write('export function '.concat(this.getTypeName('wrapper'), '('));

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
      this.write('render: '.concat(this.getTypeName('Render')));
    } else {
      this.write('render');
    }

    if (this.style) {
      this.write(', ');

      if (this.useType) {
        this.write('cssRender?: '.concat(this.getInterfaceName('props', true)));
      } else {
        this.write('cssRender');
      }
    }

    if (this.useType) {
      this.writeLine(`): ${this.getTypeName('')} {`);
    } else {
      this.writeLine(') {');
    }

    this.indent(1); // 生成平台Wrapper代码

    runOptions.processPlatformWrapper();

    this.indent(-1);
    this.writeLine('}');
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
    return "'"
      .concat(cssPrefix, '-')
      .concat(prefix)
      .concat(key ? `-${key}` : '', "'");
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
      list.push('Array<'.concat(list.join(' | '), '>'));
    }

    return list;
  }
}
