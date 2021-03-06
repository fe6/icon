/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedShareTwo = IconWrapper(
  'byted-share-two',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M26 4L44 22L26 39V28C12 28 6 43 6 43C6 26 11 15 26 15V4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedShareTwo;
