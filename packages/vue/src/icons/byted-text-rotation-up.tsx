/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTextRotationUp = IconWrapper(
  'byted-text-rotation-up',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M29 35L21 31.3333M29 13L21 16.6667M21 16.6667L17 18.5L5 24L17 29.5L21 31.3333M21 16.6667V31.3333"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M37 42V6L43 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTextRotationUp;
