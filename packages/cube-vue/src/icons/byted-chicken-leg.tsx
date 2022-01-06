/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-chicken-leg',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}cube-vue0)`}>
        <path
          d="M33.3744 33.8744C37.617 29.6317 34.7886 15.4896 28.4246 9.12563C25.5961 6.29713 17.4645 0.286786 8.62557 9.12556C-0.213326 17.9643 5.79721 26.0962 8.62557 28.9245C14.9896 35.2886 29.1317 38.117 33.3744 33.8744Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M41 41.0001C40.2533 40.2534 36.0222 36.0223 33.9999 34"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
        />
        <circle
          cx="42.1925"
          cy="40.0712"
          r="2.5"
          transform="rotate(135 42.1925 40.0712)"
          fill={props.colors[0]}
        />
        <circle
          cx="40.0712"
          cy="42.1925"
          r="2.5"
          transform="rotate(135 40.0712 42.1925)"
          fill={props.colors[0]}
        />
        <circle cx="17" cy="18" r="2" fill={props.colors[2]} />
        <circle cx="12" cy="21" r="2" fill={props.colors[2]} />
        <circle cx="17" cy="24" r="2" fill={props.colors[2]} />
      </g>
      <defs>
        <clipPath id={`${props.id}cube-vue0`}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
