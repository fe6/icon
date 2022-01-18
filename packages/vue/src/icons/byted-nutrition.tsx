/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedNutrition = IconWrapper(
  'byted-nutrition',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 41.9999C24.8653 41.9999 26.8503 41.9999 29.9551 41.9999C30.0381 39.263 30.4393 37.7581 31.1586 37.4851C38.6685 34.6356 44 27.4338 44 18.9999H4C4 27.2513 9.10319 34.3233 16.3568 37.294C17.1151 37.6046 17.6815 39.1732 18.056 41.9999C21.0857 41.9999 23.067 41.9999 24 41.9999Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14.4434 26.0223C14.803 27.2102 15.2786 28.1909 15.8702 28.9645C16.4484 29.7208 17.1619 30.4222 18.0104 31.0687"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M32.2009 8.01747C30.9409 7.31406 29.5829 6.76772 28.1528 6.40462M22.0507 5.99988C14.9273 6.82248 9.1442 12.0976 7.5 18.9999M40.5 18.9964C39.8296 16.1845 38.4722 13.6429 36.6172 11.5624"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedNutrition;
