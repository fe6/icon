/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedBoots = IconWrapper(
  'byted-boots',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M19 4H35L31 36L32.2361 36.618C33.93 37.465 35 39.1963 35 41.0902V44H10V42L23 36L19 4Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20 12H34"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedBoots;
