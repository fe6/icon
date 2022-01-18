/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedReport = IconWrapper(
  'byted-report',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(3.754351, 2.827607)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <path
            d="M32.2456488,32.1723935 L8.24564876,32.1723935 L8.24564876,18.1723935 C8.24564876,11.5449765 13.6182318,6.1723935 20.2456488,6.1723935 C26.8730658,6.1723935 32.2456488,11.5449765 32.2456488,18.1723935 L32.2456488,32.1723935 Z"
            fill={props.colors[1]}
            fill-rule="nonzero"
          />
          <path
            d="M4.24564876,39.1723935 L36.2456488,39.1723935"
            stroke-linecap={props.strokeLinecap}
          />
          <path
            d="M1,9.08742569 L2.51206274,11.8647745"
            stroke-linecap={props.strokeLinecap}
            transform="translate(2.000000, 10.587426) rotate(-43.000000) translate(-2.000000, -10.587426) "
          />
          <path
            d="M10.3594726,1 L9.0448312,3.87605946"
            stroke-linecap={props.strokeLinecap}
            transform="translate(10.021384, 2.500000) rotate(-43.000000) translate(-10.021384, -2.500000) "
          />
          <path
            d="M2.78432782,5.80894292 L7.02438401,5.6608769"
            stroke-linecap={props.strokeLinecap}
            transform="translate(4.681446, 6.068090) scale(-1, 1) rotate(-43.000000) translate(-4.681446, -6.068090) "
          />
        </g>
      </g>
    </svg>
  ),
);
export default BytedReport;
