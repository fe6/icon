/**
 * @format
 * @file all 所有组件出口
 * @author 由 fe6 自动生成
 */

import * as IconMap from './map';
import { IIconProps, IconWrapper } from './runtime';

export type IconType = keyof typeof IconMap;

export interface IIconAllProps extends IIconProps {
  type: IconType | string;
}

// 正则 数据中的默认颜色 替换
const reColors: string[] = ['#333', '#2f88ff', '#fff', '#43ccf8'];

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
  originSvg = originSvg.replace(/width="d{0,}"/, `width="${size}"`);
  originSvg = originSvg.replace(/height="d{0,}"/, `height="${size}"`);

  let contentHtml = svgItem ? originSvg : '';

  if (colors) {
    colors.forEach((colorItem: string, colorIdx: number) => {
      contentHtml = contentHtml.replace(
        new RegExp(
          `${reColors[colorIdx]}|${reColors[colorIdx].toUpperCase()}`,
          'g',
        ),
        colorItem,
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
      const curSvg = String(props.svg);
      return allGetContent(curSvg, props);
    })(props);
  }
};
