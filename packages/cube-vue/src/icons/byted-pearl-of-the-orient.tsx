/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-pearl-of-the-orient',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="33"
        r="6"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle
        cx="24"
        cy="13"
        r="3"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M24 40V44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M22 16L20 28"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M26 16L28 28"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M19 37L16 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M29 37L32 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M24 4V10"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
