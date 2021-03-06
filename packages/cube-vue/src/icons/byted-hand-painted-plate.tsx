/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-hand-painted-plate',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M18 10H42C43.1046 10 44 10.8954 44 12V38C44 39.1046 43.1046 40 42 40H18"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M4 12C4 10.8954 4.89543 10 6 10H18V40H6C4.89543 40 4 39.1046 4 38V12Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M11 17V21"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M37 16L25 33"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect x="9" y="25" width="4" height="4" rx="2" fill={props.colors[2]} />
      <rect x="9" y="31" width="4" height="4" rx="2" fill={props.colors[2]} />
    </svg>
  ),
);
