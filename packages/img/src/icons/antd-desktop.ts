/**
 * @format
 * @file AntdDesktop desktop
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdDesktopSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M46.2857143,0 L1.71428571,0 C0.766071429,0 0,0.766071429 0,1.71428571 L0,28.2857143 C0,29.2339286 0.766071429,30 1.71428571,30 L22.0714286,30 L22.0714286,36 L12.8571429,36 C12.3857143,36 12,36.3857143 12,36.8571429 L12,39.4285714 C12,39.6642857 12.1928571,39.8571429 12.4285714,39.8571429 L35.5714286,39.8571429 C35.8071429,39.8571429 36,39.6642857 36,39.4285714 L36,36.8571429 C36,36.3857143 35.6142857,36 35.1428571,36 L25.9285714,36 L25.9285714,30 L46.2857143,30 C47.2339286,30 48,29.2339286 48,28.2857143 L48,1.71428571 C48,0.766071429 47.2339286,0 46.2857143,0 Z M44.1428571,26.1428571 L3.85714286,26.1428571 L3.85714286,3.85714286 L44.1428571,3.85714286 L44.1428571,26.1428571 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-desktop', false, getIconAntdDesktopSvgHtml);
