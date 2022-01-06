/**
 * @format
 * @file BytedTrend byted-trend
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTrendSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <rect stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" x="6" y="6" width="36" height="36" rx="3"/>
      <g transform="translate(13.000000, 13.000000)">
        <polyline transform="translate(10.729923, 10.927306) rotate(-135.000000) translate(-10.729923, -10.927306) " points="13.8290808 -0.525973264 13.8290808 7.47402674 7.63076535 7.48132266 7.6591204 22.3805856" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
        <polyline points="13 5 21 5 21 13" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
      </g>;
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-trend', false, getIconBytedTrendSvgHtml);
