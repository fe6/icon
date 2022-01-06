/**
 * @format
 * @file BytedChartProportion byted-chart-proportion
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedChartProportionSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M16.3446 5.51746C13.9 6.53111 11.7001 8.01562 9.85786 9.85785C6.23858 13.4771 4 18.4771 4 24C4 35.0457 12.9543 44 24 44V44C29.5228 44 34.5228 41.7614 38.1421 38.1421C39.9844 36.2999 41.4689 34.0999 42.4825 31.6554" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 24H44C44 12.9543 35.0457 4 24 4L24 24Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-chart-proportion',
  false,
  getIconBytedChartProportionSvgHtml,
);
