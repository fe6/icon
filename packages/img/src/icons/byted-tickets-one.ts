/**
 * @format
 * @file BytedTicketsOne byted-tickets-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTicketsOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="42" width="26" height="38" rx="2" transform="rotate(-90 5 42)" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M9.00002 16L32 5L37 16" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="13" cy="23" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="13" cy="29" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="13" cy="35" r="2" fill="${props.colors?.[2]}"/>
  <path d="M21 35H25L36 23" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 29H30" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-tickets-one',
  false,
  getIconBytedTicketsOneSvgHtml,
);
