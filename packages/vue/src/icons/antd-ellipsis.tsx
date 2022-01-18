/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdEllipsis = IconWrapper(
  'antd-ellipsis',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M0,24 C0,25.4290625 0.762395656,26.7495706 2,27.4641018 C3.2376043,28.178633 4.7623957,28.178633 6,27.4641018 C7.23760434,26.7495706 8,25.4290625 8,24 C8,22.5709377 7.23760434,21.2504296 6,20.5358984 C4.7623957,19.8213672 3.2376043,19.8213672 2,20.5358984 C0.762395656,21.2504296 0,22.5709377 0,24 L0,24 Z M20,24.0000001 C20,26.2091391 21.790861,28.0000001 24,28.0000001 C26.209139,28.0000001 28,26.2091391 28,24.0000001 C28,21.7908611 26.209139,20.0000001 24,20.0000001 C21.790861,20.0000001 20,21.7908611 20,24.0000001 Z M40,24.0000001 C40,26.2091391 41.790861,28.0000001 44,28.0000001 C46.209139,28.0000001 48,26.2091391 48,24.0000001 C48,21.7908611 46.209139,20.0000001 44,20.0000001 C41.790861,20.0000001 40,21.7908611 40,24.0000001 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdEllipsis;
