/**
 * @format
 * @file AntdItalic 倾斜
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdItalicSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M43.3409091,0 L13.8863636,0 C13.5863636,0 13.3409091,0.245454545 13.3409091,0.545454545 L13.3409091,4.90909091 C13.3409091,5.20909091 13.5863636,5.45454545 13.8863636,5.45454545 L26.2409091,5.45454545 L15.6045455,42.5454545 L4.54545455,42.5454545 C4.24545455,42.5454545 4,42.7909091 4,43.0909091 L4,47.4545455 C4,47.7545455 4.24545455,48 4.54545455,48 L34,48 C34.3,48 34.5454545,47.7545455 34.5454545,47.4545455 L34.5454545,43.0909091 C34.5454545,42.7909091 34.3,42.5454545 34,42.5454545 L21.2772727,42.5454545 L31.9136364,5.45454545 L43.3409091,5.45454545 C43.6409091,5.45454545 43.8863636,5.20909091 43.8863636,4.90909091 L43.8863636,0.545454545 C43.8863636,0.245454545 43.6409091,0 43.3409091,0 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-italic', false, getIconAntdItalicSvgHtml);
