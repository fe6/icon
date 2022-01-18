/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedNailPolish = IconWrapper(
  'byted-nail-polish',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M18.8951 5.88906C18.9539 4.82923 19.8305 4 20.892 4H27.108C28.1695 4 29.0461 4.82923 29.1049 5.88906L29.8827 19.8891C29.9464 21.0355 29.034 22 27.8858 22H20.1142C18.966 22 18.0536 21.0355 18.1173 19.8891L18.8951 5.88906Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M11 28C11 24.6863 13.6863 22 17 22H31C34.3137 22 37 24.6863 37 28V41C37 42.6569 35.6569 44 34 44H14C12.3431 44 11 42.6569 11 41V28Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <circle cx="24" cy="33" r="3" fill={props.colors[2]} />
    </svg>
  ),
);
export default BytedNailPolish;
