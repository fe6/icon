/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('card-panel', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <rect
      x="6"
      y="6"
      width="36"
      height="36"
      rx="3"
      fill="none"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="13"
      y="13"
      width="8"
      height="8"
      fill="none"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <rect
      x="13"
      y="27"
      width="8"
      height="8"
      fill="none"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M27 28L35 28"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M27 35H35"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M27 13L35 13"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M27 20L35 20"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
