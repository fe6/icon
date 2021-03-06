/**
 * @format
 * @file BytedPic byted-pic
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPicSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(5.000000, 8.000000)">
      <path d="M2,0 L36,0 C37.1045695,-2.02906125e-16 38,0.8954305 38,2 L38,30 C38,31.1045695 37.1045695,32 36,32 L2,32 C0.8954305,32 1.3527075e-16,31.1045695 0,30 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <circle stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" cx="9.5" cy="8.5" r="1.5" stroke-linejoin="${props.strokeLinejoin}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M10,16 L15,20 L21,13 L38,26 L38,30 C38,31.1045695 37.1045695,32 36,32 L2,32 C0.8954305,32 2.27508946e-13,31.1045695 2.27373675e-13,30 L2.27373675e-13,26 L10,16 Z" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke="${props.colors?.[0]}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-pic', false, getIconBytedPicSvgHtml);
