/**
 * @format
 * @file BytedBib byted-bib
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedBibSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31 14C31 22 17 22 17 14C17 9.00004 22 7.99996 20 4.99998C18 1.99998 8 6.99993 8 16V31.9999C8 40.4998 16.5 43.9998 23.5 43.9999C30.5 44 40 41 40 31.9999V16.0001C40 7.00004 29 2 27 4.99998C25 7.99995 31 9.00004 31 14Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M19 32L24 27L29 32L24 37L19 32Z" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-bib', false, getIconBytedBibSvgHtml);
