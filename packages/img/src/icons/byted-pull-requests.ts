/**
 * @format
 * @file BytedPullRequests byted-pull-requests
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPullRequestsSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(7.000000, 4.000000)">
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="30" cy="36" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="4" cy="4" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="4" cy="36" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <path d="M4,8 L4,32" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <path d="M17,6 L26,6 C28.209139,6 30,7.790861 30,10 L30,32" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <polyline stroke-linecap="${props.strokeLinecap}" transform="translate(20.000000, 6.000000) rotate(180.000000) translate(-20.000000, -6.000000) " points="17 0 23 6 17 12" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-pull-requests',
  false,
  getIconBytedPullRequestsSvgHtml,
);
