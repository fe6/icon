/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedEgg = IconWrapper(
  'byted-egg',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="10"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M44 24C44 26.6325 43.4914 29.1463 42.5671 31.4483C41.6311 33.7794 38.4381 31.5194 35.2214 34.9695C32.0048 38.4196 34.5103 41.2363 32.0169 42.3284C29.5626 43.4035 26.851 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M20 25C20 25 20.2109 26.2109 21 27C21.7891 27.7891 23 28 23 28"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedEgg;
