/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('antd-dash', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      fill={props.colors[0]}
      d="M0,22 L9.6,22 L9.6,26.32 L0,26.32 L0,22 Z M19.2,22 L28.8,22 L28.8,26.32 L19.2,26.32 L19.2,22 Z M38.4,22 L48,22 L48,26.32 L38.4,26.32 L38.4,22 Z"
    />
  </svg>
));
