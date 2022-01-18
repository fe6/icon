/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPeach = IconWrapper(
  'byted-peach',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M10.0772 13.4314C15.0471 7.86993 23.6868 10.3147 27 12C28.6566 11.368 33.1972 10.6426 36.1791 12.6649C39.9065 15.1929 44.6027 21.904 40.2542 31.3837C36.7753 38.9675 27.689 42.1574 24.3758 43C21.8909 41.9467 16.4303 39.8319 10.6066 34.5518C5.32574 29.7638 3.86498 20.3831 10.0772 13.4314Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M27 12C25.0761 12.75 21.2283 14.25 19.1295 18.75C16.8741 23.586 18.6048 27.75 19.1295 30"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M21 4C21.3333 4.16667 23.5 4.5 24 6.5C24.4372 8.24895 23.6667 9.33333 23.5 10.5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M28.4787 11.3284C27.525 11.2954 26.8664 10.4549 27.0625 9.521C27.3328 8.23356 27.9452 6.47669 29.3292 5.39221C30.7133 4.30774 32.5656 4.13338 33.8803 4.17886C34.834 4.21185 35.4926 5.05238 35.2966 5.98629C35.0262 7.27373 34.4139 9.0306 33.0298 10.1151C31.6458 11.1995 29.7935 11.3739 28.4787 11.3284Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
    </svg>
  ),
);
export default BytedPeach;
