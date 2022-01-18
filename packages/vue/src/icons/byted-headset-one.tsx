/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHeadsetOne = IconWrapper(
  'byted-headset-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"
        fill={props.colors[1]}
      />
      <path
        d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32"
        fill={props.colors[1]}
      />
      <path
        d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedHeadsetOne;
