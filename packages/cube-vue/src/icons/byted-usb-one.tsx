/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-usb-one', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd">
      <g>
        <rect
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          fill={props.colors[1]}
          fill-rule="nonzero"
          stroke-linejoin={props.strokeLinejoin}
          x="6"
          y="21"
          width="36"
          height="21"
        />
        <polyline
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
          points="14 21 14 6 14 6 34 6 34 21"
        />
        <path
          d="M20,12 L20,14"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M28,12 L28,14"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
    </g>
  </svg>
));
