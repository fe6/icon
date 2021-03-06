/**
 * @format
 * @file BytedSofa byted-sofa
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSofaSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 8.000000)">
      <rect fill="${props.colors?.[1]}" fill-rule="nonzero" x="0" y="13" width="8" height="14" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <rect fill="${props.colors?.[1]}" fill-rule="nonzero" x="32" y="13" width="8" height="14" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <rect stroke-linecap="${props.strokeLinecap}" x="8" y="19" width="24" height="8" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <polyline stroke-linecap="${props.strokeLinecap}" points="4 12 4 0 36 0 36 12" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M4,28 L4,32" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M36,28 L36,32" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-sofa', false, getIconBytedSofaSvgHtml);
