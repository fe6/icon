/**
 * @format
 * @file BytedRiding byted-riding
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRidingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33 14C35.7614 14 38 11.7614 38 9C38 6.23858 35.7614 4 33 4C30.2386 4 28 6.23858 28 9C28 11.7614 30.2386 14 33 14Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2"/>
  <path d="M40.0002 23H32.3702C31.8102 23 31.2702 22.76 30.8902 22.35L25.5502 16.57C24.9002 15.86 23.8402 15.71 23.0202 16.21L15.5702 20.79C14.9402 21.18 14.9402 22.1 15.5702 22.49L23.0302 27.06C23.6202 27.42 23.9902 28.07 23.9902 28.77L24.0002 38" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-miterlimit="2" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="36.5" cy="36.5" r="7.5" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="11.5" cy="36.5" r="7.5" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-riding', false, getIconBytedRidingSvgHtml);
