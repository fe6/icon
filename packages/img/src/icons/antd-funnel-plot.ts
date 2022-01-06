/**
 * @format
 * @file AntdFunnelPlot funnel-plot
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdFunnelPlotSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M18.516,38.64 L29.49,38.64 L29.49,29.76 L18.516,29.76 L18.516,38.64 Z M11.142,13.2 L36.858,13.2 L41.958,4.32 L6.042,4.32 L11.142,13.2 Z M17.934,25.044 L18.438,25.92 L29.556,25.92 L30.06,25.044 L34.656,17.04 L13.344,17.04 L17.934,25.044 Z" fill="${props.colors?.[1]}"/>
  <path d="M46.086,0 L1.914,0 C0.444,0 -0.474,1.602 0.264,2.88 L14.22,27.204 L14.22,41.04 C14.22,42.102 15.072,42.96 16.128,42.96 L31.872,42.96 C32.928,42.96 33.78,42.102 33.78,41.04 L33.78,27.204 L47.742,2.88 C48.474,1.602 47.556,0 46.086,0 Z M29.49,38.64 L18.516,38.64 L18.516,29.76 L29.49,29.76 L29.49,38.64 Z M30.06,25.044 L29.556,25.92 L18.438,25.92 L17.934,25.044 L13.344,17.04 L34.656,17.04 L30.06,25.044 Z M36.858,13.2 L11.142,13.2 L6.042,4.32 L41.958,4.32 L36.858,13.2 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-funnel-plot',
  false,
  getIconAntdFunnelPlotSvgHtml,
);
