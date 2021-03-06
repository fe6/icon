/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-guide-board',
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
          transform="translate(6.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <path d="M18,0 L18,37" stroke-linecap={props.strokeLinecap} />
          <polygon
            fill={props.colors[1]}
            fill-rule="nonzero"
            points="18 4 33.5454545 4 36 8 33.5454545 12 18 12"
          />
          <polygon
            fill={props.colors[1]}
            fill-rule="nonzero"
            transform="translate(9.000000, 22.000000) scale(-1, 1) translate(-9.000000, -22.000000) "
            points="0 18 15.5454545 18 18 22 15.5454545 26 0 26"
          />
          <path d="M10,38 L26,38" stroke-linecap={props.strokeLinecap} />
        </g>
      </g>
    </svg>
  ),
);
