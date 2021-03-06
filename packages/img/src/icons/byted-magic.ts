/**
 * @format
 * @file BytedMagic byted-magic
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedMagicSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(5.000000, 4.000000)">
      <path d="M25,0 L25,6 M34.8994949,4.10050506 L30.6568542,8.34314575 M39,14 L33,14 M34.8994949,23.8994949 L30.6568542,19.6568542 M25,28 L25,22 M15.1005051,23.8994949 L19.3431458,19.6568542 M11,14 L17,14 M15.1005051,4.10050506 L19.3431458,8.34314575" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M24.5857864,14.4142136 L0.544155877,38.4558441" transform="translate(12.564971, 26.435029) rotate(-0.000000) translate(-12.564971, -26.435029) " stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-magic', false, getIconBytedMagicSvgHtml);
