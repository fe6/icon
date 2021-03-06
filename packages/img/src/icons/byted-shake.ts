/**
 * @format
 * @file BytedShake byted-shake
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedShakeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 6.000000)">
      <polyline stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" points="0 4 4 8.66666667 0 13.3333333 4 18 0 22.6666667 4 27.3333333 0 32" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <polyline stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" transform="translate(38.000000, 18.000000) scale(-1, 1) translate(-38.000000, -18.000000) " points="36 4 40 8.66666667 36 13.3333333 40 18 36 22.6666667 40 27.3333333 36 32" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <rect stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" x="10" y="0" width="20" height="36" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <path d="M18,29 L22,29" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-shake', false, getIconBytedShakeSvgHtml);
