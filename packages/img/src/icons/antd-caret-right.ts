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
  <path d="M38.3488457,22.7386877 L12.3862665,0.34869034 C11.4181241,-0.483093972 10,0.26687549 10,1.61000262 L10,46.3899974 C10,47.7331245 11.4181241,48.483094 12.3862665,47.6513097 L38.3488457,25.2613123 C39.0919972,24.6204293 39.0919972,23.3795707 38.3488457,22.7386877 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-right',
  false,
  getIconAntdCaretRightSvgHtml,
);
