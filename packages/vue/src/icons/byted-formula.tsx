/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedFormula = IconWrapper(
  'byted-formula',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M40 9L37 6H8L26 24L8 42H37L40 39"
        stroke={props.colors[0]}
        stroke-width={props.strokeWidth}
        stroke-linecap={props.strokeLinecap}
        stroke-linejoin={props.strokeLinejoin}
      />
    </svg>
  ),
);
export default BytedFormula;
