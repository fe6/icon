/**
 * @format
 * @file BytedDoughnut byted-doughnut
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDoughnutSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="24" cy="24" r="19" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="24" cy="24" r="7" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-doughnut',
  false,
  getIconBytedDoughnutSvgHtml,
);
