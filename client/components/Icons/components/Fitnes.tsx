import React, { FC } from 'react'
import { IconProps } from '../Interface'

export const FitnesIcon: FC<IconProps> = ({
  width = 20,
  height = 20,
  color = '#9696A0',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.7025 12.6025L1.9825 11.8925C1.2125 11.1125 1.2125 9.8525 1.9825 9.0725C2.7825 8.2825 4.0425 8.2825 4.8225 9.0725L7.4025 11.6425L11.6425 7.4025L9.0725 4.8225C8.2825 4.0425 8.2825 2.7825 9.0725 1.9825C9.8525 1.2125 11.1125 1.2125 11.8925 1.9825L12.6025 2.7025L18.2625 8.3625L18.9825 9.0725C19.7525 9.8525 19.7525 11.1125 18.9825 11.8925C18.1825 12.6825 16.9225 12.6825 16.1425 11.8925L13.5625 9.3225L9.3225 13.5625L11.8925 16.1425C12.6825 16.9225 12.6825 18.1825 11.8925 18.9825C11.1125 19.7525 9.8525 19.7525 9.0725 18.9825L8.3625 18.2625L2.7025 12.6025ZM1.6425 17.9025L2.7025 16.8425L1.2925 15.4325C0.9025 15.0425 0.9025 14.4125 1.2925 14.0225C1.6825 13.6325 2.3125 13.6325 2.7025 14.0225L6.9425 18.2625C7.3325 18.6525 7.3325 19.2825 6.9425 19.6725C6.5525 20.0625 5.9225 20.0625 5.5325 19.6725L4.1225 18.2625L3.0625 19.3225L1.6425 17.9025ZM17.9025 1.6425L19.3225 3.0625L18.2625 4.1225L19.6725 5.5325C20.0625 5.9225 20.0625 6.5525 19.6725 6.9425C19.2825 7.3425 18.6525 7.3425 18.2625 6.9425L14.0225 2.7025C13.6325 2.3125 13.6325 1.6825 14.0225 1.2925C14.4125 0.9025 15.0425 0.9025 15.4325 1.2925L16.8425 2.7025L17.9025 1.6425Z"
      fill={color}
    />
  </svg>
)
