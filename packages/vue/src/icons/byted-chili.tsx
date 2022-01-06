/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-chili', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
    <g clip-path={`url(#${props.id}vue0)`}>
      <path
        d="M21.1676 16.5939C22.8154 10.9872 29.4905 8.66636 34.2611 12.0416V12.0416C38.3864 14.9602 39.0788 20.8076 35.7493 24.609L32.619 28.1829C27.3998 34.1417 20.809 38.7409 13.4154 41.5836L9.85731 42.9516C9.12755 43.2322 8.30584 43.1295 7.66758 42.678V42.678C6.39496 41.7776 6.34303 39.9076 7.56372 38.938L10.3428 36.7305C14.5082 33.4219 17.549 28.9067 19.0489 23.8031L21.1676 16.5939Z"
        fill={props.colors[1]}
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M29.8417 10.6835C30.6939 8.09689 33.4817 6.69083 36.0683 7.54302C38.6549 8.3952 40.061 11.1829 39.2088 13.7696C38.8983 14.7121 38.3308 15.4978 37.6097 16.0747"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
      />
      <path
        d="M42 4L38 8"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
      />
    </g>
    <defs>
      <clipPath id={`${props.id}vue0`}>
        <rect width="48" height="48" fill={props.colors[2]} />
      </clipPath>
    </defs>
  </svg>
));
