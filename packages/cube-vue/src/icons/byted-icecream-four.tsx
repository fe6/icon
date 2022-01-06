/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-icecream-four',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}cube-vue0)`}>
        <path
          d="M18.8428 13.7225L32.2778 27.1575L11.6793 40.5001L5.63355 34.4544L18.8428 13.7225Z"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M38.7729 19.5103C37.7123 20.571 37.0133 20.5792 35.9608 20.9409C35.9282 23.7367 35.967 26.5501 32.4192 27.2449L18.6033 13.429C18.6033 13.429 18.594 12.0594 19.9994 11.3434C20.4943 11.1115 21.4978 11.2212 22.0958 11.3185C23.5021 8.29361 25.6314 7.783 27.9988 8.76096C29.1343 7.04328 31.9383 6.31178 34.027 6.98627C36.1157 7.66076 36.0994 9.0586 37.4891 9.74125C38.8789 10.4239 40.2931 9.00968 40.3012 8.31073C40.3094 7.61177 40.1868 6.27475 41.129 6.5172C41.7042 6.67243 42.167 7.23219 42.7246 9.56123C43.0359 10.8686 42.8549 12.8026 41.7378 13.9899C41.0522 14.7185 39.5211 15.0994 38.8219 15.3166C38.8885 15.5071 39.8336 18.4497 38.7729 19.5103Z"
          fill={props.colors[1]}
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M38.8216 15.3163C36.0094 16.7468 33.9207 16.0723 31.8483 13.9999"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={`${props.id}cube-vue0`}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
