import React, { FC } from 'react'
import { IconProps } from '../Interface'

export const CinemaIcon: FC<IconProps> = ({
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
      d="M16 7H14V5H16V7ZM16 11H14V9H16V11ZM16 15H14V13H16V15ZM6 7H4V5H6V7ZM6 11H4V9H6V11ZM6 15H4V13H6V15ZM16 1V3H14V1H6V3H4V1H2V19H4V17H6V19H14V17H16V19H18V1H16Z"
      fill={color}
    />
  </svg>
)
