/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFNineKey = IconWrapper(
  'byted-f-nine-key',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M26 29.1237C26.6179 30.8107 28.1078 32 29.8476 32C32.1409 32 34 30.549 34 28V20"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M21 16H14V32"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14 24H21"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFNineKey;
