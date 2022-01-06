/**
 * @format
 * @file BytedFigmaMask byted-figma-mask
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedFigmaMaskSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <circle cx="24" cy="24" r="20" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M14 41.3242C19.978 37.8662 24 31.4027 24 23.9999C24 16.5971 19.978 10.1336 14 6.67554C8.02199 10.1336 4 16.5971 4 23.9999C4 31.4027 8.02199 37.8662 14 41.3242Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-figma-mask',
  false,
  getIconBytedFigmaMaskSvgHtml,
);
