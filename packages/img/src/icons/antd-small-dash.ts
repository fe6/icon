/**
 * @format
 * @file AntdSmallDash 点虚线
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdSmallDashSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M0,0 L4.32,0 L4.32,4.32 L0,4.32 L0,0 Z M10.92,0 L15.24,0 L15.24,4.32 L10.92,4.32 L10.92,0 Z M32.76,0 L37.08,0 L37.08,4.32 L32.76,4.32 L32.76,0 Z M43.68,0 L48,0 L48,4.32 L43.68,4.32 L43.68,0 Z M21.84,0 L26.16,0 L26.16,4.32 L21.84,4.32 L21.84,0 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-small-dash',
  false,
  getIconAntdSmallDashSvgHtml,
);
