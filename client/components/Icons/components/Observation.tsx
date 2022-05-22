import React, { FC } from 'react'
import { IconProps } from '../Interface'

export const ObservationIcon: FC<IconProps> = ({
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
      d="M9 4H11V11H9V4ZM7 18C7 18.2652 6.89464 18.5196 6.70711 18.7071C6.51957 18.8946 6.26522 19 6 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13L4 4H8V11C8 11.2652 7.89464 11.5196 7.70711 11.7071C7.51957 11.8946 7.26522 12 7 12V18ZM8 3H5V1H8V3ZM13 18V12C12.7348 12 12.4804 11.8946 12.2929 11.7071C12.1054 11.5196 12 11.2652 12 11V4H16L18 13V18C18 18.2652 17.8946 18.5196 17.7071 18.7071C17.5196 18.8946 17.2652 19 17 19H14C13.7348 19 13.4804 18.8946 13.2929 18.7071C13.1054 18.5196 13 18.2652 13 18ZM12 3V1H15V3H12Z"
      fill={color}
    />
  </svg>
)
