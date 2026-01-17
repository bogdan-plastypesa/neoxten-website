import { Logo } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section — Logo with gold glow (single focal point) */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroContent}>
          <Logo size="hero" glow />
        </div>
      </section>

      {/* Statement Section */}
      <section className={styles.statement} aria-label="Statement">
        <div className={styles.statementContent}>
          <h1 className={styles.title}>NeoXten Studios</h1>
          <p className={styles.description}>
            An intelligence studio building systems for automation, content, and digital infrastructure.
          </p>
        </div>
      </section>
    </>
  )
}
