/**
 * @format
 * @file AntdForward 前进
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdForwardSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M47.5331432,18.8958605 L25.9789852,0.289087316 C25.1765165,-0.400885732 23.9990625,0.221589953 23.9990625,1.3390463 L23.9990625,38.5600924 C23.9990625,39.6775487 25.1765165,40.3000244 25.9789852,39.6100513 L47.5331432,20.9957785 C48.1556189,20.4557996 48.1556189,19.4358394 47.5331432,18.8958605 Z M23.5340807,18.8958605 L1.97992266,0.289087316 C1.17745401,-0.400885732 0,0.221589953 0,1.3390463 L0,38.5600924 C0,39.6775487 1.17745401,40.3000244 1.97992266,39.6100513 L23.5340807,20.9957785 C23.8415687,20.725789 23.9990625,20.3358042 23.9990625,19.9458195 C23.9990625,19.5558347 23.8415687,19.1658499 23.5340807,18.8958605 L23.5340807,18.8958605 Z"/>
</svg>`;

// 默认导出组件
export default IconWrapper('antd-forward', false, getIconAntdForwardSvgHtml);
