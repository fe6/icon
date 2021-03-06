/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedDianziqian = IconWrapper(
  'byted-dianziqian',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M33 8L24 13L34 19V29.2143L14 18V29L34 41L43 35.1071V13.8929L33 8Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 35L15 41L5 35L5.00069 14L15 8L24 13"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedDianziqian;
