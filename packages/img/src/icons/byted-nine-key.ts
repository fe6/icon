/**
 * @format
 * @file BytedNineKey byted-nine-key
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedNineKeySvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="6" width="36" height="36" rx="3" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24.5 14C21.4624 14 19 16.4624 19 19.5C19 22.5376 21.4624 25 24.5 25C27.5376 25 30 22.5376 30 19.5C30 16.4624 27.5376 14 24.5 14Z" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}"/>
  <path d="M19 29C19.8184 31.1932 21.5476 33 24.5 33C27.5376 33 30 30.3137 30 27V20" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-nine-key', false, getIconBytedNineKeySvgHtml);
