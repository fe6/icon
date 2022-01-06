/**
 * @format
 * @file BytedStretching byted-stretching
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedStretchingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="${`url(#${props.id}img0)`}">
    <path d="M23 5.99966H8C6.89543 5.99966 6 6.89509 6 7.99966V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V25" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}" stroke-linecap="${
    props.strokeLinecap
  }" stroke-linejoin="${props.strokeLinejoin}"/>
    <path d="M24 15.9998V23.9998" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
    <path d="M42 5.99951V13.9995" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
    <path d="M32 23.9998H24" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
    <path d="M42 5.99966L24 23.9997" stroke="${
      props.colors?.[0]
    }" stroke-width="${props.strokeWidth}"/>
    <path d="M42 5.99966H34" stroke="${props.colors?.[0]}" stroke-width="${
    props.strokeWidth
  }" stroke-linecap="${props.strokeLinecap}"/>
  </g>;
  <defs/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-stretching',
  false,
  getIconBytedStretchingSvgHtml,
);
