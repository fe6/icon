/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-signal', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(7.500000, 6.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <path d="M32.5,0 L32.5,36" />
        <path d="M21.5,10 L21.5,36" />
        <path d="M11.5,20 L11.5,36" />
        <path d="M0.5,30 L0.5,36" />
      </g>
    </g>
  </svg>
));
