export enum ButtonType {
  Outline = 'outline',
  Filled = 'filled',
}

interface MarkProps {
  text: string | number
  className?: string
}

export interface ButtonProps {
  type?: ButtonType
  onClick?: () => void
  className?: string
  containerClassName?: string
  disabled?: boolean
  mark?: MarkProps
}
