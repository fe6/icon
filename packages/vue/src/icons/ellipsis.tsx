/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('ellipsis', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="64 64 896 896">
    <path
      d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
