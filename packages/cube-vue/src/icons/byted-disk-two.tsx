/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-disk-two', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <rect
      x="4"
      y="13"
      width="32"
      height="22"
      rx="2"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M4 13H14V35H4V13Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M36 19H44V29H36"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <circle cx="30" cy="21" r="2" fill={props.colors[0]} />
    <circle cx="30" cy="27" r="2" fill={props.colors[0]} />
  </svg>
));
