/**
 * @format
 * @file BytedPuzzle byted-puzzle
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPuzzleSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <path d="M0,20 L0,8 L9,8 L9,6 C9,2.6862915 11.6862915,0 15,0 C18.3137085,0 21,2.6862915 21,6 L21,8 L30,8 L30,20 L34,20 C37.3137085,20 40,22.6862915 40,26 C40,29.3137085 37.3137085,32 34,32 L30,32 L30,40 L0,40 L0,32 L4,32 C7.3137085,32 10,29.3137085 10,26 C10,22.6862915 7.3137085,20 4,20 L0,20 Z" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="${props.colors?.[1]}" fill-rule="nonzero"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper('byted-puzzle', false, getIconBytedPuzzleSvgHtml);
