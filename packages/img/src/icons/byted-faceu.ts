/**
 * @format
 * @file BytedFaceu byted-faceu
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFaceuSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M27 12V16C29.6667 16.8333 36 19 36 26C36 33 30 36 24 36C18 36 12 33 12 26C12 18 21.6667 13.1667 27 12Z" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <ellipse cx="29" cy="26" rx="3" ry="4" fill="${props.colors?.[2]}"/>
  <ellipse cx="19" cy="26" rx="3" ry="4" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-faceu', false, getIconBytedFaceuSvgHtml);
