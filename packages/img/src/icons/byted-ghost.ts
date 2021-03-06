/**
 * @format
 * @file BytedGhost byted-ghost
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedGhostSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <path d="M8,44 L12,40 L16,44 L20,38 L24,44 L28,38 L32,44 L36,40 L40,44 L40,20 C40,11.163444 32.836556,4 24,4 C15.163444,4 8,11.163444 8,20 L8,44 Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M19,20 L21,20" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    <path d="M31,20 L33,20" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-ghost', false, getIconBytedGhostSvgHtml);
