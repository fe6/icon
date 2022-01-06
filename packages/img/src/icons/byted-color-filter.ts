/**
 * @format
 * @file BytedColorFilter byted-color-filter
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedColorFilterSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M24 40.9443C26.123 42.8445 28.9266 43.9999 32 43.9999C38.6274 43.9999 44 38.6273 44 31.9999C44 26.4084 40.1757 21.7101 35 20.3779" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M13 20.3779C7.82432 21.7101 4 26.4084 4 31.9999C4 38.6273 9.37258 43.9999 16 43.9999C22.6274 43.9999 28 38.6273 28 31.9999C28 30.4504 27.7063 28.9696 27.1716 27.6099" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-color-filter',
  false,
  getIconBytedColorFilterSvgHtml,
);
