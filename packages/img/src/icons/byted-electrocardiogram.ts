/**
 * @format
 * @file BytedElectrocardiogram byted-electrocardiogram
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedElectrocardiogramSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g>
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <circle stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" cx="24" cy="24" r="20"/>
      <polyline stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" points="11 28.1320956 16.6844708 28.1320956 21.2233858 13 24.8952638 35 29.4483373 24.6175277 32.9127137 28.1320956 37 28.1320956" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-electrocardiogram',
  false,
  getIconBytedElectrocardiogramSvgHtml,
);
