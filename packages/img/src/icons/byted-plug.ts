/**
 * @format
 * @file BytedPlug byted-plug
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPlugSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(6.000000, 4.000000)">
      <path d="M0,10 L36,10 L36,20 C32,28 26,32 18,32 C10,32 4,28 0,20 L0,10 Z" stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <polyline stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" points="27 30 26 40 10 40 9 30" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M16,20 L20,20" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M10,8 L10,0" stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" transform="translate(10.000000, 4.000000) rotate(180.000000) translate(-10.000000, -4.000000) " stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M26,8 L26,0" stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" transform="translate(26.000000, 4.000000) rotate(180.000000) translate(-26.000000, -4.000000) " stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-plug', false, getIconBytedPlugSvgHtml);
