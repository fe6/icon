/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-rocket', false, (props: ISvgIconProps) => (
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
        <path
          d="M11.7050001,3.89449161 L17,0 L22.2949999,3.89449161 C25.8819274,6.53268984 28,10.7198227 28,15.172478 L28,33 L6,33 L6,15.172478 C6,10.7198227 8.11807256,6.53268984 11.7050001,3.89449161 Z"
          fill={props.colors[1]}
          fill-rule="nonzero"
        />
        <polygon
          stroke-linecap={props.strokeLinecap}
          points="6 13 -2.83106871e-14 19 -2.83106871e-14 27 6 24"
        />
        <polygon
          stroke-linecap={props.strokeLinecap}
          points="28 13 34 19 34 27 28 24"
        />
        <path d="M11,35 L11,38" stroke-linecap={props.strokeLinecap} />
        <path d="M17,35 L17,40" stroke-linecap={props.strokeLinecap} />
        <path d="M23,35 L23,38" stroke-linecap={props.strokeLinecap} />
      </g>
    </g>
  </svg>
));
