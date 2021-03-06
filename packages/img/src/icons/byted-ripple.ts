/**
 * @format
 * @file BytedRipple byted-ripple
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRippleSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M4 36C4 36 9 33 14 33C21.2976 33 26.7024 39 34 39C39 39 44 36 44 36" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 24C4 24 9 21 14 21C21.2976 21 26.7024 27 34 27C39 27 44 24 44 24" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 12C4 12 9 9 14 9C21.2976 9 26.7024 15 34 15C39 15 44 12 44 12" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-ripple', false, getIconBytedRippleSvgHtml);
