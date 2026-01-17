import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects from NeoXten Studios.',
}

export default function Work() {
  return (
    <div className={styles.page}>
      <Container>
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.overline}>Portfolio</span>
          <h1 className={styles.title}>Selected Work</h1>
          <p className={styles.intro}>
            Systems built for precision, automation, and scale.
          </p>
        </header>

        {/* Work Grid */}
        <div className={styles.workGrid}>
          <article className={styles.workCard}>
            <span className={styles.workTag}>Automation</span>
            <h2 className={styles.workTitle}>Enterprise Workflow System</h2>
            <p className={styles.workOutcome}>Reduced manual operations by 80%</p>
            <div className={styles.workMeta}>
              <span>Backend automation</span>
              <span>2024</span>
            </div>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>Content</span>
            <h2 className={styles.workTitle}>Multi-Platform Publishing</h2>
            <p className={styles.workOutcome}>Unified content pipeline across 5 channels</p>
            <div className={styles.workMeta}>
              <span>YouTube · TikTok · Instagram</span>
              <span>2024</span>
            </div>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>AI Integration</span>
            <h2 className={styles.workTitle}>Intelligent Operations Layer</h2>
            <p className={styles.workOutcome}>Automated decision support for key processes</p>
            <div className={styles.workMeta}>
              <span>AI/ML integration</span>
              <span>2025</span>
            </div>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>Digital Operations</span>
            <h2 className={styles.workTitle}>Data Pipeline Infrastructure</h2>
            <p className={styles.workOutcome}>Real-time analytics for operational visibility</p>
            <div className={styles.workMeta}>
              <span>Data engineering</span>
              <span>2025</span>
            </div>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>Automation</span>
            <h2 className={styles.workTitle}>Client Onboarding System</h2>
            <p className={styles.workOutcome}>Reduced onboarding time from days to hours</p>
            <div className={styles.workMeta}>
              <span>Process automation</span>
              <span>2025</span>
            </div>
          </article>

          <article className={styles.workCard}>
            <span className={styles.workTag}>Content</span>
            <h2 className={styles.workTitle}>Brand Asset Pipeline</h2>
            <p className={styles.workOutcome}>Automated asset generation and distribution</p>
            <div className={styles.workMeta}>
              <span>Design systems</span>
              <span>2026</span>
            </div>
          </article>
        </div>

        {/* Note */}
        <p className={styles.workNote}>
          Full portfolio and case studies available on request.
        </p>

        {/* CTA */}
        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>Interested in working together?</h3>
          <Link href="/contact" className={styles.btnPrimary}>
            Get in Touch
          </Link>
        </div>
      </Container>
    </div>
  )
}
