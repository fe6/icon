/**
 * @format
 * @file AntdBackward 返回
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdBackwardSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M22.0210148,0.351924019 L0.466856763,22.7345494 C-0.155618921,23.3750841 -0.155618921,24.6110452 0.466856763,25.2515799 L22.0210148,47.6432269 C22.8234835,48.4732154 24.0009375,47.7244214 24.0009375,46.3802009 L24.0009375,1.60592843 C24.0009375,0.270729489 22.8234835,-0.487086123 22.0210148,0.351924019 L22.0210148,0.351924019 Z M46.0200773,0.351924019 L24.4659193,22.7345494 C24.1673791,23.0557353 23.9980103,23.5157902 24.0009001,23.9975755 C24.0009001,24.4666994 24.1584313,24.9358234 24.4659193,25.2606015 L46.0200773,47.6522485 C46.822546,48.482237 48,47.733443 48,46.3892225 L48,1.60592843 C48,0.270729489 46.822546,-0.487086123 46.0200773,0.351924019 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-backward', false, getIconAntdBackwardSvgHtml);
