/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedLipstickOne = IconWrapper(
  'byted-lipstick-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M39.4351 5.32227L40.8493 6.73648C42.4114 8.29858 42.4114 10.8312 40.8493 12.3933L33.7782 19.4644L29.5356 15.2218L39.4351 5.32227Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="28.1213"
        y="13.8076"
        width="10"
        height="16"
        transform="rotate(45 28.1213 13.8076)"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect
        x="15.3936"
        y="23.7071"
        width="14"
        height="14"
        transform="rotate(45 15.3936 23.7071)"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedLipstickOne;
