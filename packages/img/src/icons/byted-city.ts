/**
 * @format
 * @file BytedCity byted-city
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCitySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M4 42H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="8" y="26" width="8" height="16" rx="2" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M12 34H13" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="16" y="4" width="24" height="38" rx="2" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="22" y="10" width="4" height="4" fill="${props.colors?.[2]}"/>
  <rect x="30" y="10" width="4" height="4" fill="${props.colors?.[2]}"/>
  <rect x="22" y="17" width="4" height="4" fill="${props.colors?.[2]}"/>
  <rect x="30" y="17" width="4" height="4" fill="${props.colors?.[2]}"/>
  <rect x="30" y="24" width="4" height="4" fill="${props.colors?.[2]}"/>
  <rect x="30" y="31" width="4" height="4" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-city', false, getIconBytedCitySvgHtml);
