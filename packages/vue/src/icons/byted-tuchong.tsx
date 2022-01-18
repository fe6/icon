/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedTuchong = IconWrapper(
  'byted-tuchong',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M5 39H43V28H37V33H11V15H23V9H5V39Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M43 16V22C35 22 29 17 29 9H35C35 13 37 16 43 16Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedTuchong;
