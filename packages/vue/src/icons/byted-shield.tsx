/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedShield = IconWrapper(
  'byted-shield',
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
            d="M6,8.25564385 L24.008642,3 L42,8.25564385 L42,19.0336798 C42,30.3621834 34.7502223,40.4194233 24.0026245,44.0005035 L24.0026245,44.0005035 C13.2520792,40.4194856 6,30.3599802 6,19.0286999 L6,8.25564385 Z"
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedShield;
