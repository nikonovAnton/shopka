import React, { FC } from 'react'
import style from './button.module.scss'
import classNames from 'classnames'
import { ButtonProps, ButtonType } from './button.interface'

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type = ButtonType.Outline,
  className,
  containerClassName,
  mark,
}) => {
  const buttonClassName = classNames(style.button, style[`button_${type}`], {
    className,
  })
  return (
    <div className={classNames(style.button_container, { containerClassName })}>
      <button className={buttonClassName} onClick={onClick} disabled={disabled}>
        {children}
      </button>

      {mark ? (
        <div className={classNames(style.mark, mark.className)}>
          {mark.text}
        </div>
      ) : null}
    </div>
  )
}
