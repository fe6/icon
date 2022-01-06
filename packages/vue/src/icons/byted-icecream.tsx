/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-icecream', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M33 18H15L21 40C21 40 22 43 24 43C26 43 27 40 27 40L33 18Z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <path
      d="M36 18H12C12 10 17 4 24 4C31 4 36 10 36 18Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
