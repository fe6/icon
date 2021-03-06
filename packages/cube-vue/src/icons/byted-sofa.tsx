/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-sofa', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 8.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <rect
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="0"
          y="13"
          width="8"
          height="14"
        />
        <rect
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="32"
          y="13"
          width="8"
          height="14"
        />
        <rect
          stroke-linecap={props.strokeLinecap}
          x="8"
          y="19"
          width="24"
          height="8"
        />
        <polyline
          stroke-linecap={props.strokeLinecap}
          points="4 12 4 0 36 0 36 12"
        />
        <path d="M4,28 L4,32" stroke-linecap={props.strokeLinecap} />
        <path d="M36,28 L36,32" stroke-linecap={props.strokeLinecap} />
      </g>
    </g>
  </svg>
));
