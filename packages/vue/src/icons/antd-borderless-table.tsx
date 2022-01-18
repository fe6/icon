/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdBorderlessTable = IconWrapper(
  'antd-borderless-table',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M0,15.34 L13.86,15.34 L13.86,19.18 L0,19.18 L0,15.34 Z M33.54,15.34 L48,15.34 L48,19.18 L33.54,19.18 L33.54,15.34 Z M17.7,15.34 L29.7,15.34 L29.7,19.18 L17.7,19.18 L17.7,15.34 Z M17.7,28.78 L29.7,28.78 L29.7,32.62 L17.7,32.62 L17.7,28.78 Z M33.54,28.78 L48,28.78 L48,32.62 L33.54,32.62 L33.54,28.78 Z M0,28.78 L13.86,28.78 L13.86,32.62 L0,32.62 L0,28.78 Z M17.7,19.18 L17.7,4 L13.86,4 L13.86,43.96 L17.7,43.96 L17.7,28.78 L17.7,19.18 Z M33.54,15.34 L33.54,4 L29.7,4 L29.7,43.96 L33.54,43.96 L33.54,19.18 L33.54,15.34 Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default AntdBorderlessTable;
