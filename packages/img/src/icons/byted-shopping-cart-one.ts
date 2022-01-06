/**
 * @format
 * @file BytedShoppingCartOne byted-shopping-cart-one
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedShoppingCartOneSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="20.5" cy="41.5" r="3.5" fill="${props.colors?.[0]}"/>
  <circle cx="37.5" cy="41.5" r="3.5" fill="${props.colors?.[0]}"/>
  <path d="M5 6L14 12L19 34H39L44 17H25" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M25 26L32.2727 26L41 26" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-shopping-cart-one',
  false,
  getIconBytedShoppingCartOneSvgHtml,
);
