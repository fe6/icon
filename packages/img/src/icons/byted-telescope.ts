/**
 * @format
 * @file BytedTelescope byted-telescope
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTelescopeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="5" width="12" height="38" rx="6" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="30" y="5" width="12" height="38" rx="6" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M12 43C15.3137 43 18 40.3137 18 37C18 33.6863 15.3137 31 12 31C8.68629 31 6 33.6863 6 37C6 40.3137 8.68629 43 12 43Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M36 43C39.3137 43 42 40.3137 42 37C42 33.6863 39.3137 31 36 31C32.6863 31 30 33.6863 30 37C30 40.3137 32.6863 43 36 43Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M30 31C30 27.6863 27.3137 25 24 25C20.6863 25 18 27.6863 18 31" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-telescope',
  false,
  getIconBytedTelescopeSvgHtml,
);