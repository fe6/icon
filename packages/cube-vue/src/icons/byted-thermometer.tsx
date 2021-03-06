/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-thermometer',
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
          transform="translate(14.000000, 6.000000)"
          stroke-width={props.strokeWidth}>
          <path
            d="M4,19.9992676 L4,4 C4,0.686291501 6.6862915,-2 10,-2 C13.3137085,-2 16,0.686291501 16,4 L16,19.9992676 C18.4288934,21.8236803 20,24.7283643 20,28 C20,33.5228475 15.5228475,38 10,38 C4.4771525,38 0,33.5228475 0,28 C0,24.7283643 1.5711066,21.8236803 4,19.9992676 Z"
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <path
            d="M10,11 L10,24"
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
          />
          <circle
            stroke={props.colors[2]}
            fill={props.colors[3]}
            fill-rule="nonzero"
            cx="10"
            cy="28"
            r="4"
          />
        </g>
      </g>
    </svg>
  ),
);
