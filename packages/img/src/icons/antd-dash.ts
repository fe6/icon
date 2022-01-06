/**
 * @format
 * @file AntdDash 虚线
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdDashSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M0,0 L9.6,0 L9.6,4.32 L0,4.32 L0,0 Z M19.2,0 L28.8,0 L28.8,4.32 L19.2,4.32 L19.2,0 Z M38.4,0 L48,0 L48,4.32 L38.4,4.32 L38.4,0 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-dash', false, getIconAntdDashSvgHtml);
