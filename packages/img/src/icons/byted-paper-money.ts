/**
 * @format
 * @file BytedPaperMoney byted-paper-money
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPaperMoneySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 7.000000)">
      <rect stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" x="0" y="0" width="40" height="34" rx="5" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <g transform="translate(13.000000, 8.000000)">
        <polyline points="1 0 7 6 13 0" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
        <path d="M0,8 L14,8" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
        <path d="M0,14 L14,14" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
        <path d="M7,8 L7,19" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[2]}" fill="none" fill-rule="evenodd"/>
      </g>;
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-paper-money',
  false,
  getIconBytedPaperMoneySvgHtml,
);
