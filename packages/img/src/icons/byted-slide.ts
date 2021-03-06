/**
 * @format
 * @file BytedSlide byted-slide
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSlideSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <g transform="translate(4.000000, 5.000000)">
        <rect stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" x="3" y="0.5" width="34" height="28" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
        <polyline stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" points="12 36.5 20 28.5 28 36.5" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
        <polyline stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" transform="translate(19.950550, 14.097000) rotate(-135.000000) translate(-19.950550, -14.097000) " points="23.1048003 3.07144261 23.009533 10.9557885 16.7962996 11.0244674 16.8108301 25.1225569" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
        <path d="M0,0.5 L40,0.5" stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      </g>;
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-slide', false, getIconBytedSlideSvgHtml);
