/**
 * @format
 * @file BytedSplitBranch byted-split-branch
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedSplitBranchSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M44 44V4H24V17L33 26V44H44Z" fill="${props.colors?.[1]}"/>
  <path d="M4 4V44H25V30L16 21V4H4Z" fill="${props.colors?.[1]}"/>
  <path d="M44 44V4H24V17L33 26V44H44Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 4V44H25V30L16 21V4H4Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-split-branch',
  false,
  getIconBytedSplitBranchSvgHtml,
);
