/**
 * @format
 * @file BytedHourglassNull byted-hourglass-null
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedHourglassNullSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(7.000000, 3.500000)">
      <path d="M0,0.5 L34,0.5" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M0,40.5 L34,40.5" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M30,20.4999965 C27.3333333,33.8388874 23,40.5055541 17,40.4999965 C11,40.494439 6.66666667,33.8277723 4,20.4999965 L30,20.4999965 Z" fill="${props.colors?.[1]}" fill-rule="nonzero" transform="translate(17.000000, 30.499998) rotate(180.000000) translate(-17.000000, -30.499998) " stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <path d="M30,0.5 C27.3333333,13.8388909 23,20.5055575 17,20.5 C11,20.4944425 6.66666667,13.8277758 4,0.5 L30,0.5 Z" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-hourglass-null',
  false,
  getIconBytedHourglassNullSvgHtml,
);
