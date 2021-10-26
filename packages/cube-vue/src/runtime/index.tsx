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
export type Theme =
  | 'outline'
  | 'filled'
  | 'twoTone'
  | 'TwoTone'
  | 'two-tone'
  | 'multiColor'
  | 'MultiColor'
  | 'multi-color';

// 包裹前的图标属性
export interface ISvgIconProps {
  // 当前图标的唯一Id
  id: string;

  // 图标尺寸大小，默认1em
  size: number | string;

  // 描边宽度
  strokeWidth: number;

  // 描边端点类型
  strokeLinecap: StrokeLinecap;

  // 描边连接线类型
  strokeLinejoin: StrokeLinejoin;

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
  theme: Theme;

  // 主题默认颜色
  colors: {
    outline: {
      fill: string;
      background: string;
    };

    filled: {
      fill: string;
      background: string;
    };

    twoTone: {
      fill: string;
      twoTone: string;
    };

    multiColor: {
      outStrokeColor: string;
      outFillColor: string;
      innerStrokeColor: string;
      innerFillColor: string;
    };
  };
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
  theme?: Theme;

  // 填充色
  fill?: string | string[];

  // 换肤的颜色数组
  colors?: string[];
}

// 包裹后的图标属性
export interface IIconProps extends IIconBase {
  spin?: boolean;
  id?: string | number;
}

// 包裹后的图标属性
export type IconOptions = ComponentOptions<IIconProps>;

// 包裹前的图标渲染器
export type IconRender = (props: ISvgIconProps) => JSX.Element | string;

// 包裹后的图标
export type Icon = DefineComponent<ISvgIconProps>;

// Window iconCube 每一条数据
export interface IIconCubeItemData extends IIconProps {
  content: string;
  viewBox: string;
  canSet?: boolean; // 是否优先定制数据
}

// Window iconCube 整个数据类型
export interface IIconCubeData {
  [key: number | string]: IIconCubeItemData;
}

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
      fill: '#333',
      background: 'transparent',
    },
    filled: {
      fill: '#333',
      background: '#fff',
    },
    twoTone: {
      fill: '#333',
      twoTone: '#2f88ff',
    },
    multiColor: {
      outStrokeColor: '#333',
      outFillColor: '#2f88ff',
      innerStrokeColor: '#fff',
      innerFillColor: '#43ccf8',
    },
  },
  prefix: 'i',
};

// 获取 SVG 配置数据
export const getSvgItem = (svgId: string): IIconCubeItemData | null => {
  const iconCube: IIconCubeData | null = (window as any).__iconCube__;
  return svgId && iconCube ? iconCube[svgId] : null;
};

const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val: Object, key: string) => hasOwnProperty.call(val, key);
const objectToString = Object.prototype.toString;
const toTypeString = (value: any) => objectToString.call(value);

type TSvgAttr =
  | 'canSet'
  | 'theme'
  | 'size'
  | 'strokeWidth'
  | 'strokeLinecap'
  | 'strokeLinejoin'
  | 'theme'
  | 'fill'
  | 'colors'
  | 'spin'
  | 'content'
  | 'viewBox';

// 获取 SVG 设置属性数据
export const getSvgProp = (
  svgItem: IIconCubeItemData | null,
  attr: TSvgAttr,
  type: string,
  canSet: boolean,
  defValue: any,
) => {
  if (!svgItem || !hasOwn(svgItem, attr)) {
    return defValue;
  }

  const propConfig =
    toTypeString(svgItem[attr]) === `[object ${type}]`
      ? svgItem[attr]
      : defValue;

  if (attr === 'content' || attr === 'canSet') {
    return propConfig;
  }
  return canSet ? propConfig : defValue;
};

// 获取颜色
const getColors = (theme: Theme, oldColor: string[]) => {
  const newColors: string[] = [];

  switch (theme) {
    case 'outline':
      newColors.push(oldColor[0]);
      newColors.push('transparent');
      newColors.push(oldColor[0]);
      newColors.push('transparent');
      break;
    case 'filled':
      newColors.push(oldColor[0]);
      newColors.push(oldColor[0]);
      newColors.push(oldColor[2]);
      newColors.push(oldColor[2]);
      break;
    case 'two-tone':
    case 'twoTone':
    case 'TwoTone':
      newColors.push(oldColor[0]);
      newColors.push(oldColor[1]);
      newColors.push(oldColor[0]);
      newColors.push(oldColor[1]);
      break;
    case 'multi-color':
    case 'multiColor':
    case 'MultiColor':
      newColors.push(oldColor[0]);
      newColors.push(oldColor[1]);
      newColors.push(oldColor[2]);
      newColors.push(oldColor[3]);
      break;
  }
  return newColors;
};

