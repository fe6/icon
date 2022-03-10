/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHairClip = IconWrapper(
  'byted-hair-clip',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M38.8474 5.33899C31.8837 6.56687 24.2641 12.2185 21.3138 19.9189C18.0889 28.3361 17.2163 29.2576 13.2837 31.3871C9.50148 33.4351 4.59937 35.0724 4.59937 35.0724"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M9.63794 33.1069C13.8573 30.5678 19.3458 33.1901 21.8033 34.9109C24.2607 36.6316 26.7594 36.55 28.1933 34.5022C29.6273 32.4543 28.8494 30.0784 26.3919 28.3577C24.7536 27.2105 19.2651 24.5882 21.3138 19.9189"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M43.1887 9.59964C32.866 12.1378 28.7693 15.3732 24.7534 27.2105"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M20.9841 34.3373C20.2056 36.0303 18.6895 40.0553 18.853 42.6113"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={props.id + 'vue0'}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
export default BytedHairClip;
