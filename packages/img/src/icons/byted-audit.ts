/**
 * @format
 * @file BytedAudit byted-audit
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedAuditSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M7.99976 36L8.00437 28.0426C8.00527 27.4906 8.45289 27.0432 9.00495 27.0426C12.3389 27.0426 15.6729 27.0426 19.0069 27.0426C19.9284 27.0426 19.9235 26.2252 19.9235 24.2792C19.9235 22.3332 15.0219 20.6941 15.0219 13.8528C15.0219 7.01151 20.0997 5 24.3198 5C28.5399 5 33.1364 7.01151 33.1364 13.8528C33.1364 20.6941 28.2605 21.7818 28.2605 24.2792C28.2605 26.7765 28.2605 27.0426 29.0411 27.0426C32.3607 27.0426 35.6804 27.0426 39.0001 27.0426C39.5523 27.0426 40.0001 27.4904 40.0001 28.0426V36H7.99976Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M8 42H40" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-audit', false, getIconBytedAuditSvgHtml);
