import React from 'react'
import clsx from 'clsx'
import styles from './Heading.module.scss'

type HeadingProps = {
  as?: React.ElementType
  title: string
  variant?:
    | 'page'
    | 'section'
    | 'subsection'
    | 'modal'
    | 'list'
    | 'paragraph'
    | 'small'
  className?: string
}

export default function Heading({
  as: Component = 'h1',
  title,
  variant = 'page',
  className,
}: HeadingProps) {
  return (
    <Component className={clsx(styles.heading, styles[variant], className)}>
      {title}
    </Component>
  )
}
