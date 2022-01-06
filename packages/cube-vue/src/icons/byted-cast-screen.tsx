/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-cast-screen',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M21 39C21 30.1634 13.8366 23 5 23"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M13 39C13 34.5817 9.41828 31 5 31"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 41C6.88071 41 8 39.8807 8 38.5C8 37.1193 6.88071 36 5.5 36C4.11929 36 3 37.1193 3 38.5C3 39.8807 4.11929 41 5.5 41Z"
        fill={props.colors[0]}
      />
      <path
        d="M4 16.0566V8H44V40H28.7712"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
