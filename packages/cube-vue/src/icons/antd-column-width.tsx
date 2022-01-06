/** @format */

import { ISvgIconProps, IconWrapper } from '../runtime';

export default IconWrapper(
  'antd-column-width',
  false,
  (props: ISvgIconProps) => (
    <svg width={props.size} height={props.size} viewBox="0 0 48 48" fill="none">
      <path
        fill={props.colors[0]}
        d="M4.08,0 L0.48,0 C0.216,0 0,0.216 0,0.48 L0,39.84 C0,40.104 0.216,40.32 0.48,40.32 L4.08,40.32 C4.344,40.32 4.56,40.104 4.56,39.84 L4.56,0.48 C4.56,0.216 4.344,0 4.08,0 Z M47.52,0 L43.92,0 C43.656,0 43.44,0.216 43.44,0.48 L43.44,39.84 C43.44,40.104 43.656,40.32 43.92,40.32 L47.52,40.32 C47.784,40.32 48,40.104 48,39.84 L48,0.48 C48,0.216 47.784,0 47.52,0 Z M40.398,19.698 L32.742,13.656 C32.6112923,13.5531831 32.43331,13.534139 32.2838076,13.6069735 C32.1343052,13.679808 32.0395995,13.8317001 32.04,13.998 L32.04,18 L15.96,18 L15.96,14.232 C15.96,13.872 15.54,13.668 15.258,13.89 L7.602,19.938 C7.49700607,20.019123 7.43552663,20.1443174 7.43552663,20.277 C7.43552663,20.4096826 7.49700607,20.534877 7.602,20.616 L15.252,26.664 C15.534,26.886 15.954,26.688 15.954,26.322 L15.954,22.32 L32.034,22.32 L32.034,26.088 C32.034,26.448 32.454,26.652 32.736,26.43 L40.386,20.382 C40.614,20.208 40.614,19.872 40.398,19.698 L40.398,19.698 Z"
      />
    </svg>
  ),
);
