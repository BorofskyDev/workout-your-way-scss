import React from 'react'
import clsx from 'clsx'
import styles from './GenericInput.module.scss'

type InputTypes = 'text' | 'email' | 'password' | 'tel'

type GenericInputProps = {
  id: string
  label: string
  type?: InputTypes
  placeholder?: string
  value?: string
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  className?: string
  textarea?: boolean
  required?: boolean
  srOnlyLabel?: boolean
}

export default function GenericInput({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
  textarea = false,
  required = false,
  srOnlyLabel = false,
}: GenericInputProps) {
  const inputClass = clsx(styles.genericInput__input, className)
  const labelClass = clsx(styles.genericInput__label, srOnlyLabel && 'sr-only')

  return (
    <div className={styles.genericInput}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          required={required}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          required={required}
        />
      )}
    </div>
  )
}
