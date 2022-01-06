/**
 * @format
 * @file BytedStrongbox byted-strongbox
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedStrongboxSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <rect x="4" y="4" width="40" height="40" rx="3" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="12" cy="12" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="12" cy="36" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="36" cy="12" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="36" cy="36" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="24" cy="24" r="9" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-strongbox',
  false,
  getIconBytedStrongboxSvgHtml,
);
