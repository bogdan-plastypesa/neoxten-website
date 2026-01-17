import type { Metadata } from 'next'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'NeoXten Studios operates at the intersection of intelligence systems and digital infrastructure.',
}

export default function Studio() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        {/* Header */}
        <header className={styles.header}>
          <span className={styles.overline}>Studio</span>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">NeoXten Studios</h1>
        </header>

        {/* Philosophy */}
        <section className={styles.section} aria-label="Philosophy">
          <p className={styles.philosophy}>
            NeoXten Studios operates at the intersection of intelligence systems and digital infrastructure. The studio develops automation frameworks, content platforms, and tools designed for precision and longevity.
          </p>
        </section>

        {/* Capabilities */}
        <section className={styles.section} aria-label="Capabilities">
          <h2 className="neoxtenHeadline neoxtenHeadline--section">Capabilities</h2>
          <ul className={styles.capabilities}>
            <li>Automation Systems</li>
            <li>Intelligence Platforms</li>
            <li>Content Infrastructure</li>
            <li>Digital Tools</li>
          </ul>
        </section>

        {/* Entity */}
        <section className={styles.section} aria-label="Entity">
          <h2 className="neoxtenHeadline neoxtenHeadline--section">Entity</h2>
          <div className={styles.entity}>
            <p>PLASTYPESA S.R.L.</p>
            <p>Registered in Romania</p>
            <p>Operating in UK & EU</p>
            <p>Global presence</p>
          </div>
        </section>
      </Container>
    </div>
  )
}
