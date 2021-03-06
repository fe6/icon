/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedElectrocardiogram = IconWrapper(
  'byted-electrocardiogram',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd">
        <g>
          <circle
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            cx="24"
            cy="24"
            r="20"
          />
          <polyline
            stroke={props.colors[2]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            stroke-linejoin={props.strokeLinejoin}
            points="11 28.1320956 16.6844708 28.1320956 21.2233858 13 24.8952638 35 29.4483373 24.6175277 32.9127137 28.1320956 37 28.1320956"
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedElectrocardiogram;
