/**
 * @format
 * @file BytedScan byted-scan
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedScanSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 24L41 24" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 7L24 41" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="5" y="5" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="14" y="5" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="30" y="5" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="39" y="5" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="39" y="14" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="5" y="14" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="5" y="39" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="14" y="39" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="30" y="39" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="39" y="39" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="39" y="30" width="4" height="4" fill="${props.colors?.[0]}"/>
  <rect x="5" y="30" width="4" height="4" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-scan', false, getIconBytedScanSvgHtml);
