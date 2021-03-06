/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper('byted-road', false, (props: ISvgIconProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 48 48">
    <g
      stroke="none"
      stroke-width={props.strokeWidth}
      fill="none"
      fill-rule="evenodd"
      stroke-linecap={props.strokeLinecap}
      stroke-linejoin={props.strokeLinejoin}>
      <g
        transform="translate(6.000000, 5.091863)"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}>
        <path d="M5,0.908136641 L0,36.9081366" />
        <path
          d="M36.9287415,0.908136641 L31.9643708,36.8633744"
          transform="translate(33.964371, 18.886476) scale(-1, 1) translate(-33.964371, -18.886476) "
        />
        <path d="M18,0.908136641 L18,6.90813664" />
        <path d="M18,29.9081366 L18,36.9081366" />
        <path d="M18,14.9081366 L18,21.9081366" />
      </g>
    </g>
  </svg>
));
