/**
 * @format
 * @file BytedTennis byted-tennis
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTennisSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M24 4C23.8991 10.6682 22.2619 15.6696 19.0884 19.0044C15.9148 22.3391 10.8853 24.0071 4 24.0083" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M43.9682 25.0052C37.4557 24.5585 32.4795 25.9505 29.0395 29.1812C25.5994 32.4119 23.9206 37.3515 24.0029 43.9999" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-tennis', false, getIconBytedTennisSvgHtml);
