/**
 * @format
 * @file AntdStepForward 下一步
 * @author 由 fe6 自动生成
 */

import { IIconProps, IconWrapper } from '../runtime';

// 获取 SVG 的 HTML 字符串
export const getIconAntdStepForwardSvgHtml = (props: IIconProps) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${props.size}" height="${props.size}" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
  <path fill="${props.colors?.[0]}" d="M28.5272727,25.1556818 L2.4,45.6797727 C1.42840909,46.4434091 0,45.7547727 0,44.5240909 L0,3.47522727 C0,2.24454545 1.42840909,1.55659091 2.4,2.32022727 L28.5272727,22.8443182 C28.8825342,23.122564 29.0900808,23.5487446 29.0900808,24 C29.0900808,24.4512554 28.8825342,24.877436 28.5272727,25.1556818 M29.7272727,48 L34.0909091,48 C34.3921553,48 34.6363636,47.7557917 34.6363636,47.4545455 L34.6363636,0.545454545 C34.6363636,0.244208318 34.3921553,0 34.0909091,0 L29.7272727,0 C29.4260265,0 29.1818182,0.244208318 29.1818182,0.545454545 L29.1818182,47.4545455 C29.1818182,47.7557917 29.4260265,48 29.7272727,48"/>
</svg>`;

// 默认导出组件
export default IconWrapper(
  'antd-step-forward',
  false,
  getIconAntdStepForwardSvgHtml,
);
