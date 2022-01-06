/**
 * @format
 * @file AntdLineChart 线性图表
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdLineChartSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M47.5,39.5 L4.5,39.5 L4.5,0.5 C4.5,0.225 4.275,0 4,0 L0.5,0 C0.225,0 0,0.225 0,0.5 L0,43.5 C0,43.775 0.225,44 0.5,44 L47.5,44 C47.775,44 48,43.775 48,43.5 L48,40 C48,39.725 47.775,39.5 47.5,39.5 Z M11.1125,29.85625 C11.30625,30.05 11.61875,30.05 11.81875,29.85625 L20.4625,21.25625 L28.4375,29.28125 C28.63125,29.475 28.95,29.475 29.14375,29.28125 L46.35625,12.075 C46.55,11.88125 46.55,11.5625 46.35625,11.36875 L43.88125,8.89375 C43.6856636,8.70008307 43.3705864,8.70008307 43.175,8.89375 L28.8,23.2625 L20.8375,15.25 C20.6419136,15.0563331 20.3268364,15.0563331 20.13125,15.25 L8.64375,26.66875 C8.45008307,26.8643364 8.45008307,27.1794136 8.64375,27.375 L11.1125,29.85625 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-line-chart',
  false,
  getIconAntdLineChartSvgHtml,
);
