/**
 * @format
 * @file AntdEllipsis ellipsis
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdEllipsisSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M0,4 C0,5.42906246 0.762395656,6.74957057 2,7.46410177 C3.2376043,8.17863297 4.7623957,8.17863297 6,7.46410177 C7.23760434,6.74957057 8,5.42906246 8,4 C8,2.5709377 7.23760434,1.2504296 6,0.535898399 C4.7623957,-0.1786328 3.2376043,-0.1786328 2,0.535898399 C0.762395656,1.2504296 0,2.5709377 0,4 L0,4 Z M20,4.00000008 C20,6.20913908 21.790861,8.00000008 24,8.00000008 C26.209139,8.00000008 28,6.20913908 28,4.00000008 C28,1.79086108 26.209139,8.42936947e-08 24,8.42936947e-08 C21.790861,8.42936947e-08 20,1.79086108 20,4.00000008 Z M40,4.00000008 C40,6.20913908 41.790861,8.00000008 44,8.00000008 C46.209139,8.00000008 48,6.20913908 48,4.00000008 C48,1.79086108 46.209139,8.42936947e-08 44,8.42936947e-08 C41.790861,8.42936947e-08 40,1.79086108 40,4.00000008 Z" fill="${props.colors?.[0]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-ellipsis', false, getIconAntdEllipsisSvgHtml);