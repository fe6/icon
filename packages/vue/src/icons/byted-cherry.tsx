/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCherry = IconWrapper(
  'byted-cherry',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="14"
        cy="34"
        r="8"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle
        cx="35"
        cy="37"
        r="7"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M37 10C34.3488 10.8116 28.6279 13.0145 25.2791 16.2609C20.2558 21.1304 19 24.5 18 27"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M36.9999 10C35.8833 11.3184 33.7152 14.596 33.0438 18.3892C32.0367 24.0789 33 27.5 33.9999 30"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M30 4L44 16"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedCherry;
