import Link from 'next/link'
import clsx from 'clsx'
import styles from './InternalLinkText.module.scss'

type InternalLinkTextProps = {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export default function InternalLinkText({
  href,
  children,
  className,
  ariaLabel,
}: InternalLinkTextProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(styles.internalLinkText, className)}
    >
      {children}
    </Link>
  )
}
