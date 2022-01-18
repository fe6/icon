/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const BytedCocktail = IconWrapper(
  'byted-cocktail',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <g clip-path={`url(#${props.id}vue0)`}>
        <path
          d="M35.8 13H32L21 32L9.8 13H6"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M25.7509 25.5961C31.3517 28.7465 38.446 26.7601 41.5964 21.1593C44.7469 15.5585 42.7605 8.46426 37.1597 5.31381C31.5589 2.16336 24.4646 4.14976 21.3142 9.75056"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
        />
        <path
          d="M26 44H16"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M21 44L21 32"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
        <path
          d="M12 16C12 16 14 14 17 14C20 14 22 17 25 17C28 17 30 16 30 16"
          stroke={props.colors[0]}
          stroke-width={props.strokeWidth}
          stroke-linecap={props.strokeLinecap}
          stroke-linejoin={props.strokeLinejoin}
        />
      </g>
      <defs>
        <clipPath id={`${props.id}vue0`}>
          <rect width="48" height="48" fill={props.colors[2]} />
        </clipPath>
      </defs>
    </svg>
  ),
);
export default BytedCocktail;
