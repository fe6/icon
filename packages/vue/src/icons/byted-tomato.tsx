/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTomato = IconWrapper(
  'byted-tomato',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 44C35.0457 44 44 36.6127 44 27.5C44 21.058 39.5252 15.7014 33 12.9842L29.5 14.5L30 20L23.5 18L17 20V14.5L14 12.9842C8.02199 15.8371 4 21.3927 4 27.5C4 36.6127 12.9543 44 24 44Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23.5 4L27.3088 9.11672L36 9.90983L29.6628 14.4833L31.5 21L23.5 18L15.5 21L17.3371 14.4833L11 9.90983L19.6911 9.11672L23.5 4Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTomato;
