/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-watch-one', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M19 14V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V14"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M29 34V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V34"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <circle
      cx="24"
      cy="24"
      r="11"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M21 25L25 25"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M25 21V25"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
