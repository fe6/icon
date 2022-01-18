/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedScan = IconWrapper(
  'byted-scan',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M7 24L41 24"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M24 7L24 41"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <rect x="5" y="5" width="4" height="4" fill={props.colors[0]} />
      <rect x="14" y="5" width="4" height="4" fill={props.colors[0]} />
      <rect x="30" y="5" width="4" height="4" fill={props.colors[0]} />
      <rect x="39" y="5" width="4" height="4" fill={props.colors[0]} />
      <rect x="39" y="14" width="4" height="4" fill={props.colors[0]} />
      <rect x="5" y="14" width="4" height="4" fill={props.colors[0]} />
      <rect x="5" y="39" width="4" height="4" fill={props.colors[0]} />
      <rect x="14" y="39" width="4" height="4" fill={props.colors[0]} />
      <rect x="30" y="39" width="4" height="4" fill={props.colors[0]} />
      <rect x="39" y="39" width="4" height="4" fill={props.colors[0]} />
      <rect x="39" y="30" width="4" height="4" fill={props.colors[0]} />
      <rect x="5" y="30" width="4" height="4" fill={props.colors[0]} />
    </svg>
  ),
);
export default BytedScan;
