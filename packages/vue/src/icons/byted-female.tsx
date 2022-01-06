/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-female', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd">
      <g transform="translate(-6.000000, -2.000000)">
        <g
          transform="translate(28.000000, 28.000000) scale(-1, -1) rotate(45.000000) translate(-28.000000, -28.000000) translate(13.500000, 4.000000)"
          stroke={props.colors[0]}
          stroke-linejoin={props.strokeLinejoin}
          stroke-width={props.strokeWidth}>
          <path
            d="M14.3370491,47 C22.0690356,47 28.3370491,40.7319865 28.3370491,33 C28.3370491,29.1340068 26.7700457,25.6340068 24.236544,23.1005051 C21.7030423,20.5670034 18.2030423,19 14.3370491,19 C6.6050626,19 0.337049096,25.2680135 0.337049096,33 C0.337049096,40.7319865 6.6050626,47 14.3370491,47 Z"
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <path d="M14.5,19 L14.5,1" stroke-linecap={props.strokeLinecap} />
          <path d="M5.5,11 L23.5,11" stroke-linecap={props.strokeLinecap} />
        </g>
      </g>
    </g>
  </svg>
));
