/**
 * @format
 * @file BytedPartyBalloon byted-party-balloon
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedPartyBalloonSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34 16C35 8 31.1274 4 24.1274 4C17.1274 4 13 9 14 16C15 23 21.2548 28 24.1274 28C27 28 33 24 34 16Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M25 28C23 28.9697 20 31.8889 20 35C20 38.1111 30 36.4444 30 39.5556C30 42.6667 19 44 19 44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-party-balloon',
  false,
  getIconBytedPartyBalloonSvgHtml,
);
