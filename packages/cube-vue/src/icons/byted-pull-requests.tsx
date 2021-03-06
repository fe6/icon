/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-pull-requests',
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
          transform="translate(7.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="30"
            cy="36"
            r="4"
          />
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="4"
            cy="4"
            r="4"
          />
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="4"
            cy="36"
            r="4"
          />
          <path d="M4,8 L4,32" stroke-linecap={props.strokeLinecap} />
          <path
            d="M17,6 L26,6 C28.209139,6 30,7.790861 30,10 L30,32"
            stroke-linecap={props.strokeLinecap}
          />
          <polyline
            stroke-linecap={props.strokeLinecap}
            transform="translate(20.000000, 6.000000) rotate(180.000000) translate(-20.000000, -6.000000) "
            points="17 0 23 6 17 12"
          />
        </g>
      </g>
    </svg>
  ),
);
