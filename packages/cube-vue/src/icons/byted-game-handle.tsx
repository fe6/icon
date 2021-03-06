/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-game-handle',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(4.000000, 4.000000)"
          stroke-width={props.strokeWidth}>
          <rect
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
            x="0"
            y="14"
            width="40"
            height="24"
            rx="12"
          />
          <path
            d="M12,22 L12,30"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M8,26 L16,26"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <polyline
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
            points="20 12 20 5.71428571 28 5.71428571 28 2.84272605e-13"
          />
          <circle
            stroke={props.colors[2]}
            fill={props.colors[3]}
            fill-rule="nonzero"
            cx="28"
            cy="26"
            r="4"
          />
        </g>
      </g>
    </svg>
  ),
);
