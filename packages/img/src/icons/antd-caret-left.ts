/**
 * @format
 * @file AntdCaretLeft 三角左
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdCaretLeftSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M36.5199429,0.34869034 L10.5573637,22.7386877 C9.81421211,23.3795707 9.81421211,24.6136114 10.5573637,25.2613123 L36.5199429,47.6513097 C37.4880852,48.483094 38.9062093,47.7331245 38.9062093,46.3899974 L38.9062093,1.61000262 C38.9062093,0.26687549 37.4880852,-0.483093972 36.5199429,0.34869034 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-left',
  false,
  getIconAntdCaretLeftSvgHtml,
);
