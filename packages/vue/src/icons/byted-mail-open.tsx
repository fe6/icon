/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedMailOpen = IconWrapper(
  'byted-mail-open',
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
          transform="translate(4.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <path
            d="M40,14 L40,35.8181818 C40,37.0231667 39.1045695,38 38,38 L2,38 C0.8954305,38 0,37.0231667 0,35.8181818 L0,14 L20,27 L40,14 Z"
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <polyline
            stroke-linecap={props.strokeLinecap}
            points="-3.55271368e-15 13.7839098 20 -2.48689958e-14 40 13.7839098"
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedMailOpen;
