/**
 * @format
 * @file BytedWatermelonOne byted-watermelon-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedWatermelonOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 4L41 33.92C41 33.92 36.0457 38 24 38C11.9543 38 7 33.92 7 33.92L24 4Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="24" cy="17" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="27" cy="23" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="21" cy="23" r="2" fill="${props.colors?.[2]}"/>
  <path d="M41 39.92C41 39.92 36.0457 44 24 44C11.9543 44 7 39.92 7 39.92" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-watermelon-one',
  false,
  getIconBytedWatermelonOneSvgHtml,
);
