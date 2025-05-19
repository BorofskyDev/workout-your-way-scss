import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonVariant = 'primary' | 'cta' | 'form-submit' | 'ghost' | 'danger'

type ButtonProps = {
  type?: ButtonType
  as?: ButtonVariant
  content: string | React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  ariaLabel?: string
}

export default function Button({
  type = 'button',
  as = 'primary',
  content,
  onClick,
  className,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[as], className)}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  )
}
