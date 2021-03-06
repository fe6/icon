/**
 * @format
 * @file BytedGameHandle byted-game-handle
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedGameHandleSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <rect stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero" x="0" y="14" width="40" height="24" rx="12" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
      <path d="M12,22 L12,30" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <path d="M8,26 L16,26" stroke="${props.colors?.[2]}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <polyline stroke="${props.colors?.[0]}" stroke-linecap="${props.strokeLinecap}" points="20 12 20 5.71428571 28 5.71428571 28 2.84272605e-13" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill="none" fill-rule="evenodd"/>
      <circle stroke="${props.colors?.[2]}" fill="${props.colors?.[3]}" fill-rule="nonzero" cx="28" cy="26" r="4" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-game-handle',
  false,
  getIconBytedGameHandleSvgHtml,
);
