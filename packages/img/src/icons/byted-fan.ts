/**
 * @format
 * @file BytedFan byted-fan
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFanSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M14.0139 27.7553L4.02783 24.5106C5.39825 20.2929 8.06873 16.6173 11.6565 14.0106C15.2443 11.404 19.5653 10 24 10C28.4348 10 32.7557 11.404 36.3435 14.0106C39.9313 16.6173 42.6018 20.2929 43.9722 24.5106L33.9861 27.7553M14.0139 27.7553C14.6991 25.6465 16.0344 23.8087 17.8283 22.5053M14.0139 27.7553L24 31M17.8283 22.5053C19.6222 21.202 21.7826 20.5 24 20.5M17.8283 22.5053L24 31M24 20.5C26.2174 20.5 28.3779 21.202 30.1718 22.5053M24 20.5V31M30.1718 22.5053C31.9657 23.8087 33.3009 25.6465 33.9861 27.7553M30.1718 22.5053L24 31M33.9861 27.7553L24 31M24 31V36" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-fan', false, getIconBytedFanSvgHtml);
