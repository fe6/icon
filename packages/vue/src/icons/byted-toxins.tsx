/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedToxins = IconWrapper(
  'byted-toxins',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.9579 44.0001C33.9579 44.0001 33.9824 40.5293 33.9579 39.7601C34.5074 39.4658 35.0408 39.1452 35.5563 38.8001C36.5925 38.1065 37.5566 37.3136 38.435 36.4352C41.8734 32.9968 44 28.2468 44 23.0001C44 12.5067 35.4934 4.00012 25 4.00012C14.5066 4.00012 6 12.5067 6 23.0001C6 28.2468 8.12665 32.9968 11.565 36.4352C12.4434 37.3136 13.4075 38.1065 14.4437 38.8001C14.9592 39.1452 15.4547 39.4658 16.0043 39.7601C16.0043 40.0083 16.0043 41.4216 16.0043 44.0001C27.9733 44.0001 33.9579 44.0001 33.9579 44.0001Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M18 27.0001C20.2091 27.0001 22 25.2093 22 23.0001L18 19.0001C15.7909 19.0001 14 20.791 14 23.0001C14 25.2093 15.7909 27.0001 18 27.0001Z"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M32 27.0001C29.7909 27.0001 28 25.2093 28 23.0001L32 19.0001C34.2091 19.0001 36 20.791 36 23.0001C36 25.2093 34.2091 27.0001 32 27.0001Z"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M22 34.0001L24.9379 31.0001L28 33.8964"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedToxins;
