import React, { FC } from 'react'
import style from './avatar.module.scss'
import { AvatarProps } from './avatar.interface'

export const Avatar: FC<AvatarProps> = ({ src, width = 50, height = 50 }) => {
  return (
    <div
      className={style.avatar}
      style={{ width, height, backgroundImage: `url(${src})` }}
    />
  )
}
