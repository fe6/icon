/**
 * @format
 * @file BytedProportionalScaling byted-proportional-scaling
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedProportionalScalingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}"/>
    <path d="M19 40L32 18" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
    <path d="M32 40L38 29" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-proportional-scaling',
  false,
  getIconBytedProportionalScalingSvgHtml,
);
