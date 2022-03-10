/**
 * @format
 * @file all 所有组件出口
 * @author 由 fe6 自动生成
 */

import * as IconMap from './map';
import { IIconProps, IconWrapper } from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends IIconProps {
  type?: IconType | string;
}

// 正则 数据中的默认颜色 替换
const reColors: string[] = ['#000', '#2f88ff', '#fff', '#43ccf8'];
const reFullColors: string[] = ['#000000', '#2f88ff', '#ffffff', '#43ccf8'];
const reEnColors: string[] = ['black', '#2f88ff', 'white', '#43ccf8'];

// rgb 和 #fff 转换成 #ffffff

const colorHex = (color: string) => {
  let that = color;
  //十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(that)) {
    const aColor = that.replace(/(?:(|)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      if (hex.length < 2) {
        hex = '0' + hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  } else if (reg.test(that)) {
    const aNum = that.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return that;
    } else if (aNum.length === 3) {
      let numHex = '#';
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  }
  return that;
};

// 获取 SVG 内容
export const allGetContent = (svgItem: string, props: IIconProps): string => {
  if (!svgItem) {
    return '';
  }

  const { size, colors, strokeLinejoin, strokeLinecap, strokeWidth } = props;

  let originSvg = svgItem;

  originSvg = originSvg.replace(/\\/g, '');
  originSvg =
    originSvg[0] === '"'
      ? originSvg.substr(1, originSvg.length - 1)
      : originSvg;
  originSvg =
    originSvg[originSvg.length - 1] === '"'
      ? originSvg.substr(0, originSvg.length - 1)
      : originSvg;
  originSvg = originSvg.replace(/width="\d{0,}\w{2,3}"/, `width="${size}"`);
  originSvg = originSvg.replace(/height="\d{0,}\w{2,3}"/, `height="${size}"`);

  let contentHtml = svgItem ? originSvg : '';

  if (colors) {
    colors.forEach((colorItem: string, colorIdx: number) => {
      contentHtml = contentHtml.replace(
        new RegExp(
          `${reColors[colorIdx]}|${reColors[colorIdx].toUpperCase()}|${
            reEnColors[colorIdx]
          }|${reEnColors[colorIdx].toUpperCase()}|${
            reFullColors[colorIdx]
          }|${reFullColors[colorIdx].toUpperCase()}`,
          'g',
        ),
        colorHex(colorItem),
      );
    });
  }

  contentHtml = contentHtml.replace(
    /stroke-linejoin="round"/g,
    `stroke-linejoin="${strokeLinejoin}"`,
  );

  contentHtml = contentHtml.replace(
    /stroke-linecap="round"/g,
    `stroke-linecap="${strokeLinecap}"`,
  );

  contentHtml = contentHtml.replace(
    /stroke-width="4"/g,
    `stroke-width="${strokeWidth}"`,
  );

  return contentHtml;
};

export const iconKeg = (props: IIconAllProps) => {
  if (props && props.type) {
    return IconMap[props.type as IconType](props);
  }

  if (props && props.svg) {
    return IconWrapper('icon-keg', true, (props: IIconProps) => {
      let curSvg = String(props.svg);
      return allGetContent(curSvg, props);
    })(props);
  }
};
