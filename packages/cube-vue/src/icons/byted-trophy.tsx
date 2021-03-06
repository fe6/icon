/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-trophy', false, (props: ISvgIconProps) => (
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
        <path
          d="M20,26 C26.627417,26 32,20.4693999 32,13.6470588 L32,0 L8,0 L8,13.6470588 C8,20.4693999 13.372583,26 20,26 Z"
          fill={props.colors[1]}
          fill-rule="nonzero"
        />
        <path
          d="M8,17 L8,7 L0,7 C0,13.6666667 4,17 8,17 Z"
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M32,17 L32,7 L40,7 C40,13.6666667 36,17 32,17 Z"
          stroke-linecap={props.strokeLinecap}
        />
        <path d="M20,28 L20,32" stroke-linecap={props.strokeLinecap} />
        <polygon
          fill={props.colors[1]}
          fill-rule="nonzero"
          points="11 38 14.690036 32 25.0425158 32 29 38"
        />
      </g>
    </g>
  </svg>
));
