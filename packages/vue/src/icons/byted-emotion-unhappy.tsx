/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedEmotionUnhappy = IconWrapper(
  'byted-emotion-unhappy',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31 18V19"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M17 18V19"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31 30.9999C31 30.9999 29 26.9999 24 26.9999C19 26.9999 17 30.9999 17 30.9999"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedEmotionUnhappy;
