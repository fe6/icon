/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCuttingOne = IconWrapper(
  'byted-cutting-one',
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
            cx="11"
            cy="37"
            r="5"
          />
          <circle
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            fill={props.colors[1]}
            fill-rule="nonzero"
            stroke-linejoin={props.strokeLinejoin}
            cx="37"
            cy="37"
            r="5"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            transform="translate(24.938660, 22.892210) rotate(-150.000000) translate(-24.938660, -22.892210) "
            points="24.9585851 3.80404093 24.9187342 7.98037837 24.9187342 41.9803784"
          />
          <polyline
            stroke={props.colors[0]}
            stroke-width={props.strokeWidth}
            stroke-linecap={props.strokeLinecap}
            transform="translate(23.061077, 22.794133) rotate(-30.000000) translate(-23.061077, -22.794133) "
            points="23.0866842 3.61900443 23.0866842 37.6190044 23.0354696 41.9692624"
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedCuttingOne;
