/**
 * @format
 * @file BytedFireworks byted-fireworks
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFireworksSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(6.000000, 2.000000)">
      <polygon stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" points="0 40 8.67409249 15.2640024 25 32.0384615"/>
      <path d="M17,17 L22,12 C24.6666667,9.33333333 25,7 23,5" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <path d="M23,23 L28,18 C31.3333333,14.6666667 34.6666667,14.6666667 38,18" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[0]}" cx="14" cy="3" r="2" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[0]}" cx="36" cy="2" r="2" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[0]}" cx="36" cy="25" r="2" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[0]}" cx="33" cy="34" r="2" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-fireworks',
  false,
  getIconBytedFireworksSvgHtml,
);
