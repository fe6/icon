/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-connection-arrow',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48">
      <g
        stroke="none"
        stroke-width={props.strokeWidth}
        fill="none"
        fill-rule="evenodd"
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}>
        <g
          transform="translate(4.000000, 3.953742)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <g transform="translate(0.000000, 4.046258)">
            <path d="M36.9898007,0.0264752559 L8.18181818,0.0264752559 C5.45454545,0.0264752559 0,1.550592 0,7.96725867 C0,14.3839253 5.45454545,16 8.18181818,16 L31.9938556,16 C34.7211284,16 40,17.5679494 40,23.9846161 C40,30.4012828 34.7211284,32.0029211 31.9938556,32.0029211 L2.06499237,32.0029211" />
            <polyline points="4.04568993 27.99261 0.0673983189 32.0591365 4.04568993 36" />
          </g>
          <polyline
            transform="translate(36.032050, 4.003695) scale(-1, 1) translate(-36.032050, -4.003695) "
            points="38.0211961 5.32907052e-15 34.0429045 4.06652653 38.0211961 8.00739003"
          />
        </g>
      </g>
    </svg>
  ),
);