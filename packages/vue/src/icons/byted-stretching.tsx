/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedStretching = IconWrapper(
  'byted-stretching',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M23 5.99966H8C6.89543 5.99966 6 6.89509 6 7.99966V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V25"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M24 15.9998V23.9998"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M42 5.99951V13.9995"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M32 23.9998H24"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M42 5.99966L24 23.9997"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
        />
        <path
          d="M42 5.99966H34"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
      </g>
      <defs>
        <clipPath id={`${props.id}vue0`}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
export default BytedStretching;
