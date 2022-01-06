/**
 * @format
 * @file AntdCaretRight 三角右
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdCaretRightSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M28.3488457,22.7386877 L2.38626647,0.34869034 C1.41812407,-0.483093972 0,0.26687549 0,1.61000262 L0,46.3899974 C0,47.7331245 1.41812407,48.483094 2.38626647,47.6513097 L28.3488457,25.2613123 C29.0919972,24.6204293 29.0919972,23.3795707 28.3488457,22.7386877 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-right',
  false,
  getIconAntdCaretRightSvgHtml,
);
