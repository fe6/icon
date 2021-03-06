/**
 * @format
 * @file BytedSim byted-sim
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSimSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(8.000000, 4.000000)">
      <polygon stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" points="0 0 24.8888889 0 32 7.27272727 32 40 0 40" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <rect stroke="${props.colors?.[2]}" fill="${props.colors?.[3]}" fill-rule="nonzero" x="7" y="22" width="18" height="10" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <path d="M7,8 L7,14" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M13,8 L13,14" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M19,8 L19,14" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-sim', false, getIconBytedSimSvgHtml);
