/**
 * @format
 * @file BytedConfig byted-config
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedConfigSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <polygon stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" points="20 1.74860126e-15 14 6 6 6 6 14 1.74860126e-15 20 6 26 6 34 14 34 20 40 26 34 34 34 34 26 40 20 34 14 34 6 26 6" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill-rule="nonzero"/>
      <circle stroke="${props.colors?.[2]}" fill="${props.colors?.[3]}" cx="20" cy="20" r="6" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" fill-rule="nonzero"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-config', false, getIconBytedConfigSvgHtml);
