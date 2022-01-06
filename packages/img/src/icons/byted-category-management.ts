/**
 * @format
 * @file BytedCategoryManagement byted-category-management
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCategoryManagementSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="28" width="36" height="14" rx="4" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M20 7H10C7.79086 7 6 8.79086 6 11V17C6 19.2091 7.79086 21 10 21H20" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <circle cx="34" cy="14" r="8" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="34" cy="14" r="3" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-category-management',
  false,
  getIconBytedCategoryManagementSvgHtml,
);
