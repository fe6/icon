/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedOrangeOne = IconWrapper(
  'byted-orange-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M34.1508 34.8492C42.3518 26.6482 42.3518 13.3518 34.1508 5.15076L4.45227 34.8492C12.6533 43.0503 25.9497 43.0503 34.1508 34.8492Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M19.3011 20L34.1504 34.8492"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M19.3018 20V41.2132"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M19.3015 20L39.8076 20.7071"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M39.7545 14.997C41.4194 21.8768 39.5661 29.4341 34.1947 34.8056C28.8232 40.177 21.2659 42.0303 14.3861 40.3654"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M14.3516 24.9497L22.8369 16.4645"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={props.id + 'vue0'}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
export default BytedOrangeOne;
