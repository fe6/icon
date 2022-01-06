/**
 * @format
 * @file BytedCutting byted-cutting
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCuttingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(6.000000, 5.000000)">
      <g transform="translate(0.000000, 0.021632)">
        <polyline points="0 4.97836848 32 4.97836848 32 36.9783685" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
        <path d="M20.4664367,-6 L20.4664367,39.0238636" transform="translate(20.466437, 16.511932) rotate(-135.000000) translate(-20.466437, -16.511932) " stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
        <polyline transform="translate(20.000000, 16.978368) scale(-1, -1) translate(-20.000000, -16.978368) " points="4 0.978368479 36 0.978368479 36 32.9783685" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      </g>;
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-cutting', false, getIconBytedCuttingSvgHtml);
