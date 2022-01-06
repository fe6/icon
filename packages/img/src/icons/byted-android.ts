/**
 * @format
 * @file BytedAndroid byted-android
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedAndroidSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M43.9014 36H4.09888C5.10233 25.8934 13.6294 18 24.0001 18C34.3708 18 42.8979 25.8934 43.9014 36Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M14 20L10 13" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M33 20L37 13" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="15" cy="29" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="33" cy="29" r="2" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-android', false, getIconBytedAndroidSvgHtml);
