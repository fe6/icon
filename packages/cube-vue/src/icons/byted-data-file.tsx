/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-data-file', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M8 44V4H31L40 14.5V44H8Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="15"
      y="28"
      width="6"
      height="7"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M14 35H34"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="21"
      y="23"
      width="6"
      height="12"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="27"
      y="18"
      width="6"
      height="17"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
