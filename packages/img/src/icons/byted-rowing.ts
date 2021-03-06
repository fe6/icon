/**
 * @format
 * @file BytedRowing byted-rowing
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRowingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30.02 16C32.7814 16 35.02 13.7614 35.02 11C35.02 8.23858 32.7814 6 30.02 6C27.2586 6 25.02 8.23858 25.02 11C25.02 13.7614 27.2586 16 30.02 16Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2"/>
  <path d="M42 31L35 44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M32.01 40L26 29L9 40L21 20L44 25" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 40H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-rowing', false, getIconBytedRowingSvgHtml);
