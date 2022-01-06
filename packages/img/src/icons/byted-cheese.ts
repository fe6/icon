/**
 * @format
 * @file BytedCheese byted-cheese
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCheeseSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M43 20C43 17.8285 24.8921 8.11199 20.134 5.59629C19.4394 5.22905 18.603 5.31195 17.9852 5.79738L5 16" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M5 17.6522C5 16.3232 6.2688 15.3543 7.55521 15.688C13.9619 17.3498 30.8602 21.3331 40.1615 19.7589C41.5557 19.523 43 20.5369 43 21.951V38.1025C43 39.1662 42.1674 40.0438 41.1051 40.0997L7.10512 41.8892C5.96083 41.9494 5 41.0378 5 39.892V17.6522Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="12" cy="25" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="25" cy="27" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="34" cy="32" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="18" cy="32" r="2" fill="${props.colors?.[2]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-cheese', false, getIconBytedCheeseSvgHtml);
