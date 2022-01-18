/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPeopleSafeOne = IconWrapper(
  'byted-people-safe-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="11"
        r="7"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 41C4 32.1634 12.0589 25 22 25"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M28 29.2C28 28.1333 35 26 35 26C35 26 42 28.1333 42 29.2C42 37.7333 35 42 35 42C35 42 28 37.7333 28 29.2Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedPeopleSafeOne;
