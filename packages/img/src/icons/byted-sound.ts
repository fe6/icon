/**
 * @format
 * @file BytedSound byted-sound
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSoundSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <rect x="8" y="4" width="32" height="40" rx="2" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <circle cx="24" cy="15" r="5" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="14" cy="10" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="14" cy="38" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="34" cy="10" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="34" cy="38" r="2" fill="${props.colors?.[0]}"/>
  <circle cx="24" cy="32" r="6" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-sound', false, getIconBytedSoundSvgHtml);
