/**
 * @format
 * @file BytedKungfu byted-kungfu
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedKungfuSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 17C13.7614 17 16 14.7614 16 12C16 9.23858 13.7614 7 11 7C8.23858 7 6 9.23858 6 12C6 14.7614 8.23858 17 11 17Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2"/>
  <path d="M20 18L28 24L25 42" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M28 24L44 11" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M28 16.8L27 8L20 18L16 27L10 30" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-kungfu', false, getIconBytedKungfuSvgHtml);
