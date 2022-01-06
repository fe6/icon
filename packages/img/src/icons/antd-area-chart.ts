/**
 * @format
 * @file AntdAreaChart 区域图表
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdAreaChartSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M47.5,39.5 L4.5,39.5 L4.5,0.5 C4.5,0.225 4.275,0 4,0 L0.5,0 C0.225,0 0,0.225 0,0.5 L0,43.5 C0,43.775 0.225,44 0.5,44 L47.5,44 C47.775,44 48,43.775 48,43.5 L48,40 C48,39.725 47.775,39.5 47.5,39.5 Z M8.99999362,35.5 L42.4999936,35.5 C42.775,35.5 42.9999936,35.275 42.9999936,35 L42.9999936,7.75 C42.9999936,7.3 42.45625,7.08125 42.14375,7.39375 L28.9999936,20.5375 L21.1625,12.7875 C20.9669136,12.5938331 20.6518364,12.5938331 20.45625,12.7875 L8.64375,24.6375 C8.55108273,24.7303329 8.49933263,24.8563332 8.49999362,24.9875 L8.49999362,35 C8.49999362,35.275 8.725,35.5 8.99999362,35.5 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-area-chart',
  false,
  getIconAntdAreaChartSvgHtml,
);
