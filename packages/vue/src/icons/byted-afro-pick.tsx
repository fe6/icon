/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedAfroPick = IconWrapper(
  'byted-afro-pick',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M21 4.37256L4.02944 21.3431L26.6569 43.9705L43.6274 27"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M26.6567 10.0294L9.68618 27"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M32.3137 15.6863L15.3432 32.6568"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M37.9705 21.3431L20.9999 38.3137"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M16.0502 41.8492L20.2928 37.6066L10.3933 27.7071L6.15067 31.9497L8.27199 34.0711L9.6862 38.3137L13.9288 39.7279L16.0502 41.8492Z"
          fill={props.colors[1]}
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
export default BytedAfroPick;
