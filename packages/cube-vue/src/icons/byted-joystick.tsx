/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-joystick', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 4.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <rect
          fill={props.colors[1]}
          fill-rule="nonzero"
          x="0"
          y="29"
          width="40"
          height="10"
        />
        <rect
          stroke-linecap={props.strokeLinecap}
          x="22"
          y="22"
          width="12"
          height="7"
        />
        <circle
          fill={props.colors[1]}
          fill-rule="nonzero"
          cx="14"
          cy="5"
          r="5"
        />
        <path d="M12,10 L5,29" stroke-linecap={props.strokeLinecap} />
      </g>
    </g>
  </svg>
));
