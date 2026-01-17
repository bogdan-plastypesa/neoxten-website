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
          <span className={styles.overline}>Get in Touch</span>
          <h1 className={styles.title}>Contact</h1>
          <p className={styles.intro}>Direct inquiries welcome.</p>
        </header>

        <section className={styles.content} aria-label="Contact information">
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
              <span className={styles.value}>UK & EU — Global operation</span>
            </div>

            <div className={styles.detailGroup}>
              <span className={styles.label}>Response Time</span>
              <span className={styles.value}>Within 24–48 hours</span>
            </div>
          </address>
        </section>

        <div className={styles.divider} />

        <section className={styles.note}>
          <p>
            For project inquiries, please include a brief description of your needs and timeline.
          </p>
        </section>
      </Container>
    </div>
  )
}
