/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedBabyPants = IconWrapper(
  'byted-baby-pants',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M34 4H14C12 5 9 9 9 19C9 31.5 14 44 17 44C19 44 19 41.5 19 41.5V24C19 19 27 19.5 27 24V35C27 43 34 46 36 44C38 42 34 40 34 37C34 32 38 28 38 15C38 10 35.6667 6 34 4Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M10 12H37"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M10.8033 8C10.0708 9.69577 9.46553 11.9812 9.17883 15"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M38 15C38 12.7719 37.5367 10.7424 36.8755 9"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedBabyPants;
