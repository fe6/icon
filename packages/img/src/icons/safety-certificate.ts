/**
 * @format
 * @file SafetyCertificate 信用卡
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconSafetyCertificateSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M48 1H0V49H48V1Z" fill="white" fill-opacity="0.01"/>
  <path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z" fill="${props.colors[1]}" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M15 23L22 30L34 18" stroke="${props.colors[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'safety-certificate',
  false,
  getIconSafetyCertificateSvgHtml,
);
