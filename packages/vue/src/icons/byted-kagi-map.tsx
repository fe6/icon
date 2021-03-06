/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedKagiMap = IconWrapper(
  'byted-kagi-map',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M4 42H8V24H15V42H19.9406V6H27.9792V33.0659H34.0203V16.125H40.0687V42H44"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedKagiMap;
