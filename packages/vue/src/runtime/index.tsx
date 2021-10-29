/**
 * @format
 * @file runtime 运行时
 * @author 由 fe6 自动生成
 */

import type { ComponentOptions, DefineComponent } from '@vue/runtime-dom';
import { inject, provide } from '@vue/runtime-dom';

// 描边连接类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square';

// 主题
export type TCubeTheme = 'outline' | 'filled' | 'twoTone' | 'multiColor';

// 基础的类型
export interface ICubeBaseColors {
  outStrokeColor: string;
  outFillColor: string;
}

// 多色的类型
export interface ICubeMoreColors extends ICubeBaseColors {
  innerStrokeColor: string;
  innerFillColor: string;
}

// 颜色类型
export interface IColors {
  outline: ICubeBaseColors;
  filled: ICubeBaseColors;
  twoTone: ICubeBaseColors;
  multiColor: ICubeMoreColors;
}

// 包裹前的图标属性
export interface ISvgIconProps {
  // 当前图标的唯一Id
  id?: string;

  // 图标尺寸大小，默认1em
  size?: number | string;

  // 描边宽度
  strokeWidth?: number;

  // 描边端点类型
  strokeLinecap?: StrokeLinecap;

  // 描边连接线类型
  strokeLinejoin?: StrokeLinejoin;

  // 换肤的颜色数组
  colors: string[];

  // 是否旋转
  spin?: boolean;
}

// 图标配置属性
export interface IIconConfig {
  // 图标尺寸大小，默认1em
  size: number | string;

  // 描边宽度
  strokeWidth: number;

  // 描边端点类型
  strokeLinecap: StrokeLinecap;

  // 描边连接线类型
  strokeLinejoin: StrokeLinejoin;

  // CSS前缀
  prefix: string;

  // 旋转
  spin: boolean;

  // RTL是否开启
  rtl: boolean;

  // 默认主题
  theme: TCubeTheme;

  // 主题默认颜色
  colors: IColors;
}

// 图标基础属性
export interface IIconBase {
  // 图标尺寸大小，默认1em
  size?: number | string;

  // 描边宽度
  strokeWidth?: number;

  // 描边端点类型
  strokeLinecap?: StrokeLinecap;

  // 描边连接线类型
  strokeLinejoin?: StrokeLinejoin;

  // 默认主题
  theme?: TCubeTheme;

  // 换肤的颜色数组
  colors?: string[];
}

// 包裹后的图标属性
export interface IIconProps extends IIconBase {
  spin?: boolean;
}

// 包裹后的图标属性
export type IconOptions = ComponentOptions<IIconProps>;

// 包裹前的图标渲染器
export type IconRender = (props: ISvgIconProps) => JSX.Element;

// 包裹后的图标
export type Icon = DefineComponent<ISvgIconProps>;

// 默认属性
export const DEFAULT_ICON_CONFIGS: IIconConfig = {
  size: '1em',
  spin: false,
  strokeWidth: 4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  rtl: false,
  theme: 'outline',
  colors: {
    outline: {
      outStrokeColor: '#333',
      outFillColor: 'transparent',
    },
    filled: {
      outStrokeColor: '#333',
      outFillColor: '#fff',
    },
    twoTone: {
      outStrokeColor: '#333',
      outFillColor: '#2f88ff',
    },
    multiColor: {
      outStrokeColor: '#333',
      outFillColor: '#2f88ff',
      innerStrokeColor: '#fff',
      innerFillColor: '#43ccf8',
    },
  },
  prefix: 'cube',
};

const guid = (): string => {
  return `icon-${(((1 + Math.random()) * 0x100000000) | 0)
    .toString(16)
    .substring(1)}`;
};

// 属性转换函数
export const IconConverter = (
  id: string,
  icon: IIconBase,
  config: IIconConfig,
): ISvgIconProps => {
  const fill = icon?.colors || [];
  const colors: string[] = [];

  const theme: TCubeTheme = icon?.theme || config.theme;

  switch (theme) {
    case 'outline':
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.outline.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.outline.outFillColor,
      );
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.outline.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.outline.outFillColor,
      );
      break;
    case 'filled':
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.filled.outStrokeColor,
      );
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.filled.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.filled.outFillColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.filled.outFillColor,
      );
      break;
    case 'twoTone':
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.twoTone.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.twoTone.outFillColor,
      );
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.twoTone.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.twoTone.outFillColor,
      );
      break;
    case 'multiColor':
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.multiColor.outStrokeColor,
      );
      colors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.multiColor.outFillColor,
      );
      colors.push(
        typeof fill[2] === 'string'
          ? fill[2]
          : config.colors.multiColor.innerStrokeColor,
      );
      colors.push(
        typeof fill[3] === 'string'
          ? fill[3]
          : config.colors.multiColor.innerFillColor,
      );
      break;
  }

  return {
    size: icon?.size || config.size,
    strokeWidth: icon?.strokeWidth || config.strokeWidth,
    strokeLinecap: icon?.strokeLinecap || config.strokeLinecap,
    strokeLinejoin: icon?.strokeLinejoin || config.strokeLinejoin,
    colors,
    id,
  };
}; // 属性转换函数 IconConverter end

const IconContext = Symbol('cube-icon-context');

// 图标配置Provider
export const IconProvider = (config: IIconConfig): void => {
  provide(IconContext, config);
};

// 图标Wrapper
export const IconWrapper = (
  name: string,
  rtl: boolean,
  render: IconRender,
): IconOptions => {
  const options: IconOptions = {
    name: `icon-${name}`,
    props: [
      'size',
      'strokeWidth',
      'strokeLinecap',
      'strokeLinejoin',
      'theme',
      'colors',
      'spin',
    ],
    setup: (props) => {
      const id = guid();
      const ICON_CONFIGS = inject(IconContext, DEFAULT_ICON_CONFIGS);

      return () => {
        const {
          size,
          strokeWidth,
          strokeLinecap,
          strokeLinejoin,
          theme,
          colors,
          spin,
        } = props;
        const svgProps = IconConverter(
          id,
          {
            size,
            strokeWidth,
            strokeLinecap,
            strokeLinejoin,
            theme,
            colors,
          },
          ICON_CONFIGS,
        );
        const cls: string[] = [`${ICON_CONFIGS.prefix}-icon`];

        cls.push(`${ICON_CONFIGS.prefix}-icon-${name}`);

        if (rtl && ICON_CONFIGS.rtl) {
          cls.push(`${ICON_CONFIGS.prefix}-icon-rtl`);
        }

        if (spin) {
          cls.push(`${ICON_CONFIGS.prefix}-icon-spin`);
        }

        return <span class={cls.join(' ')}>{render(svgProps)}</span>;
      }; // setup return end
    }, // setup end
  };

  return options;
}; // end IconWrapper
