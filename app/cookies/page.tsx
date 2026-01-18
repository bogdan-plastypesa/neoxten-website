import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description: 'Cookies Policy for NeoXten Studios website.',
}

export default function Cookies() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Cookies Policy</h1>
          <p className={styles.updated}>Effective Date: January 18, 2026</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              Our website uses essential cookies that are necessary for basic website functionality. These cookies do not collect personal information and are required for the website to operate correctly.
            </p>
            <h3>Analytics Cookies</h3>
            <p>
              At present, we do not use analytics cookies or third-party tracking services beyond essential hosting functionality provided by Vercel.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul>
              <li>View cookies stored on your device</li>
              <li>Delete some or all cookies</li>
              <li>Block cookies from specific or all websites</li>
              <li>Set preferences for certain types of cookies</li>
            </ul>
            <p>
              Please note that disabling cookies may affect the functionality of this website and other websites you visit.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Cookies</h2>
            <p>
              Our website does not set third-party cookies for advertising or tracking purposes. However, our hosting provider (Vercel) may use cookies as part of their service. Please refer to <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a> for more information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More Information</h2>
            <p>
              For more information about how we handle your data, please see our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p>
              For questions regarding cookies, please contact:
            </p>
            <address className={styles.address}>
              <p>NeoXten Studios</p>
              <p>A brand of PLASTYPESA S.R.L.</p>
              <p>Email: <Link href="mailto:neoxtenstudios@gmail.com">neoxtenstudios@gmail.com</Link></p>
            </address>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
