import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact NeoXten Studios for partnerships, systems, or infrastructure work.',
}

export default function Contact() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <span className={styles.overline}>Get in Touch</span>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Contact</h1>
        </header>

        <section className={styles.content} aria-label="Contact information">
          <p className={styles.intro}>
            For partnerships, systems, or infrastructure work:
          </p>
          
          <address className={styles.details}>
            <div className={styles.detailGroup}>
              <span className={styles.label}>Email</span>
              <Link 
                href="mailto:neoxtenstudios@gmail.com" 
                className={styles.value}
              >
                neoxtenstudios@gmail.com
              </Link>
            </div>
          </address>
        </section>

        <div className={styles.divider} />

        <section className={styles.note}>
          <p>
            NeoXten Studios — a brand of PLASTYPESA S.R.L. (Bucharest, Romania)
          </p>
        </section>
      </Container>
    </div>
  )
}
