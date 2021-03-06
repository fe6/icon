/**
 * @format
 * @file BytedBalance byted-balance
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedBalanceSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M35 25C27.89 22.42 20.11 22.42 13 25L12 14C19 11 29 11 36 14L35 25Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 23L21 18" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M42 39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39L6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M29 23.4553C25.6869 22.9349 22.3131 22.9349 19 23.4553" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-balance', false, getIconBytedBalanceSvgHtml);
