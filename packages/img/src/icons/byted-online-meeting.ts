/**
 * @format
 * @file BytedOnlineMeeting byted-online-meeting
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedOnlineMeetingSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M44 8H4V38H19L24 43L29 38H44V8Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M12 19V27" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M20 16V30" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M28 21V25" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M36 19V27" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-online-meeting',
  false,
  getIconBytedOnlineMeetingSvgHtml,
);
