/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-left-circle',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24,4.07142857 C12.9964286,4.07142857 4.07142857,12.9964286 4.07142857,24 C4.07142857,35.0035714 12.9964286,43.9285714 24,43.9285714 C35.0035714,43.9285714 43.9285714,35.0035714 43.9285714,24 C43.9285714,12.9964286 35.0035714,4.07142857 24,4.07142857 Z M29.5714286,16.9767857 C29.5714286,17.5285714 29.3089286,18.0428571 28.8642857,18.3642857 L21.075,24 L28.8642857,29.6303571 C29.3089286,29.9517857 29.5714286,30.4714286 29.5714286,31.0178571 L29.5714286,33.5303571 C29.5714286,33.8785714 29.175,34.0821429 28.8910714,33.8785714 L15.7125,24.3428571 C15.6014134,24.2628132 15.5355846,24.1342421 15.5355846,23.9973214 C15.5355846,23.8604008 15.6014134,23.7318297 15.7125,23.6517857 L28.8910714,14.1160714 C29.175,13.9125 29.5714286,14.1160714 29.5714286,14.4642857 L29.5714286,16.9767857 Z"
        fill={props.colors[1]}
      />
      <path
        d="M24,0 C10.7464286,0 0,10.7464286 0,24 C0,37.2535714 10.7464286,48 24,48 C37.2535714,48 48,37.2535714 48,24 C48,10.7464286 37.2535714,0 24,0 Z M24,43.9285714 C12.9964286,43.9285714 4.07142857,35.0035714 4.07142857,24 C4.07142857,12.9964286 12.9964286,4.07142857 24,4.07142857 C35.0035714,4.07142857 43.9285714,12.9964286 43.9285714,24 C43.9285714,35.0035714 35.0035714,43.9285714 24,43.9285714 Z"
        fill={props.colors[0]}
      />
      <path
        d="M28.8910714,14.1160714 L15.7125,23.6517857 C15.6014134,23.7318297 15.5355846,23.8604008 15.5355846,23.9973214 C15.5355846,24.1342421 15.6014134,24.2628132 15.7125,24.3428571 L28.8910714,33.8785714 C29.175,34.0821429 29.5714286,33.8785714 29.5714286,33.5303571 L29.5714286,31.0178571 C29.5714286,30.4714286 29.3089286,29.9517857 28.8642857,29.6303571 L21.075,24 L28.8642857,18.3642857 C29.3089286,18.0428571 29.5714286,17.5285714 29.5714286,16.9767857 L29.5714286,14.4642857 C29.5714286,14.1160714 29.175,13.9125 28.8910714,14.1160714 Z"
        fill={props.colors[2]}
      />
    </svg>
  ),
);