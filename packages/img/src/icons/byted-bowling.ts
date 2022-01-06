/**
 * @format
 * @file BytedBowling byted-bowling
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedBowlingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 26C25.66 26 27 24.66 27 23C27 21.34 25.66 20 24 20C22.34 20 21 21.34 21 23C21 24.66 22.34 26 24 26Z" fill="${props.colors?.[0]}"/>
  <path d="M31 18C32.66 18 34 16.66 34 15C34 13.34 32.66 12 31 12C29.34 12 28 13.34 28 15C28 16.66 29.34 18 31 18Z" fill="${props.colors?.[0]}"/>
  <path d="M17 18C18.66 18 20 16.66 20 15C20 13.34 18.66 12 17 12C15.34 12 14 13.34 14 15C14 16.66 15.34 18 17 18Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-bowling', false, getIconBytedBowlingSvgHtml);
