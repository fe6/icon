/**
 * @format
 * @file BytedTeeth byted-teeth
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconBytedTeethSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1172 5H14.0026C18.6687 5.68989 19.9341 8.33825 24.0003 8.33825C28.0664 8.33825 29.3314 5.69005 33.9978 5H34.5003C39.747 5 44.0003 9.25329 44.0003 14.5V15.1259C44.0003 18.0287 40.9091 21.3433 40.0003 24.4829C39.035 27.8174 38.3737 30.5425 38.1796 33.3943C37.7248 40.0751 35.447 43 33.0003 43C29.3465 43 26.1017 28.0251 24.0627 28.0251C22.0237 28.0251 17.9776 43 15.0003 43C13.1832 43 10.8293 41.9254 9.94554 33.3943C9.59391 30 9.00122 27.9407 8.00028 24.4829C7.1205 21.4437 4.15199 17.8111 4.00028 14.5511C3.76597 9.51593 7.65782 5.24419 12.693 5.00988C12.8343 5.00331 12.9757 5.00002 13.1172 5Z" fill="${props.colors?.[1]}" stroke="${props.colors?.[0]}" stroke-width="${props.strokeWidth}"/>
  <path d="M15.4824 12.4634L32.0005 17.7887" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
  <path d="M15.4824 17.7886L32.0005 12.4632" stroke="${props.colors?.[2]}" stroke-width="${props.strokeWidth}" stroke-linecap="${props.strokeLinecap}"/>
</svg>`;

// 默认导出组件
export default IconWrapper('byted-teeth', false, getIconBytedTeethSvgHtml);
