/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-slide', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd">
      <g>
        <g
          transform="translate(4.000000, 5.000000)"
          stroke-linejoin={props.strokeLinejoin}
          stroke-width={props.strokeWidth}>
          <rect
            stroke={props.colors[0]}
            fill={props.colors[1]}
            fill-rule="nonzero"
            x="3"
            y="0.5"
            width="34"
            height="28"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
            points="12 36.5 20 28.5 28 36.5"
          />
          <polyline
            stroke={props.colors[2]}
            stroke-linecap={props.strokeLinecap}
            transform="translate(19.950550, 14.097000) rotate(-135.000000) translate(-19.950550, -14.097000) "
            points="23.1048003 3.07144261 23.009533 10.9557885 16.7962996 11.0244674 16.8108301 25.1225569"
          />
          <path
            d="M0,0.5 L40,0.5"
            stroke={props.colors[0]}
            stroke-linecap={props.strokeLinecap}
          />
        </g>
      </g>
    </g>
  </svg>
));
