/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-vigo', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <path
      d="M24 44.125C33.5269 44.125 41.25 36.5094 41.25 27.1152C41.25 24.8089 40.9348 22.6141 40.2603 20.5237C39.8709 19.3169 39.5558 18.7406 39.093 17.6297C38.6302 16.5188 38.0145 15.5808 37.3134 14.6373C36.6123 13.6939 35.2464 11.8389 34.3008 11.4664C34.3008 12.9285 31.4285 18.0347 30.3258 18.2913C29.2231 18.5479 31.1407 12.9224 28.6979 9.07446C26.255 5.22647 22.3053 2.70049 22.3053 4.42961C22.3053 6.15873 21.2123 9.0621 20.1113 10.5015C19.0104 11.9408 17.2251 13.1774 15.9817 13.7582C14.7383 14.339 15.1885 10.8503 14.2551 11.4664C13.3144 12.0874 11.9773 13.8173 11.2742 14.903C8.81281 18.7041 6.75 22.418 6.75 27.1152C6.75 36.5094 14.4731 44.125 24 44.125Z"
      fill={props.colors[1]}
      stroke={props.colors[0]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
    <path
      d="M19.2954 23.7325V32.4698C19.2954 33.5068 20.1361 34.3476 21.1732 34.3476C21.5212 34.3476 21.8623 34.2509 22.1585 34.0684L30.5439 28.9004C30.9854 28.6284 31.1227 28.05 30.8506 27.6085C30.7737 27.4837 30.6687 27.3787 30.5439 27.3018L22.1585 22.1339C21.2756 21.5898 20.1187 21.8644 19.5746 22.7473C19.3921 23.0435 19.2954 23.3846 19.2954 23.7325Z"
      fill={props.colors[3]}
      stroke={props.colors[2]}
      stroke-width={props.strokeWidth}
      stroke-linejoin={props.strokeLinejoin}
    />
  </svg>
));
