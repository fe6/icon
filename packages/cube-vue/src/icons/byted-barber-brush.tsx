/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-barber-brush',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M29.7962 24H16.204C16.204 24 12.2178 31.7083 18.7525 34.8333C22.9347 37.3333 16.204 44 16.204 44H29.7963C29.7963 44 23.0655 36.7083 27.2477 34.8333C33.7825 31.7083 29.7962 24 29.7962 24Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M37.0001 10L30.0001 24H16.0001L9.00012 10C9.00012 10 12.0001 4 23.0001 4C34.0001 4 37.0001 10 37.0001 10Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M25.0001 24L27.0001 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M21.0001 24L19.0001 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
