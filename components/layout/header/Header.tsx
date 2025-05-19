
import styles from './Header.module.scss'
import InternalLinkText from "@/components/ui/links/internal-link-text/InternalLinkText"

export default function Header() {
    return (
        <header className={styles.header}>
            <InternalLinkText href='/'>Workout Your Way</InternalLinkText>
        </header>    
    )
}