/**
 * @format
 * @file Qrcode 二维码
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconQrcodeSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M18 6H6V18H18V6Z" fill="none" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M18 30H6V42H18V30Z" fill="none" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M42 30H30V42H42V30Z" fill="none" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M42 6H30V18H42V6Z" fill="none" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M24 6V24" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M24 30V42" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M24 24L6 24" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M42 24H30" stroke="${props.colors[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('qrcode', false, getIconQrcodeSvgHtml);
