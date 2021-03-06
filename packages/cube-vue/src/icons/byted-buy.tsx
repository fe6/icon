/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-buy', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 15H42L40 42H8L6 15Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M16 19V6H32V19"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M16 34H32"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
  </svg>
));
