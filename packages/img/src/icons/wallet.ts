/**
 * @format
 * @file Wallet 钱包
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconWalletSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="13" width="38" height="26" rx="2" fill="${props.colors[1]}" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <rect x="25" y="20" width="18" height="11" stroke="${props.colors[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M43 18L43 33" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M32 13C32 8 28.5 7 27 7C23.6667 7 16.1 7 12.5 7C8.9 7 8 9.86567 8 11.2985V13" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="33.5" cy="25.5" r="1.5" fill="${props.colors[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('wallet', false, getIconWalletSvgHtml);
