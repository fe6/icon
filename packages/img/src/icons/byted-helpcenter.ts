/**
 * @format
 * @file BytedHelpcenter byted-helpcenter
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedHelpcenterSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 28.6249V24.6249C27.3137 24.6249 30 21.9386 30 18.6249C30 15.3112 27.3137 12.6249 24 12.6249C20.6863 12.6249 18 15.3112 18 18.6249" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 37.6249C25.3807 37.6249 26.5 36.5056 26.5 35.1249C26.5 33.7442 25.3807 32.6249 24 32.6249C22.6193 32.6249 21.5 33.7442 21.5 35.1249C21.5 36.5056 22.6193 37.6249 24 37.6249Z" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-helpcenter',
  false,
  getIconBytedHelpcenterSvgHtml,
);
