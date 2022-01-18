/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFacebookOne = IconWrapper(
  'byted-facebook-one',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11111 46C2.94518 46 2 45.0496 2 43.8773V4.12274C2 2.95038 2.94518 2 4.11111 2H43.8889C45.0548 2 46 2.95038 46 4.12274V43.8773C46 45.0496 45.0548 46 43.8889 46C42.4815 46 29.2222 46 4.11111 46Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38.6615 17.887H34.3074H33.7929C32.4429 17.887 31.3485 18.9814 31.3485 20.3314V25.2218H38.6615L37.5904 32.5526H31.3485V46H23.3065V32.5526H16.6667V25.2218H23.2207L23.3065 18.2634L23.2825 15.7694C23.2487 12.2477 26.0762 9.36546 29.5978 9.33164C29.6182 9.33144 29.6386 9.33134 29.6591 9.33134H38.6615V17.887Z"
        fill={props.colors[0]}
      />
    </svg>
  ),
);
export default BytedFacebookOne;
