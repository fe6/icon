/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('antd-dash', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      fill={props.colors[0]}
      d="M0,0 L9.6,0 L9.6,4.32 L0,4.32 L0,0 Z M19.2,0 L28.8,0 L28.8,4.32 L19.2,4.32 L19.2,0 Z M38.4,0 L48,0 L48,4.32 L38.4,4.32 L38.4,0 Z"
    />
  </svg>
));
