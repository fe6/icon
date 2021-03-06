/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedIdCard = IconWrapper(
  'byted-id-card',
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
          transform="translate(4.000000, 8.000000)"
          stroke-width={props.strokeWidth}>
          <rect
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
            x="0"
            y="0"
            width="40"
            height="32"
            rx="2"
          />
          <rect
            stroke={props.colors[2]}
            fill={props.colors[3]}
            fill-rule="nonzero"
            x="24"
            y="8"
            width="8"
            height="8"
          />
          <path
            d="M8,24 L32,24"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M8,8 L14,8"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M8,16 L14,16"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedIdCard;
