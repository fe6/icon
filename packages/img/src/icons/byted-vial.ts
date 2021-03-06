/**
 * @format
 * @file BytedVial byted-vial
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedVialSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <path d="M30,33 C30,26.5555556 30,16.8888889 30,4 L18,4 C18,16.8748616 18,26.5310079 18,32.9684387" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <path d="M30,14 L25,14" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <path d="M30,20 L25,20" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <path d="M18,33 C18,34.0441131 18,35.6102827 18,37.6985088 C18,41.1787263 20.6862915,44 24,44 C27.3137085,44 30,41.1787263 30,37.6985088 C30,35.638632 30,34.0937244 30,33.063786 L18,33 Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-vial', false, getIconBytedVialSvgHtml);
