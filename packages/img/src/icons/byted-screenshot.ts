/**
 * @format
 * @file BytedScreenshot byted-screenshot
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedScreenshotSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
  <g>
    <g transform="translate(0.000000, -0.000000)">
      <rect fill-opacity="0.01" fill="#FFFFFF" x="0" y="0" width="48" height="48" stroke-width="${props.strokeWidth}" stroke="none" fill-rule="evenodd"/>
      <circle stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" cx="10" cy="36" r="6"/>
      <path d="M40.0614849,8 C24,28.4331467 15.8047379,38.6805435 14.2426407,40.2426407 C11.8994949,42.5857864 8.10050506,42.5857864 5.75735931,40.2426407" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
      <circle stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" fill="${props.colors?.[1]}" fill-rule="nonzero" stroke-linejoin="${props.strokeLinejoin}" cx="38" cy="36" r="6"/>
      <path d="M42.2426407,40.2426407 C39.8994949,42.5857864 36.1005051,42.5857864 33.7573593,40.2426407 C32.1952621,38.6805435 24,28.4459921 8.00071241,8" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}" fill="none" fill-rule="evenodd"/>
    </g>;
  </g>;
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-screenshot',
  false,
  getIconBytedScreenshotSvgHtml,
);
