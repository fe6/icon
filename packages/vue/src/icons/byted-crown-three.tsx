/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCrownThree = IconWrapper(
  'byted-crown-three',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="7"
        cy="18"
        r="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle
        cx="24"
        cy="9"
        r="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle
        cx="41"
        cy="18"
        r="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedCrownThree;
