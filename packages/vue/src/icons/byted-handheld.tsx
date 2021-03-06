/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHandheld = IconWrapper(
  'byted-handheld',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <polyline
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          points="42 18 42 44 6 44 6 18 6 18"
        />
        <rect
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="6"
          y="4"
          width="36"
          height="14"
        />
        <path
          d="M16,27 L16,35"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M12,31 L20,31"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <circle
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
          cx="32"
          cy="31"
          r="4"
        />
      </g>
    </svg>
  ),
);
export default BytedHandheld;
