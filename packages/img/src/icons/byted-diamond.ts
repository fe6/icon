/**
 * @format
 * @file BytedDiamond byted-diamond
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDiamondSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(3.000000, 5.000000)">
      <polygon points="7.63636364 0 34.3636364 0 42 13.3 21 38 0 13.3" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <polyline points="7.63636364 0 21 38 34.3636364 0" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M0,13.3 L42,13.3" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <polyline points="12.4090909 13.3 21 0 29.5909091 13.3" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-diamond', false, getIconBytedDiamondSvgHtml);
