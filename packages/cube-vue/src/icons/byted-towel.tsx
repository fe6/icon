/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-towel', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M36 18H4V26H36V18Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M36 12V33C36 34.6569 34.6569 36 33 36H7C5.34315 36 4 34.6569 4 33V7C4 5.34315 5.34315 4 7 4H41C42.6569 4 44 5.34315 44 7V41C44 42.6569 42.6569 44 41 44H15C13.3431 44 12 42.6569 12 41V37"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
