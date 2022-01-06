/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-maslow-pyramids',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 4L15 19.9803H33L24 4Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M24 19.9805L24.0083 44.0001"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M11.3466 25.9746L2 42.0001H17.0046"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M9.10059 30.9951H17.0049"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M36.7481 25.9746L46.0947 42.0001H31.0004"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M39.0947 30.9951H31.1007"
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
