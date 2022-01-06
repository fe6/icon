/**
 * @format
 * @file BytedMailOpen byted-mail-open
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedMailOpenSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <path d="M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <polyline stroke-linecap="${props.strokeLinecap}" points="-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-mail-open',
  false,
  getIconBytedMailOpenSvgHtml,
);
