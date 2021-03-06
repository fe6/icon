/**
 * @format
 * @file BytedOscillator byted-oscillator
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedOscillatorSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 9V24C7 27.3137 9.68629 30 13 30H35C38.3137 30 41 27.3137 41 24V9" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M7 10C7 6.68629 9.68629 4 13 4H35C38.3137 4 41 6.68629 41 10V10C41 13.3137 38.3137 16 35 16H13C9.68629 16 7 13.3137 7 10V10Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="15" cy="10" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="21" cy="10" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="27" cy="10" r="2" fill="${props.colors?.[2]}"/>
  <circle cx="33" cy="10" r="2" fill="${props.colors?.[2]}"/>
  <path d="M19 30V44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M29 30V44" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-oscillator',
  false,
  getIconBytedOscillatorSvgHtml,
);
