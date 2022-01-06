/**
 * @format
 * @file BytedFind byted-find
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFindSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M4 7.00012H44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M4 23.0001H15" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M4 39.0001H15" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M31.5 34.0001C36.1944 34.0001 40 30.1945 40 25.5001C40 20.8057 36.1944 17.0001 31.5 17.0001C26.8056 17.0001 23 20.8057 23 25.5001C23 30.1945 26.8056 34.0001 31.5 34.0001Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M37 32.0001L44 39.0506" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-find', false, getIconBytedFindSvgHtml);
