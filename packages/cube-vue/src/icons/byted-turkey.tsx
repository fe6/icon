/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-turkey', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M4 36H44L39 44H9L4 36Z"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M11 30V36H37L37 31C37 25 34 23 34 23C36 20.5 37 17 34 15C31 13 28.5 15 27 17C27 17 11 15 11 30Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M21 24C21 24 20 24.5 19 26C18 27.5 18 29 18 29"
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linecap={props.strokeLinecap}
    />
    <path
      d="M39 9C38.4667 9.64 35.4444 13.2667 34 15"
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
    />
    <circle
      cx="38.3559"
      cy="7.48259"
      r="2.5"
      transform="rotate(35.0717 38.3559 7.48259)"
      fill={props.colors[0]}
    />
    <circle
      cx="40.8112"
      cy="9.20639"
      r="2.5"
      transform="rotate(35.0717 40.8112 9.20639)"
      fill={props.colors[0]}
    />
  </svg>
));
