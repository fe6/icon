/**
 * @format
 * @file BytedRectangularCircularConnection byted-rectangular-circular-connection
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRectangularCircularConnectionSvgHtml = (
  props: IIconProps,
) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="7" y="31" width="10" height="10" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M25.68 13H42V36H25" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-rectangular-circular-connection',
  false,
  getIconBytedRectangularCircularConnectionSvgHtml,
);
