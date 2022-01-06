/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-align-text-center',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(6.000000, 8.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <path d="M30,11 L6,11" />
          <path d="M36,1 L0,1" />
          <path d="M36,21 L0,21" />
          <path d="M30,31 L6,31" />
        </g>
      </g>
    </svg>
  ),
);
