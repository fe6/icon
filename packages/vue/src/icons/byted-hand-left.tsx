/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedHandLeft = IconWrapper(
  'byted-hand-left',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M44 40.9998V18.9998H38V40.9998H44Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 19C30.8948 12.4302 26.7757 8.66342 25.6428 7.69966C23.9433 6.25403 22.0226 6.86106 22.0226 10.4789C22.0226 14.0967 27.2864 16.2441 27.2864 19C27.2898 19.0164 20.529 19.0175 7.00404 19.0033C5.3467 19.0015 4.00175 20.3437 4 22.001C4 22.0021 4 22.0031 4 22.0042C4 23.6633 5.34501 25.0083 7.00417 25.0083H14.0165C15.2234 32.9769 15.8893 37.3099 16.0144 38.0073C16.2019 39.0535 17.199 41 20.068 41C21.9807 41 27.9581 41 38 41V19Z"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedHandLeft;
