/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedKey = IconWrapper(
  'byted-key',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M22.8682 24.298C25.4105 26.7933 26.4138 30.4523 25.4971 33.886C24.5805 37.3198 21.8844 40.0016 18.4325 40.9135C14.9806 41.8253 11.3022 40.8273 8.79375 38.2984C5.02208 34.4138 5.07602 28.2392 8.91499 24.4204C12.754 20.6016 18.9613 20.548 22.8664 24.2998L22.8682 24.298Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23 24L40 7"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M30.3054 16.9L35.7339 22.3L42.0673 16L36.6387 10.6L30.3054 16.9Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedKey;
