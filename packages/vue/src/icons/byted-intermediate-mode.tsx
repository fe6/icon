/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedIntermediateMode = IconWrapper(
  'byted-intermediate-mode',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 16C27.9932 16.5 31 20 31 24C31 28 28 31.5 24 31.9549"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedIntermediateMode;
