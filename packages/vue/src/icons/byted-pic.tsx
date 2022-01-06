/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-pic', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g transform="translate(5.000000, 8.000000)" stroke={props.colors[0]}>
        <path
          d="M2,0 L36,0 C37.1045695,-2.02906125e-16 38,0.8954305 38,2 L38,30 C38,31.1045695 37.1045695,32 36,32 L2,32 C0.8954305,32 1.3527075e-16,31.1045695 0,30 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <circle
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          cx="9.5"
          cy="8.5"
          r="1.5"
        />
        <path
          d="M10,16 L15,20 L21,13 L38,26 L38,30 C38,31.1045695 37.1045695,32 36,32 L2,32 C0.8954305,32 2.27508946e-13,31.1045695 2.27373675e-13,30 L2.27373675e-13,26 L10,16 Z"
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
        />
      </g>
    </g>
  </svg>
));
