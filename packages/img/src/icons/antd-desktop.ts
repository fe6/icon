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
  <rect fill="${props.colors?.[1]}" x="3" y="7" width="42" height="24"/>
  <path d="M46.2857143,4 L1.71428571,4 C0.766071429,4 0,4.76607143 0,5.71428571 L0,32.2857143 C0,33.2339286 0.766071429,34 1.71428571,34 L22.0714286,34 L22.0714286,40 L12.8571429,40 C12.3857143,40 12,40.3857143 12,40.8571429 L12,43.4285714 C12,43.6642857 12.1928571,43.8571429 12.4285714,43.8571429 L35.5714286,43.8571429 C35.8071429,43.8571429 36,43.6642857 36,43.4285714 L36,40.8571429 C36,40.3857143 35.6142857,40 35.1428571,40 L25.9285714,40 L25.9285714,34 L46.2857143,34 C47.2339286,34 48,33.2339286 48,32.2857143 L48,5.71428571 C48,4.76607143 47.2339286,4 46.2857143,4 Z M44.1428571,30.1428571 L3.85714286,30.1428571 L3.85714286,7.85714286 L44.1428571,7.85714286 L44.1428571,30.1428571 Z" fill="${props.colors?.[0]}" fill-rule="nonzero"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-desktop', false, getIconAntdDesktopSvgHtml);
