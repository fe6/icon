/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-cutting', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(6.000000, 5.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <g transform="translate(0.000000, 0.021632)">
          <polyline points="0 4.97836848 32 4.97836848 32 36.9783685" />
          <path
            d="M20.4664367,-6 L20.4664367,39.0238636"
            transform="translate(20.466437, 16.511932) rotate(-135.000000) translate(-20.466437, -16.511932) "
          />
          <polyline
            transform="translate(20.000000, 16.978368) scale(-1, -1) translate(-20.000000, -16.978368) "
            points="4 0.978368479 36 0.978368479 36 32.9783685"
          />
        </g>
      </g>
    </g>
  </svg>
));
