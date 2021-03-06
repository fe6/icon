/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedAndroid = IconWrapper(
  'byted-android',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M43.9014 36H4.09888C5.10233 25.8934 13.6294 18 24.0001 18C34.3708 18 42.8979 25.8934 43.9014 36Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14 20L10 13"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M33 20L37 13"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <circle cx="15" cy="29" r="2" fill={props.colors[2]} />
      <circle cx="33" cy="29" r="2" fill={props.colors[2]} />
    </svg>
  ),
);
export default BytedAndroid;
