/**
 * @format
 * @file BytedFemale byted-female
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFemaleSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g transform="translate(-6.000000, -2.000000)">
      <rect fill-opacity="0.01" fill="#FFFFFF" x="6" y="2" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <g transform="translate(28.000000, 28.000000) scale(-1, -1) rotate(45.000000) translate(-28.000000, -28.000000) translate(13.500000, 4.000000)">
        <path d="M14.3370491,47 C22.0690356,47 28.3370491,40.7319865 28.3370491,33 C28.3370491,29.1340068 26.7700457,25.6340068 24.236544,23.1005051 C21.7030423,20.5670034 18.2030423,19 14.3370491,19 C6.6050626,19 0.337049096,25.2680135 0.337049096,33 C0.337049096,40.7319865 6.6050626,47 14.3370491,47 Z" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
        <path d="M14.5,19 L14.5,1" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
        <path d="M5.5,11 L23.5,11" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      </g>;
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-female', false, getIconBytedFemaleSvgHtml);
