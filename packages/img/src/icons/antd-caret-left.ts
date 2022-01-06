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
  <path fill="${props.colors?.[0]}" d="M26.5199429,0.34869034 L0.557363668,22.7386877 C-0.185787889,23.3795707 -0.185787889,24.6136114 0.557363668,25.2613123 L26.5199429,47.6513097 C27.4880852,48.483094 28.9062093,47.7331245 28.9062093,46.3899974 L28.9062093,1.61000262 C28.9062093,0.26687549 27.4880852,-0.483093972 26.5199429,0.34869034 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-left',
  false,
  getIconAntdCaretLeftSvgHtml,
);
