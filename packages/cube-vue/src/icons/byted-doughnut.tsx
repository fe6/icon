/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-doughnut', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <circle
      cx="24"
      cy="24"
      r="19"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <circle
      cx="24"
      cy="24"
      r="7"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));