/**
 * @format
 * @file AntdDotChart 散点图表
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdDotChartSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M47.5,39.5 L4.5,39.5 L4.5,0.5 C4.5,0.225 4.275,0 4,0 L0.5,0 C0.225,0 0,0.225 0,0.5 L0,43.5 C0,43.775 0.225,44 0.5,44 L47.5,44 C47.775,44 48,43.775 48,43.5 L48,40 C48,39.725 47.775,39.5 47.5,39.5 Z M10,27.75 C10,29.959139 11.790861,31.75 14,31.75 C16.209139,31.75 18,29.959139 18,27.75 C18,25.540861 16.209139,23.75 14,23.75 C11.790861,23.75 10,25.540861 10,27.75 Z M17.375,13.75 C17.375,15.4068542 18.7181458,16.75 20.375,16.75 C22.0318542,16.75 23.375,15.4068542 23.375,13.75 C23.375,12.0931458 22.0318542,10.75 20.375,10.75 C18.7181458,10.75 17.375,12.0931458 17.375,13.75 L17.375,13.75 Z M27.25,28 C27.25,31.3137085 29.9362915,34 33.25,34 C36.5637085,34 39.25,31.3137085 39.25,28 C39.25,24.6862915 36.5637085,22 33.25,22 C29.9362915,22 27.25,24.6862915 27.25,28 Z M36.5,8.375 C36.5,10.3079966 38.0670034,11.875 40,11.875 C41.9329966,11.875 43.5,10.3079966 43.5,8.375 C43.5,6.44200338 41.9329966,4.875 40,4.875 C38.0670034,4.875 36.5,6.44200338 36.5,8.375 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-dot-chart', false, getIconAntdDotChartSvgHtml);
