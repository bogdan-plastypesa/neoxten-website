import Link from 'next/link'
import { Logo } from '@/components/Logo'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo size={40} />
        </div>

        <p className={styles.brand}>NeoXten Studios</p>

        <address className={styles.contact}>
          <p>PLASTYPESA S.R.L.</p>
          <p>
            <a href="mailto:neoxtenstudios@gmail.com">neoxtenstudios@gmail.com</a>
          </p>
          <p>
            <a href="tel:+40793785007">+40 793 785 007</a>
          </p>
        </address>

        <nav className={styles.legal} aria-label="Legal navigation">
          <Link href="/legal#privacy">Privacy</Link>
          <span className={styles.separator} aria-hidden="true">·</span>
          <Link href="/legal#terms">Terms</Link>
          <span className={styles.separator} aria-hidden="true">·</span>
          <Link href="/legal#imprint">Imprint</Link>
        </nav>

        <p className={styles.copyright}>
          © {currentYear} NeoXten Studios
        </p>
      </div>
    </footer>
  )
}
