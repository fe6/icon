/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-football', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(4.000000, 4.000000)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <circle cx="20" cy="20" r="20" />
        <g transform="translate(2.000000, 2.000000)">
          <g transform="translate(0.000000, 0.500000)">
            <polyline points="24.0930233 -8.8817842e-16 18.0697674 4.35897436 18.0697674 8.71794872 25.8139535 14.8205128 30.1162791 13.0769231 32.6976744 6.1025641" />
            <polyline points="12.0465116 -8.8817842e-16 18.0697674 4.35897436 18.0697674 8.71794872 10.3255814 14.8205128 6.02325581 13.0769231 3.44186047 6.1025641" />
            <polyline points="1.0658141e-14 15.6923077 6.02325581 13.0769231 10.3255814 14.8205128 12.9069767 24.4102564 10.3255814 27.8974359 2.58139535 27.8974359" />
            <polyline points="10.3255814 34 10.3255814 27.8974359 12.9069767 24.4102564 23.2325581 24.4102564 25.8139535 27.8974359 25.8139535 34" />
            <polyline points="33.5581395 27.8974359 25.8139535 27.8974359 23.2325581 24.4102564 25.8139535 14.8205128 30.1162791 13.0769231 37 16.5641026" />
          </g>
        </g>
      </g>
    </g>
  </svg>
));
