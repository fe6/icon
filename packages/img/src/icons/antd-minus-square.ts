/**
 * @format
 * @file AntdMinusSquare 方角减号
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdMinusSquareSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M46.08,0 L1.92,0 C0.858,0 0,0.858 0,1.92 L0,46.08 C0,47.142 0.858,48 1.92,48 L46.08,48 C47.142,48 48,47.142 48,46.08 L48,1.92 C48,0.858 47.142,0 46.08,0 Z M43.68,43.68 L4.32,43.68 L4.32,4.32 L43.68,4.32 L43.68,43.68 Z" fill="${props.colors?.[0]}"/>
  <path d="M4.32,43.68 L43.68,43.68 L43.68,4.32 L4.32,4.32 L4.32,43.68 Z M12.48,22.56 C12.48,22.296 12.696,22.08 12.96,22.08 L35.04,22.08 C35.304,22.08 35.52,22.296 35.52,22.56 L35.52,25.44 C35.52,25.704 35.304,25.92 35.04,25.92 L12.96,25.92 C12.696,25.92 12.48,25.704 12.48,25.44 L12.48,22.56 Z" fill="${props.colors?.[1]}"/>
  <path d="M12.96,25.92 L35.04,25.92 C35.304,25.92 35.52,25.704 35.52,25.44 L35.52,22.56 C35.52,22.296 35.304,22.08 35.04,22.08 L12.96,22.08 C12.696,22.08 12.48,22.296 12.48,22.56 L12.48,25.44 C12.48,25.704 12.696,25.92 12.96,25.92 Z" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-minus-square',
  false,
  getIconAntdMinusSquareSvgHtml,
);