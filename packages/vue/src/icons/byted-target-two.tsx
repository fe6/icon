/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTargetTwo = IconWrapper(
  'byted-target-two',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 41C33.39 41 41 33.39 41 24C41 14.61 33.39 7 24 7C14.61 7 7 14.61 7 24C7 33.39 14.61 41 24 41Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 24H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 4V44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTargetTwo;
