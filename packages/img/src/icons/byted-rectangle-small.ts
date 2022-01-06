/**
 * @format
 * @file BytedRectangleSmall byted-rectangle-small
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRectangleSmallSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M36 14H12C10.8954 14 10 14.8954 10 16V32C10 33.1046 10.8954 34 12 34H36C37.1046 34 38 33.1046 38 32V16C38 14.8954 37.1046 14 36 14Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-rectangle-small',
  false,
  getIconBytedRectangleSmallSvgHtml,
);
