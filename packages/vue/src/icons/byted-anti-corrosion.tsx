/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-anti-corrosion',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 41.9959C37.3333 42.0988 44 41.0073 44 38.7214C44 35.2927 28.4142 18.0026 24 18.0026C19.5858 18.0026 4 35.651 4 38.7214C4 40.7684 10.6667 41.8599 24 41.9959Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M21.0601 29.6613L17.4404 34.0002"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M24.5 11.0001C25.8807 11.0001 27 9.88085 27 8.50014C27 7.11943 25.8807 6.00014 24.5 6.00014C23.1193 6.00014 22 7.11943 22 8.50014C22 9.88085 23.1193 11.0001 24.5 11.0001Z"
        fill={props.colors[0]}
      />
      <path
        d="M34 16.0001C35.1046 16.0001 36 15.1047 36 14.0001C36 12.8956 35.1046 12.0001 34 12.0001C32.8954 12.0001 32 12.8956 32 14.0001C32 15.1047 32.8954 16.0001 34 16.0001Z"
        fill={props.colors[0]}
      />
      <path
        d="M12 21.0001C13.1046 21.0001 14 20.1047 14 19.0001C14 17.8956 13.1046 17.0001 12 17.0001C10.8954 17.0001 10 17.8956 10 19.0001C10 20.1047 10.8954 21.0001 12 21.0001Z"
        fill={props.colors[0]}
      />
      <path
        d="M17.5 15.0001C18.3284 15.0001 19 14.3286 19 13.5001C19 12.6717 18.3284 12.0001 17.5 12.0001C16.6716 12.0001 16 12.6717 16 13.5001C16 14.3286 16.6716 15.0001 17.5 15.0001Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
