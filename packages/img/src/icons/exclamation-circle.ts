/**
 * @format
 * @file ExclamationCircle 感叹号
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconExclamationCircleSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24 37C25.3807 37 26.5 35.8807 26.5 34.5C26.5 33.1193 25.3807 32 24 32C22.6193 32 21.5 33.1193 21.5 34.5C21.5 35.8807 22.6193 37 24 37Z" fill="${props.colors?.[2]}"/>
  <path d="M24 12V28" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'exclamation-circle',
  false,
  getIconExclamationCircleSvgHtml,
);
