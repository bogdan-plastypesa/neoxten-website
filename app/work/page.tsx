import type { Metadata } from 'next'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Select projects from NeoXten Studios.',
}

export default function Work() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className={styles.title}>Work</h1>
        </header>

        <section className={styles.content}>
          <p className={styles.statement}>
            Select projects will be published here.
          </p>
        </section>
      </Container>
    </div>
  )
}
