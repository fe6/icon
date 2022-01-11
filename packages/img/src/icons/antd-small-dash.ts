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
  <path fill="${props.colors?.[0]}" d="M0,22 L4.32,22 L4.32,26.32 L0,26.32 L0,22 Z M10.92,22 L15.24,22 L15.24,26.32 L10.92,26.32 L10.92,22 Z M32.76,22 L37.08,22 L37.08,26.32 L32.76,26.32 L32.76,22 Z M43.68,22 L48,22 L48,26.32 L43.68,26.32 L43.68,22 Z M21.84,22 L26.16,22 L26.16,26.32 L21.84,26.32 L21.84,22 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-small-dash',
  false,
  getIconAntdSmallDashSvgHtml,
);
