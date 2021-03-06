/**
 * @format
 * @file BytedHandheld byted-handheld
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedHandheldSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <polyline stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" points="42 18 42 44 6 44 6 18 6 18" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    <rect stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" x="6" y="4" width="36" height="14" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M16,27 L16,35" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    <path d="M12,31 L20,31" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    <circle stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" cx="32" cy="31" r="4" stroke-linejoin="${props.strokeLinejoin}"/>
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-handheld',
  false,
  getIconBytedHandheldSvgHtml,
);
