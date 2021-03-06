/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPlug = IconWrapper(
  'byted-plug',
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
          transform="translate(6.000000, 4.000000)"
          stroke-width={props.strokeWidth}>
          <path
            d="M0,10 L36,10 L36,20 C32,28 26,32 18,32 C10,32 4,28 0,20 L0,10 Z"
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
            points="27 30 26 40 10 40 9 30"
          />
          <path
            d="M16,20 L20,20"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M10,8 L10,0"
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
            transform="translate(10.000000, 4.000000) rotate(180.000000) translate(-10.000000, -4.000000) "
          />
          <path
            d="M26,8 L26,0"
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
            transform="translate(26.000000, 4.000000) rotate(180.000000) translate(-26.000000, -4.000000) "
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedPlug;
