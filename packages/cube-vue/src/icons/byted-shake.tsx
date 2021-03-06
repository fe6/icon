/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-shake', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 6.000000)"
        stroke-width={props.strokeWidth}>
        <polyline
          stroke={props.colors[0]}
          stroke-linecap={props.strokeLinecap}
          points="0 4 4 8.66666667 0 13.3333333 4 18 0 22.6666667 4 27.3333333 0 32"
        />
        <polyline
          stroke={props.colors[0]}
          stroke-linecap={props.strokeLinecap}
          transform="translate(38.000000, 18.000000) scale(-1, 1) translate(-38.000000, -18.000000) "
          points="36 4 40 8.66666667 36 13.3333333 40 18 36 22.6666667 40 27.3333333 36 32"
        />
        <rect
          stroke={props.colors[0]}
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="10"
          y="0"
          width="20"
          height="36"
        />
        <path
          d="M18,29 L22,29"
          stroke={props.colors[2]}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
    </g>
  </svg>
));
