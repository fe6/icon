/**
 * @format
 * @file BytedTv byted-tv
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTvSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="14" width="38" height="28" rx="2" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M24 14L38 6" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M23 14L10 6" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M35 20L35 26" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="33" y="32" width="4" height="4" rx="2" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-tv', false, getIconBytedTvSvgHtml);
