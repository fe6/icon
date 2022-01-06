/**
 * @format
 * @file BytedIpo byted-ipo
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedIpoSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 18.313V7H44V18.313C41.8815 19.068 40.3636 21.1053 40.3636 23.5C40.3636 25.8947 41.8815 27.932 44 28.687V40H4V28.687C6.11853 27.932 7.63636 25.8947 7.63636 23.5C7.63636 21.1053 6.11853 19.068 4 18.313V18.313Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M13 18V29" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M18 18V29" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M18 18H21C22.6569 18 24 19.3431 24 21V21C24 22.6569 22.6569 24 21 24H18V18Z" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <ellipse cx="32" cy="24" rx="3" ry="5" fill="${props.colors?.[3]}" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-ipo', false, getIconBytedIpoSvgHtml);
