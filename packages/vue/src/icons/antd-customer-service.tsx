/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdCustomerService = IconWrapper(
  'antd-customer-service',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M35.5,31.5 L43.5,31.5 L43.5,43.5 L35.5,43.5 L35.5,31.5 Z M4.5,31.5 L12.5,31.5 L12.5,43.5 L4.5,43.5 L4.5,31.5 Z"
        fill={props.colors[1]}
      />
      <path
        d="M24,0 C10.74375,0 0,10.74375 0,24 L0,46.5 C0,47.33125 0.66875,48 1.5,48 L13,48 C15.20625,48 17,46.20625 17,44 L17,31 C17,28.79375 15.20625,27 13,27 L4.5,27 L4.5,24 C4.5,13.23125 13.23125,4.5 24,4.5 C34.76875,4.5 43.5,13.23125 43.5,24 L43.5,27 L35,27 C32.79375,27 31,28.79375 31,31 L31,44 C31,46.20625 32.79375,48 35,48 L46.5,48 C47.33125,48 48,47.33125 48,46.5 L48,24 C48,10.74375 37.25625,0 24,0 Z M12.5,31.5 L12.5,43.5 L4.5,43.5 L4.5,31.5 L12.5,31.5 Z M43.5,43.5 L35.5,43.5 L35.5,31.5 L43.5,31.5 L43.5,43.5 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdCustomerService;
