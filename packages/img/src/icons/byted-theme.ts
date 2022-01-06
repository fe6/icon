/**
 * @format
 * @file BytedTheme byted-theme
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedThemeSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <path d="M18,6 C18,9.3137085 20.6862915,12 24,12 C27.3137085,12 30,9.3137085 30,6 L35.4545455,6 L42,15.8181818 L36.2727273,20.7272727 L36.2727273,42 L11.7272727,42 L11.7272727,20.7272727 L6,15.8181818 L12.5454545,6 L18,6 Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}"/>
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-theme', false, getIconBytedThemeSvgHtml);
