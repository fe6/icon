/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedReverseLens = IconWrapper(
  'byted-reverse-lens',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M13 25V10H19L21 7H27L29 10H35V25H13Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M20 35L24 39L20 43"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M32 38.1679C39.0636 36.6248 45 33.1006 45 29C45 26.7484 43.5116 24.6705 41 22.999M24 39C12.9543 39 3 34.5228 3 29C3 26.7484 4.48836 24.6705 7 22.999"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 20C25.6569 20 27 18.6569 27 17C27 15.3431 25.6569 14 24 14C22.3431 14 21 15.3431 21 17C21 18.6569 22.3431 20 24 20Z"
        fill={props.colors[3]}
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-miterlimit="10"
      />
    </svg>
  ),
);
export default BytedReverseLens;
