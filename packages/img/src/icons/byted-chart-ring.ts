/**
 * @format
 * @file BytedChartRing byted-chart-ring
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedChartRingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.9757 4.22717C11.3651 5.68494 4 13.9824 4 24C4 34.0213 11.3705 42.3212 20.9863 43.7744C21.9692 43.923 22.9756 44 24 44C25.0209 44 26.024 43.9235 27.0038 43.7759C35.6458 42.4743 42.4762 35.6429 43.7764 27.0004" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M43.775 20.9939C42.4729 12.3556 35.6458 5.52785 27.0078 4.22476" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-chart-ring',
  false,
  getIconBytedChartRingSvgHtml,
);