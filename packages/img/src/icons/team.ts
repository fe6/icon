/**
 * @format
 * @file Team 团队
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconTeamSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
  <path d="M43.9999 42V40.8C43.9999 36.3196 43.9999 34.0794 43.128 32.3681C42.361 30.8628 41.1371 29.6389 39.6318 28.8719" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}" stroke-linejoin="${props.strokeLinejoin}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('team', false, getIconTeamSvgHtml);
