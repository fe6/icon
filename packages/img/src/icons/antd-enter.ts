/**
 * @format
 * @file AntdEnter 回车
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdEnterSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M47.4666441,0 L43.4664745,0 C43.1731287,0 42.9331186,0.240010173 42.9331186,0.53335594 L42.9331186,35.068153 L10.5317452,35.068153 L10.5317452,30.2012801 C10.5317452,29.7545945 10.0117232,29.5012504 9.66504184,29.7812623 L0.204640859,37.2482454 C0.0754714615,37.3493362 0,37.5042386 0,37.6682632 C0,37.8322879 0.0754714615,37.9871903 0.204640859,38.088281 L9.66504184,45.5552642 C10.0183901,45.8352761 10.5317452,45.581932 10.5317452,45.1352464 L10.5317452,40.1350345 L43.7331525,40.1350345 C46.0865856,40.1350345 48,38.22162 48,35.8681869 L48,0.53335594 C48,0.240010173 47.7599898,0 47.4666441,0 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-enter', false, getIconAntdEnterSvgHtml);
