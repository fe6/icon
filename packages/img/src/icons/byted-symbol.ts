/**
 * @format
 * @file BytedSymbol byted-symbol
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSymbolSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M4 40.0032H18.0039C11.3346 35.6355 8 30.3009 8 23.9995C8 14.5473 15.0167 7.99976 24.0083 7.99976C33 7.99976 40 14.9998 40 23.9995C40 29.9993 36.6689 35.3338 30.0066 40.0032H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-symbol', false, getIconBytedSymbolSvgHtml);
