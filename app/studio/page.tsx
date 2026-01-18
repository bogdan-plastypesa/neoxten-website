import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'NeoXten Studios is an intelligence studio building systems for automation, content infrastructure, and digital operations.',
}

export default function Studio() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <span className={styles.overline}>About</span>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Studio</h1>
        </header>

        <section className={styles.section} aria-label="About">
          <p className={styles.lead}>
            NeoXten Studios is an intelligence studio building systems for automation, content infrastructure, and digital operations.
          </p>
          <p className={styles.body}>
            We focus on calm, reliable engineering — clean architecture, strong fundamentals, and production-ready execution.
          </p>
          <p className={styles.body}>
            For collaboration inquiries, reach out at{' '}
            <Link href="mailto:neoxtenstudios@gmail.com" className={styles.link}>
              neoxtenstudios@gmail.com
            </Link>
          </p>
        </section>
      </Container>
    </div>
  )
}
