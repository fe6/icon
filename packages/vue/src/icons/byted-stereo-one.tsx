/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedStereoOne = IconWrapper(
  'byted-stereo-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="9"
        y="5"
        width="30"
        height="38"
        rx="2"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M9 18H39"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="24"
        cy="30"
        r="6"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedStereoOne;
