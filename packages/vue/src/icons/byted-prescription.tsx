/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedPrescription = IconWrapper(
  'byted-prescription',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 8C8 6.89543 8.89543 6 10 6H27V18H40V40C40 41.1046 39.1046 42 38 42H10C8.89543 42 8 41.1046 8 40V8Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M27 6L40 18"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M27.0244 6V18.0818H39.9996"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M14 30H26"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
      <path
        d="M20 24V36"
        stroke={props.colors[2]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </svg>
  ),
);
export default BytedPrescription;
