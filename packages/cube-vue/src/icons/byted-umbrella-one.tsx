/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-umbrella-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <path
            d="M44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 L44,24 Z"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
          />
          <path
            d="M24,24 L24,38.5536268 C24,41.5677816 26.4858452,44.0112369 29.5,44.0112369 C32.5141548,44.0112369 35,41.5677816 35,38.5536268"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
          />
        </g>
      </g>
    </svg>
  ),
);
