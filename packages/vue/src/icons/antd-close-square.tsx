/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export const AntdCloseSquare = IconWrapper(
  'antd-close-square',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M46.08,0 L1.92,0 C0.858,0 0,0.858 0,1.92 L0,46.08 C0,47.142 0.858,48 1.92,48 L46.08,48 C47.142,48 48,47.142 48,46.08 L48,1.92 C48,0.858 47.142,0 46.08,0 Z M43.68,43.68 L4.32,43.68 L4.32,4.32 L43.68,4.32 L43.68,43.68 Z"
        fill={props.colors[0]}
      />
      <path
        d="M4.32,43.68 L43.68,43.68 L43.68,4.32 L4.32,4.32 L4.32,43.68 Z M14.154,15.246 C14.0332351,15.1039861 14.0062674,14.9046337 14.0849601,14.7356379 C14.1636528,14.5666421 14.3335836,14.4589753 14.52,14.4599927 L18.054,14.4599927 C18.336,14.4599927 18.606,14.586 18.792,14.802 L24,21.012 L29.208,14.802 C29.388,14.586 29.658,14.4599927 29.946,14.4599927 L33.48,14.4599927 C33.888,14.4599927 34.11,14.934 33.846,15.246 L26.508,24 L33.846,32.754 C34.11,33.066 33.888,33.54 33.48,33.54 L29.946,33.54 C29.664,33.54 29.394,33.414 29.208,33.198 L24,26.988 L18.792,33.198 C18.612,33.414 18.342,33.54 18.054,33.54 L14.52,33.54 C14.112,33.54 13.89,33.066 14.154,32.754 L21.492,24 L14.154,15.246 Z"
        fill={props.colors[1]}
      />
      <path
        d="M14.52,33.5400073 L18.054,33.5400073 C18.342,33.5400073 18.612,33.414 18.792,33.198 L24,26.988 L29.208,33.198 C29.394,33.414 29.664,33.5400073 29.946,33.5400073 L33.48,33.5400073 C33.888,33.5400073 34.11,33.066 33.846,32.754 L26.508,24 L33.846,15.246 C34.11,14.934 33.888,14.46 33.48,14.46 L29.946,14.46 C29.658,14.46 29.388,14.586 29.208,14.802 L24,21.012 L18.792,14.802 C18.606,14.586 18.336,14.46 18.054,14.46 L14.52,14.46 C14.112,14.46 13.89,14.934 14.154,15.246 L21.492,24 L14.154,32.754 C14.0332351,32.8960139 14.0062674,33.0953663 14.0849601,33.2643621 C14.1636528,33.4333579 14.3335836,33.5410247 14.52,33.5400073 L14.52,33.5400073 Z"
        fill={props.colors[2]}
      />
    </svg>
  ),
);
export default AntdCloseSquare;
