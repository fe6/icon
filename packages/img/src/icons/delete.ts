/**
 * @format
 * @file Delete 删除
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconDeleteSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M9 10V44H39V10H9Z" fill="${props.colors[1]}" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M20 20V33" stroke="${props.colors[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M28 20V33" stroke="${props.colors[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 10H44" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M16 10L19.289 4H28.7771L32 10H16Z" fill="${props.colors[1]}" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('delete', false, getIconDeleteSvgHtml);
