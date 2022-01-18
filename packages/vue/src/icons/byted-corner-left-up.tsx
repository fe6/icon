/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCornerLeftUp = IconWrapper(
  'byted-corner-left-up',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M12 16L20 8L28 16"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M36 40H23C21.3431 40 20 38.6569 20 37V8"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedCornerLeftUp;
