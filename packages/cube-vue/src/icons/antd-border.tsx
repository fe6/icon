/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('antd-border', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M46.08,0 L1.92,0 C0.858,0 0,0.858 0,1.92 L0,46.08 C0,47.142 0.858,48 1.92,48 L46.08,48 C47.142,48 48,47.142 48,46.08 L48,1.92 C48,0.858 47.142,0 46.08,0 Z M43.68,43.68 L4.32,43.68 L4.32,4.32 L43.68,4.32 L43.68,43.68 Z"
      fill={props.colors[0]}
    />
  </svg>
));
