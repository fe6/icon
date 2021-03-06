/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-cup', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M8 17.012C8 16.4531 8.45311 16 9.01205 16H32.988C33.5469 16 34 16.4531 34 17.012V31C34 38.1797 28.1797 44 21 44V44C13.8203 44 8 38.1797 8 31V17.012Z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <rect
      x="8"
      y="23"
      width="26"
      height="8"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M21 4V10"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M13 6V8"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M29 6V8"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M34 34C37.866 34 41 30.866 41 27C41 23.134 37.866 20 34 20"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
  </svg>
));
