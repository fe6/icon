/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-subway', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <rect
      x="8"
      y="6"
      width="32"
      height="26"
      rx="2"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <circle cx="14" cy="27" r="2" fill={props.colors[0]} />
    <circle cx="34" cy="27" r="2" fill={props.colors[0]} />
    <rect
      x="14"
      y="12"
      width="20"
      height="10"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M32 32L40 41"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M17 32L8 41"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));