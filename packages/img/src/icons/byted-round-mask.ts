/**
 * @format
 * @file BytedRoundMask byted-round-mask
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRoundMaskSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01"/>
  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9542 35.0457 4 24 4C12.9543 4 4 12.9542 4 24C4 35.0457 12.9543 44 24 44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24.0001 44C32.9553 44 40.5359 38.1142 43.0845 30H4.91565C7.46417 38.1142 15.0448 44 24.0001 44Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-round-mask',
  false,
  getIconBytedRoundMaskSvgHtml,
);
