/**
 * @format
 * @file BytedOutdoor byted-outdoor
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedOutdoorSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <polygon points="-3.38652717e-14 38 14 6 24 30 28 18 40 38" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero"/>
      <circle cx="33" cy="5" r="5" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-outdoor', false, getIconBytedOutdoorSvgHtml);
