/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-cooking-pot',
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
          transform="translate(4.000000, 3.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <path
            d="M6,41 L34,41 L34,17.9473684 C34,11.9013038 27.7319865,7 20,7 C12.2680135,7 6,11.9013038 6,17.9473684 L6,41 Z"
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M34,19.0436777 C34,18.8000534 34,18.434617 34,17.9473684 C34,11.9013038 27.7319865,7 20,7 C12.2680135,7 6,11.9013038 6,17.9473684 C6,18.4331602 6,18.7975039 6,19.0403998 L34,19.0436777 Z"
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <path d="M0,19 L40,19" stroke-linecap={props.strokeLinecap} />
          <path d="M17,1 L23,1" stroke-linecap={props.strokeLinecap} />
        </g>
      </g>
    </svg>
  ),
);
