/**
 * @format
 * @file BytedBranch byted-branch
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedBranchSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(5.000000, 4.000000)">
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="35" cy="20" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="4" cy="4" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="4" cy="36" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <polyline stroke-linecap="${props.strokeLinecap}" points="4 8 4 32 4 20.0083363 31 20.0083363" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-branch', false, getIconBytedBranchSvgHtml);
