/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRouterOne = IconWrapper(
  'byted-router-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10 24L4 38H44L38 24H10Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 4V24V4Z"
        fill={props.colors[1]}
      />
      <path
        d="M10 4V24"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 4V24V4Z"
        fill={props.colors[1]}
      />
      <path
        d="M38 4V24"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 4V24V4Z"
        fill={props.colors[1]}
      />
      <path
        d="M24 4V24"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M4 38V44H44V38"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedRouterOne;
