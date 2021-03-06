/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFigmaMask = IconWrapper(
  'byted-figma-mask',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14 41.3242C19.978 37.8662 24 31.4027 24 23.9999C24 16.5971 19.978 10.1336 14 6.67554C8.02199 10.1336 4 16.5971 4 23.9999C4 31.4027 8.02199 37.8662 14 41.3242Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFigmaMask;
