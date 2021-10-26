/**
 * @format
 * @file runtime 运行时
 * @author 由 fe6 自动生成
 */

// 描边连接类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel';

// 描边端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square';

// 主题
export type TCubeTheme =
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
  theme: TCubeTheme;

  // 主题默认颜色
  colors: {
    outline: {
      outStrokeColor: string;
      outFillColor: string;
    };

    filled: {
      outStrokeColor: string;
      outFillColor: string;
    };

    twoTone: {
      outStrokeColor: string;
      outFillColor: string;
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
  theme?: TCubeTheme;

  // 填充色
  fill?: string | string[];

  // 换肤的颜色数组
  colors?: string[];
}

// 包裹后的图标属性
export interface IIconProps extends IIconBase {
  spin?: boolean;
}

// 包裹后的图标属性
export type IconOptions = IIconProps;

// 包裹前的图标渲染器
export type IconRender = (props: ISvgIconProps) => string;

// 包裹后的图标
export type IconReturn = (props: ISvgIconProps) => string;

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
  prefix: 'i',
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
  const fill = typeof icon?.fill === 'string' ? [icon?.fill] : icon?.fill || [];
  const colors: string[] = [];

  const theme: TCubeTheme = icon?.theme || config.theme;

  switch (theme) {
    case 'outline':
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.outline.outStrokeColor,
      );
      colors.push('transparent');
      colors.push(
        typeof fill[0] === 'string'
          ? fill[0]
          : config.colors.outline.outStrokeColor,
      );
      colors.push('transparent');
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
      colors.push('#fff');
      colors.push('#fff');
      break;
    case 'two-tone':
    case 'twoTone':
    case 'TwoTone':
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
    case 'multi-color':
    case 'multiColor':
    case 'MultiColor':
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
    colors: icon?.colors || colors,
    id,
  };
}; // 属性转换函数 IconConverter end

// 一般的 Base64 编码字符
const commonbase64EncodeChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// 对 URL 进行编码使用的字符
const urlBase64EncodeChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

// 通用的 Base64 编码函数
const base64encode = (str: string, isUrl?: boolean): string => {
  let out = '';
  let idx = 0;
  const len: number = str.length;
  let code1: number, code2: number, code3: number;

  // 针对不同的编码方式，选择不同的字符集
  const base64EncodeChars = isUrl
    ? urlBase64EncodeChars
    : commonbase64EncodeChars;

  while (idx < len) {
    code1 = str.charCodeAt(idx++) & 0xff;

    // 当最后只有一个字节时
    if (idx === len) {
      out += base64EncodeChars.charAt(code1 >> 2);
      out += base64EncodeChars.charAt((code1 & 0x3) << 4);
      out += '==';
      break;
    }

    code2 = str.charCodeAt(idx++);

    // 当最后剩余两个字节时
    if (idx === len) {
      out += base64EncodeChars.charAt(code1 >> 2);
      out += base64EncodeChars.charAt(
        ((code1 & 0x3) << 4) | ((code2 & 0xf0) >> 4),
      );
      out += base64EncodeChars.charAt((code2 & 0xf) << 2);
      out += '=';
      break;
    }

    // 当剩余字节数大于等于3时
    code3 = str.charCodeAt(idx++);
    out += base64EncodeChars.charAt(code1 >> 2);
    out += base64EncodeChars.charAt(
      ((code1 & 0x3) << 4) | ((code2 & 0xf0) >> 4),
    );
    out += base64EncodeChars.charAt(
      ((code2 & 0xf) << 2) | ((code3 & 0xc0) >> 6),
    );
    out += base64EncodeChars.charAt(code3 & 0x3f);
  }
  return out;
};

// 把 unicode 码转换成 utf8 编码
const unicodeToUtf8 = (str: string): string => {
  let out = '';
  let idx: number;
  let code: number;
  const len: number = str.length;

  for (idx = 0; idx < len; idx++) {
    code = str.charCodeAt(idx);

    // 兼容 ASCII
    if (code >= 0x0001 && code <= 0x007f) {
      out += str.charAt(idx);
    } else if (code > 0x07ff) {
      // 占三个字节的 utf8
      out += String.fromCharCode(0xe0 | ((code >> 12) & 0x0f));
      out += String.fromCharCode(0x80 | ((code >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | ((code >> 0) & 0x3f));
    } else {
      // 占两个字节的 utf8
      out += String.fromCharCode(0xc0 | ((code >> 6) & 0x1f));
      out += String.fromCharCode(0x80 | ((code >> 0) & 0x3f));
    }
  }
  return out;
};

// 图标配置
let currentConfig = DEFAULT_ICON_CONFIGS;

export const setConfig = (config: IIconConfig): void => {
  currentConfig = Object.assign(currentConfig, config);
};

export const getConfig = (): IIconConfig => {
  return currentConfig;
};

// 图标Wrapper
export const IconWrapper = (
  name: string,
  rtl: boolean,
  render: IconRender,
): IconReturn => {
  return (props: IIconProps) => {
    const config = getConfig();

    const cls: string[] = [`${config.prefix}-icon`];

    cls.push(`${config.prefix}-icon-${name}`);

    if (rtl && config.rtl) {
      cls.push(`${config.prefix}-icon-rtl`);
    }

    if (props?.spin) {
      cls.push(`${config.prefix}-icon-spin`);
    }

    const svgProps = IconConverter(guid(), props, config);
    const svgHtml = render(svgProps);
    const src = base64encode(unicodeToUtf8(svgHtml));

    return `<span class="${cls.join(' ')}">
        <img class"${
          config.prefix
        }-icon-img" src="data:image/svg+xml;base64,${src}" />
      </span>`;
  };
}; // end IconWrapper
