/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRightOne = IconWrapper(
  'byted-right-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M20 12L32 24L20 36V12Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedRightOne;
