/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedAddPic = IconWrapper(
  'byted-add-pic',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M38 21V40C38 41.1046 37.1046 42 36 42H8C6.89543 42 6 41.1046 6 40V12C6 10.8954 6.89543 10 8 10H26.3636"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M12 31.0308L18 23L21 26L24.5 20.5L32 31.0308H12Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M34 10H42"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M37.9941 5.79544V13.7954"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedAddPic;
