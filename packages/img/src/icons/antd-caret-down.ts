/**
 * @format
 * @file AntdCaretDown 三角下
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdCaretDownSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M46.3899973,10 L1.61000262,10 C0.26687549,10 -0.483093972,11.4181241 0.34869034,12.3862665 L22.7386877,38.3488457 C23.3795707,39.0919972 24.6136113,39.0919972 25.2613122,38.3488457 L47.6513096,12.3862665 C48.4830939,11.4181241 47.7331245,10 46.3899973,10 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-down',
  false,
  getIconAntdCaretDownSvgHtml,
);
