/**
 * @format
 * @file BytedLink byted-link
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedLinkSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M24.7071 9.56496L9.85789 24.4142C6.34317 27.9289 6.34317 33.6274 9.85789 37.1421V37.1421C13.3726 40.6568 19.0711 40.6568 22.5858 37.1421L40.2635 19.4645C42.6066 17.1213 42.6066 13.3223 40.2635 10.9792V10.9792C37.9203 8.63603 34.1213 8.63603 31.7782 10.9792L14.1005 28.6568C12.929 29.8284 12.929 31.7279 14.1005 32.8995V32.8995C15.2721 34.0711 17.1716 34.0711 18.3432 32.8995L33.1924 18.0502" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-link', false, getIconBytedLinkSvgHtml);