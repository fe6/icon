/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFigmaResetInstance = IconWrapper(
  'byted-figma-reset-instance',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M44 24L24 4L4 24L24 44L35 33"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M22 24C22 24 34.5 23.5 39.5 28.5C44.5 33.5 39 44 39 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M26 20L22 24L26 28"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFigmaResetInstance;
