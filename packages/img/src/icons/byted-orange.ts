/**
 * @format
 * @file BytedOrange byted-orange
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedOrangeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M41 26C41 35.9411 35 44 24 44C13 44 7 35.9411 7 26C7 22.3198 8.10446 18.8975 10 16.0466C13.2248 11.1965 17.7391 13 24 13C30.2609 13 34.7752 11.1965 38 16.0466C39.8955 18.8975 41 22.3198 41 26Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M26 13L29 9H26L24 7L22 9H19L22 13" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="18" cy="20" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="15" cy="27" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="21" cy="25" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="18" cy="32" r="2" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-orange', false, getIconBytedOrangeSvgHtml);
