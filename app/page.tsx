import { Logo } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Logo size={200} className={styles.heroLogo} />
          </div>
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
