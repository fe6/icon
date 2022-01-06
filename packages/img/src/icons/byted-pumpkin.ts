/**
 * @format
 * @file BytedPumpkin byted-pumpkin
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPumpkinSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="14" width="40" height="26" rx="13" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <ellipse cx="24" cy="27" rx="8" ry="13" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M30 6H27C25.3431 6 24 7.34315 24 9V14" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-pumpkin', false, getIconBytedPumpkinSvgHtml);
