/**
 * @format
 * @file BytedRemoteControl byted-remote-control
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedRemoteControlSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <rect x="11" y="4" width="26" height="40" rx="2" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <circle cx="24" cy="34" r="4" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <rect x="18" y="10" width="12" height="8" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M23 24H25" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-remote-control',
  false,
  getIconBytedRemoteControlSvgHtml,
);
