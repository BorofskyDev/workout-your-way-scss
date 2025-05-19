import Link from 'next/link'
import clsx from 'clsx'
import styles from './InternalLinkButton.module.scss'

type InternalLinkButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export default function InternalLinkButton({
  href,
  children,
  className,
  ariaLabel,
}: InternalLinkButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={clsx(styles.internalLinkButton, className)}
    >
      {children}
    </Link>
  )
}
