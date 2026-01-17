import type { Metadata } from 'next'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact NeoXten Studios for inquiries.',
}

export default function Contact() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className={styles.title}>Contact</h1>
        </header>

        <section className={styles.content} aria-label="Contact information">
          <p className={styles.intro}>Direct inquiries welcome.</p>

          <address className={styles.details}>
            <div className={styles.detailGroup}>
              <span className={styles.label}>Email</span>
              <a 
                href="mailto:neoxtenstudios@gmail.com?subject=Inquiry" 
                className={styles.value}
              >
                neoxtenstudios@gmail.com
              </a>
            </div>

            <div className={styles.detailGroup}>
              <span className={styles.label}>Phone</span>
              <a href="tel:+40793785007" className={styles.value}>
                +40 793 785 007
              </a>
            </div>

            <div className={styles.detailGroup}>
              <span className={styles.label}>Region</span>
              <span className={styles.value}>UK & EU</span>
            </div>
          </address>
        </section>
      </Container>
    </div>
  )
}
