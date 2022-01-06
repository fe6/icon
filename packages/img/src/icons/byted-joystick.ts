/**
 * @format
 * @file BytedJoystick byted-joystick
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedJoystickSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
    <g transform="translate(4.000000, 4.000000)">
      <rect fill="${props.colors?.[1]}" fill-rule="nonzero" x="0" y="29" width="40" height="10" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <rect stroke-linecap="${props.strokeLinecap}" x="22" y="22" width="12" height="7" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
      <circle fill="${props.colors?.[1]}" fill-rule="nonzero" cx="14" cy="5" r="5" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}"/>
      <path d="M12,10 L5,29" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" stroke-width="${props.strokeWidth}" stroke="${props.colors?.[0]}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-joystick',
  false,
  getIconBytedJoystickSvgHtml,
);
