/**
 * @format
 * @file BytedCheckCorrect byted-check-correct
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedCheckCorrectSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M42 20V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H30" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}" stroke-linecap="${
    props.strokeLinecap
  }" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M16 20L26 28L41 7" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${
    props.strokeLinejoin
  }"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-check-correct',
  false,
  getIconBytedCheckCorrectSvgHtml,
);
