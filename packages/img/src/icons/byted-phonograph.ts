/**
 * @format
 * @file BytedPhonograph byted-phonograph
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPhonographSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="6" width="36" height="36" rx="3" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="24" cy="25" r="11" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <rect x="22" y="23" width="4" height="4" rx="2" fill="${props.colors?.[2]}"/>
  <rect x="34" y="34" width="4" height="4" rx="2" fill="${props.colors?.[0]}"/>
  <path d="M28 20L36 12" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-phonograph',
  false,
  getIconBytedPhonographSvgHtml,
);
