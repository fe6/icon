/**
 * @format
 * @file BytedSimCard byted-sim-card
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSimCardSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M10 44H38C39.1046 44 40 43.1046 40 42V14.8847C40 14.3212 39.7623 13.7839 39.3453 13.4049L29.5721 4.52012C29.204 4.18544 28.7243 4 28.2268 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="17" cy="14" r="3" fill="${props.colors?.[0]}"/>
  <rect x="16" y="23" width="16" height="14" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-sim-card', false, getIconBytedSimCardSvgHtml);
