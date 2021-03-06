/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedSurveillanceCameras = IconWrapper(
  'byted-surveillance-cameras',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M43 6H23H5"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M23 23V6"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M8.42505 19.5798L40.3006 28.1209L38.5582 30.7598L34.5558 37.9696L32.8134 40.6085L4.80158 33.1028L8.42505 19.5798Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M38.5583 30.7598L42.422 31.7951L40.3515 39.5225L34.5559 37.9696"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedSurveillanceCameras;
