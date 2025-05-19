import React from 'react'
import clsx from 'clsx'
import styles from './CenteredPage.module.scss'

type CenteredPageProps = {
  children: React.ReactNode
  className?: string
}

export default function CenteredPage({ children, className }:CenteredPageProps) {
  return <main className={clsx(styles.centeredPage, className)}>{children}</main>
}
