/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-thin', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M33 25H15C13.41 25 11.23 24.77 10 24C6.35 21.69 5.66004 16.63 8.00004 13L14.0001 4C17.9301 12.43 30.04 12.42 34 4L40 13C42.34 16.63 41.64 21.69 38 24C36.77 24.78 34.59 25 33 25Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M12 25L14.52 34.55C15.39 37.93 14.46 41.52 12 44"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M36 25L33.4801 34.58C32.6101 37.96 33.54 41.52 36 44"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M24 42V40"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-miterlimit="2"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
