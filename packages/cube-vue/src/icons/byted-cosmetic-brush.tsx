/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-cosmetic-brush',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}cube-vue0)`}>
        <path
          d="M16.1005 25.8284L38.728 6.02943C38.728 6.02943 40.8493 3.90811 42.9706 6.02943C45.0919 8.15075 42.9706 10.2721 42.9706 10.2721L23.1716 32.8995L16.1005 25.8284Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M22.4646 20.8787L28.1215 26.5356"
          stroke={props.colors[2]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M5.49404 30.7782L16.1006 25.8285L23.1717 32.8996L18.222 43.5062C18.222 43.5062 13.2722 44.2133 9.02958 39.9706C4.78694 35.728 5.49404 30.7782 5.49404 30.7782Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M6.90831 36.4351L11.8581 34.3137"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M12.565 42.0919L13.9792 39.2635"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M18.9291 23.3536L21.7575 20.8787L24.586 18.4038"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M30.5962 24.4142L28.1213 27.2427L25.6464 30.0711"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={props.id + 'cube-vue0'}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
