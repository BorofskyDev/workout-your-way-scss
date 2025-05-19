import React from 'react'
import clsx from 'clsx'
import styles from './SectionContainer.module.scss'

type SectionContainerProps = {
  id: string
  children: React.ReactNode
  className?: string
}

export default function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section id={id} className={clsx(styles.sectionContainer, className)}>
      {children}
    </section>
  )
}
