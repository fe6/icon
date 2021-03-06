/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-red-envelopes',
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
          transform="translate(8.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <rect
            stroke-linecap={props.strokeLinecap}
            x="0"
            y="0"
            width="32"
            height="40"
          />
          <path
            d="M11.7368854,16.7775148 C7.73688539,15.2066736 4,11.7624921 0,6 M32,6 C28,11.7624921 24.319097,15.3206733 20.319097,16.8915145"
            stroke-linecap={props.strokeLinecap}
          />
          <circle
            fill={props.colors[1]}
            fill-rule="nonzero"
            cx="16"
            cy="18.5"
            r="4.5"
          />
        </g>
      </g>
    </svg>
  ),
);
