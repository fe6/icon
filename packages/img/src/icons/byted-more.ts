/**
 * @format
 * @file BytedMore byted-more
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedMoreSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <circle cx="12" cy="24" r="3" fill="${props.colors?.[0]}"/>
  <circle cx="24" cy="24" r="3" fill="${props.colors?.[0]}"/>
  <circle cx="36" cy="24" r="3" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-more', false, getIconBytedMoreSvgHtml);
