/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTorch = IconWrapper(
  'byted-torch',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M27 34H21V44H27V34Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31 34H17L14 26H34L31 34Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M21 14C23 9.39 27 4 27 4C27 4 33.36 15.49 33.36 19.23C33.36 22.97 30.74 26 27 26H19C16.36 26 14.64 23.86 14.64 21.22C14.64 18.58 19 10 19 10C19 10 19.96 12.01 21 14Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTorch;
