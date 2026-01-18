import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected systems and infrastructure projects from NeoXten Studios.',
}

export default function Work() {
  return (
    <div className={styles.page}>
      <Container>
        <header className={styles.header}>
          <span className={styles.overline}>Portfolio</span>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Work</h1>
          <p className={styles.intro}>
            Selected systems and infrastructure projects. Full portfolio available on request.
          </p>
        </header>

        <div className={styles.workGrid}>
          <article className={styles.workCard}>
            <span className={styles.workTag}>Automation</span>
            <h2 className={styles.workTitle}>Enterprise Workflow System</h2>
            <p className={styles.workOutcome}>
              Reduced manual operations by up to 80% through automated routing and orchestration.
            </p>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>Content</span>
            <h2 className={styles.workTitle}>Multi-Platform Publishing</h2>
            <p className={styles.workOutcome}>
              Unified content pipeline across channels with consistent scheduling and delivery.
            </p>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>AI Integration</span>
            <h2 className={styles.workTitle}>Intelligent Operations Layer</h2>
            <p className={styles.workOutcome}>
              Automated decision support and monitoring for key processes.
            </p>
          </article>
        </div>

        <p className={styles.workNote}>
          Full portfolio available on request.
        </p>

        <div className={styles.cta}>
          <h3 className="neoxtenHeadline neoxtenHeadline--section">Interested in working together?</h3>
          <Link href="/contact" className={styles.btnPrimary}>
            Get in Touch
          </Link>
        </div>
      </Container>
    </div>
  )
}
