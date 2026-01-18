import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NeoXten Studios website.',
}

export default function Privacy() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Privacy Policy</h1>
          <p className={styles.updated}>Effective Date: January 18, 2026</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>
              This Privacy Policy describes how NeoXten Studios, a brand of PLASTYPESA S.R.L. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and protects information when you visit our website at neoxten.com.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Information We Collect</h2>
            <h3>Hosting Logs</h3>
            <p>
              Our hosting provider (Vercel) automatically collects standard server logs, which may include your IP address, browser type, referring page, and timestamp of access. These logs are used for security, performance monitoring, and troubleshooting purposes.
            </p>
            <h3>Contact Information</h3>
            <p>
              If you contact us via email, we collect the information you provide, including your email address and message content, to respond to your inquiry.
            </p>
            <h3>Cookies</h3>
            <p>
              We use essential cookies required for website functionality. For more information, please see our <Link href="/cookies">Cookies Policy</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How We Use Information</h2>
            <p>We use the information collected to:</p>
            <ul>
              <li>Operate and maintain our website</li>
              <li>Respond to your inquiries</li>
              <li>Monitor and analyze website performance</li>
              <li>Protect against security threats</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Services</h2>
            <p>
              Our website is hosted on Vercel. Vercel may collect and process certain data as part of providing hosting services. Please refer to <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a> for more information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your Rights</h2>
            <p>
              Under applicable data protection laws, including the GDPR, you have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability where applicable</li>
            </ul>
            <p>
              To exercise these rights, please contact us at the email address below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p>
              For privacy-related inquiries, please contact:
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
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
