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
  <path fill="${props.colors?.[0]}" d="M46.8382732,0 L2.05827848,0 C0.715151352,0 -0.0348181098,1.41812407 0.796966202,2.38626647 L23.1869636,28.3488457 C23.8278466,29.0919972 25.0618872,29.0919972 25.7095881,28.3488457 L48.0995855,2.38626647 C48.9313698,1.41812407 48.1814004,0 46.8382732,0 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-caret-down',
  false,
  getIconAntdCaretDownSvgHtml,
);
