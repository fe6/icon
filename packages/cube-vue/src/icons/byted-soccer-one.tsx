/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-soccer-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
      />
      <path
        d="M19 46C20.6569 46 22 44.6569 22 43C22 41.3431 20.6569 40 19 40C17.3431 40 16 41.3431 16 43C16 44.6569 17.3431 46 19 46Z"
        fill={props.colors[0]}
      />
      <path
        d="M24.38 18.91L20 27L27.31 33.02C27.62 33.26 27.84 33.59 27.97 33.96L31 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20 27L14.51 34.64C13.97 35.43 12.95 35.73 12.07 35.36L4 32"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M42 24H35C34.64 24 34.28 23.91 33.96 23.73L30.75 21.92C26.74 19.57 22.35 17.96 17.78 17.14L14.56 16.57C14.11 16.49 13.64 16.57 13.24 16.79L7 20"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="2"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
