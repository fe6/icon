/**
 * @format
 * @file Ellipsis 省略
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconEllipsisSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" viewBox="64 64 896 896">
  <path d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('ellipsis', false, getIconEllipsisSvgHtml);
