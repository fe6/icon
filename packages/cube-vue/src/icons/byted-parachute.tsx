/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-parachute', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 4.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <path
          d="M12.7272727,20 C15.1515152,17.5757576 17.5757576,16.3636364 20,16.3636364 C22.4242424,16.3636364 24.8484848,17.5757576 27.2727273,20 C30.1010101,17.5757576 32.2222222,16.3636364 33.6363636,16.3636364 C35.0505051,16.3636364 37.1717172,17.5757576 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C2.82828283,17.5757576 4.94949495,16.3636364 6.36363636,16.3636364 C7.77777778,16.3636364 9.8989899,17.5757576 12.7272727,20 Z"
          fill={props.colors[1]}
          fill-rule="nonzero"
        />
        <polyline
          stroke-linecap={props.strokeLinecap}
          points="0 20 20 40 12.7272727 20"
        />
        <polyline
          stroke-linecap={props.strokeLinecap}
          points="27.2727273 20 20 40 40 20"
        />
      </g>
    </g>
  </svg>
));
