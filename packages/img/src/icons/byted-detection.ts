/**
 * @format
 * @file BytedDetection byted-detection
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedDetectionSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.45012 34.8493L10.4398 31.5016L10.9532 25.6318L18.9331 18.9359L27.7107 11.5706L30.9026 8.8923C33.9875 6.30375 38.5867 6.70613 41.1753 9.79105C43.7638 12.876 43.3615 17.4752 40.2765 20.0638L37.0847 22.7421L28.3071 30.1073L20.3272 36.8033L14.4598 36.2924L10.473 39.6378C9.14922 40.7486 7.17567 40.5759 6.06492 39.2522C4.95548 37.93 5.12794 35.9587 6.45012 34.8493Z" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M23.4365 9.71768L38.2075 27.321" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M18.5755 29.0001L24.3018 24.0001" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'byted-detection',
  false,
  getIconBytedDetectionSvgHtml,
);
