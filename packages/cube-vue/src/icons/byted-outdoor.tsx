/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-outdoor', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 4.000000)"
        fill={props.colors[1]}
        fill-rule="nonzero"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <polygon points="-3.38652717e-14 38 14 6 24 30 28 18 40 38" />
        <circle cx="33" cy="5" r="5" />
      </g>
    </g>
  </svg>
));
