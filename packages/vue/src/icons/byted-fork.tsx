/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFork = IconWrapper(
  'byted-fork',
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
          transform="translate(7.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="30"
            cy="4"
            r="4"
          />
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="4"
            cy="4"
            r="4"
          />
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="17"
            cy="36"
            r="4"
          />
          <path
            d="M4,8 L4,11 C4,18 17,21 17,28 L17,32 L17,28 C17,21 30,18 30,11 L30,8"
            stroke-linecap={props.strokeLinecap}
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedFork;
