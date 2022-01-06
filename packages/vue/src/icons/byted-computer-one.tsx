/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-computer-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M17 12L31 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="17" cy="21" r="2" fill={props.colors[0]} />
      <circle cx="17" cy="27" r="2" fill={props.colors[0]} />
      <circle cx="17" cy="33" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="21" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="27" r="2" fill={props.colors[0]} />
      <circle cx="24" cy="33" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="21" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="27" r="2" fill={props.colors[0]} />
      <circle cx="31" cy="33" r="2" fill={props.colors[0]} />
    </svg>
  ),
);
