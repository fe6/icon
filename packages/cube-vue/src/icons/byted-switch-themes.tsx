/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-switch-themes',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 4V27H43.9933L44 4H23Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M31.0049 43.9998C24.6752 43.9998 20.5595 43.9998 18.6579 43.9998C16.9557 43.9998 14.9159 43.4318 13.5475 41.6126C12.6229 40.3832 12.0049 38.5826 12.0049 35.9998C12.0049 31.7298 12.0049 28.063 12.0049 24.9995"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M4 32.9998L12.0046 24.9995L20.0138 32.9998"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M30 19H37"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M30 12H37"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
