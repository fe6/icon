/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPaintedScreen = IconWrapper(
  'byted-painted-screen',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="5"
        y="10"
        width="38"
        height="28"
        rx="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M13 24L13 17"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="15"
        y="29"
        width="4"
        height="4"
        rx="2"
        transform="rotate(90 15 29)"
        fill={props.colors[2]}
      />
    </svg>
  ),
);
export default BytedPaintedScreen;
