/**
 * @format
 * @file Upload 上传
 * @author 由 fe6 自动生成
 */

import { ISvgIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconUploadSvgHtml = (props: ISvgIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${
    props.size
  }" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <mask id="${`${props.id}6ac256b0`}" mask-units="userSpaceOnUse" x="0" y="0" width="48" height="48" style="mask-type: alpha"/>
  <g mask="${`url(#${props.id}6ac256b0` + `)`}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('upload', false, getIconUploadSvgHtml);