// 属性转换函数
export const IconConverter = (
  id: string,
  icon: IIconProps,
  config: IIconConfig,
): ISvgIconProps => {
  const fill = typeof icon?.fill === 'string' ? [icon?.fill] : icon?.fill || [];
  const oldColors: string[] = [];
  const svgItem: IIconCubeItemData | null = getSvgItem(id);
  const canSet = getSvgProp(svgItem, 'canSet', 'Boolean', false, true);

  const theme = getSvgProp(
    svgItem,
    'theme',
    'String',
    canSet,
    icon?.theme || config.theme,
  );

  switch (theme) {
    case 'outline':
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.outline.fill,
      );
      oldColors.push('transparent');
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.outline.fill,
      );
      oldColors.push('transparent');
      break;
    case 'filled':
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.filled.fill,
      );
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.filled.fill,
      );
      oldColors.push('#fff');
      oldColors.push('#fff');
      break;
    case 'two-tone':
    case 'twoTone':
    case 'TwoTone':
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.twoTone.fill,
      );
      oldColors.push(
        typeof fill[1] === 'string' ? fill[1] : config.colors.twoTone.twoTone,
      );
      oldColors.push(
        typeof fill[0] === 'string' ? fill[0] : config.colors.twoTone.fill,
      );
      oldColors.push(
        typeof fill[1] === 'string' ? fill[1] : config.colors.twoTone.twoTone,
      );
      break;
    case 'multi-color':
    case 'multiColor':
    case 'MultiColor':
      oldColors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.multiColor.outStrokeColor,
      );
      oldColors.push(
        typeof fill[1] === 'string'
          ? fill[1]
          : config.colors.multiColor.outFillColor,
      );
      oldColors.push(
        typeof fill[2] === 'string'
          ? fill[2]
          : config.colors.multiColor.innerStrokeColor,
      );
      oldColors.push(
        typeof fill[3] === 'string'
          ? fill[3]
          : config.colors.multiColor.innerFillColor,
      );
      break;
  }
  const size = getSvgProp(
    svgItem,
    'size',
    'String',
    canSet,
    String(icon?.size || config.size),
  );
  const strokeLinejoin = getSvgProp(
    svgItem,
    'strokeLinejoin',
    'String',
    canSet,
    icon?.strokeLinejoin || config.strokeLinejoin,
  );
  const strokeLinecap = getSvgProp(
    svgItem,
    'strokeLinecap',
    'String',
    canSet,
    icon?.strokeLinecap || config.strokeLinecap,
  );
  const strokeWidth = getSvgProp(
    svgItem,
    'strokeWidth',
    'String',
    canSet,
    icon?.strokeWidth || config.strokeWidth,
  );
  const spin = getSvgProp(
    svgItem,
    'spin',
    'String',
    canSet,
    icon?.spin || config.spin,
  );
  let colors = getSvgProp(
    svgItem,
    'colors',
    'Array',
    canSet,
    icon?.colors || oldColors,
  ).slice();
  colors = getColors(theme, colors);

  return {
    size,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    colors,
    spin,
    id,
  };
}; // 属性转换函数 IconConverter end

const IconContext = Symbol('i-icon-context');

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
      'fill',
      'colors',
      'spin',
      'id',
    ],
    setup: (props) => {
      const ICON_CONFIGS = inject(IconContext, DEFAULT_ICON_CONFIGS);

      return () => {
        const {
          size,
          strokeWidth,
          strokeLinecap,
          strokeLinejoin,
          theme,
          fill,
          colors,
          spin,
        } = props;

        const propsId = String(props.id ? props.id : name);
        const svgProps = IconConverter(
          propsId,
          {
            size,
            strokeWidth,
            strokeLinecap,
            strokeLinejoin,
            theme,
            fill,
            colors,
            spin,
            id: propsId,
          },
          ICON_CONFIGS,
        );
        const cls: string[] = [`${ICON_CONFIGS.prefix}-icon`];

        cls.push(`${ICON_CONFIGS.prefix}-icon-${name}`);

        if (rtl && ICON_CONFIGS.rtl) {
          cls.push(`${ICON_CONFIGS.prefix}-icon-rtl`);
        }

        if (spin && String(spin) === 'true') {
          cls.push(`${ICON_CONFIGS.prefix}-icon-spin`);
        }

        return name === 'cube' ? (
          <span class={cls.join(' ')} v-html={render(svgProps)}></span>
        ) : (
          <span class={cls.join(' ')}>{render(svgProps)}</span>
        );
      }; // setup return end
    }, // setup end
  };

  return options;
}; // end IconWrapper
