/**
 * @format
 * @file BytedJewelry byted-jewelry
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedJewelrySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="20" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M20 24C20 17.6364 22.6275 15.3535 24 15C25.22 15.1768 28 17.2121 28 24C28 30.7879 25.22 33 24 33C22.6275 32.8232 20 30.3636 20 24Z" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}"/>
  <path d="M19.9995 23C18.4464 21.4625 13.6179 21.8399 12.0002 22C11.5149 23.7618 12.3521 27.4923 14.2934 29.4143C16.72 31.8167 18.6609 33 23.9995 33" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}"/>
  <path d="M28 23C29.4358 21.4669 33.5044 21.8403 35 22C35.2991 23.597 35.1402 27.1879 32.6276 29.8708C30.115 32.5537 25.5 33 24 33" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-jewelry', false, getIconBytedJewelrySvgHtml);
