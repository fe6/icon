/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPhonograph = IconWrapper(
  'byted-phonograph',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="3"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle
        cx="24"
        cy="25"
        r="11"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <rect x="22" y="23" width="4" height="4" rx="2" fill={props.colors[2]} />
      <rect x="34" y="34" width="4" height="4" rx="2" fill={props.colors[0]} />
      <path
        d="M28 20L36 12"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedPhonograph;
