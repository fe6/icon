/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'byted-baby-bottle',
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
          transform="translate(8.000000, 4.000000)"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}>
          <rect x="4" y="16" width="24" height="24" />
          <path d="M18,32 L28,32" />
          <path d="M18,24 L28,24" />
          <path d="M0,16 L32,16" />
          <path d="M4,10 L12.4,10 L12.4,3.6 C12.4,2.39814813 13.6,0 16,0 C18.4,0 19.6,2.39814813 19.6,3.6 L19.6,10 L28,10" />
        </g>
      </g>
    </svg>
  ),
);
