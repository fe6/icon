/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-oval-love-two',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M23.7839 10.372C18.6739 5.81244 12.6448 4.14705 8.25809 6.67968C2.04029 10.2695 1.47691 20.9343 6.99976 30.5002C10.6308 36.7893 15.9885 41.0376 21 42.19"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M18.2581 17.5002C12.7353 27.066 13.2986 37.7308 19.5164 41.3207C25.7342 44.9105 35.2519 40.066 40.7748 30.5002C46.2976 20.9343 45.7342 10.2695 39.5164 6.67968C33.2986 3.08983 23.7809 7.93434 18.2581 17.5002Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);