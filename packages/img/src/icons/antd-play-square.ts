/**
 * @format
 * @file AntdPlaySquare 方角播放
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdPlaySquareSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M46.08,0 L1.92,0 C0.858,0 0,0.858 0,1.92 L0,46.08 C0,47.142 0.858,48 1.92,48 L46.08,48 C47.142,48 48,47.142 48,46.08 L48,1.92 C48,0.858 47.142,0 46.08,0 Z M43.68,43.68 L4.32,43.68 L4.32,4.32 L43.68,4.32 L43.68,43.68 Z" fill="${props.colors?.[0]}"/>
  <path d="M4.32,43.68 L43.68,43.68 L43.68,4.32 L4.32,4.32 L4.32,43.68 Z M18.72,14.598 C18.72,14.034 19.374,13.716 19.818,14.07 L31.782,23.472 C31.9438415,23.5994171 32.0383078,23.7940199 32.0383078,24 C32.0383078,24.2059801 31.9438415,24.4005829 31.782,24.528 L19.818,33.936 C19.374,34.284 18.72,33.972 18.72,33.408 L18.72,14.598 Z" fill="${props.colors?.[1]}"/>
  <path d="M19.818,33.936 L31.782,24.528 C31.9438415,24.4005829 32.0383078,24.2059801 32.0383078,24 C32.0383078,23.7940199 31.9438415,23.5994171 31.782,23.472 L19.818,14.07 C19.374,13.716 18.72,14.034 18.72,14.598 L18.72,33.408 C18.72,33.972 19.374,34.284 19.818,33.936 L19.818,33.936 Z" fill="${props.colors?.[2]}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-play-square',
  false,
  getIconAntdPlaySquareSvgHtml,
);
