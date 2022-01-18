/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedRightSmallDown = IconWrapper(
  'byted-right-small-down',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M32.3535 32.3536L15.3535 15.3536"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
      <path
        d="M32.3535 14.3535V32.3535H14.3535"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedRightSmallDown;
