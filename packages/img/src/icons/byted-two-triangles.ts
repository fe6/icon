/**
 * @format
 * @file BytedTwoTriangles byted-two-triangles
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTwoTrianglesSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" fill="${props.colors?.[1]}"/>
  <path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" fill="${props.colors?.[1]}"/>
  <path d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-two-triangles',
  false,
  getIconBytedTwoTrianglesSvgHtml,
);
