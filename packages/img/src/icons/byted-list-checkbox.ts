/**
 * @format
 * @file BytedListCheckbox byted-list-checkbox
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedListCheckboxSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 24H44H20Z" fill="${props.colors?.[1]}"/>
  <path d="M20 24H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 38H44H20Z" fill="${props.colors?.[1]}"/>
  <path d="M20 38H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10H44H20Z" fill="${props.colors?.[1]}"/>
  <path d="M20 10H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="4" y="34" width="8" height="8" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="4" y="20" width="8" height="8" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="4" y="6" width="8" height="8" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-list-checkbox',
  false,
  getIconBytedListCheckboxSvgHtml,
);
