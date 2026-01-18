import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for NeoXten Studios website.',
}

export default function Terms() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className="neoxtenHeadline neoxtenHeadline--page">Terms of Service</h1>
          <p className={styles.updated}>Effective Date: January 18, 2026</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Introduction</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of the NeoXten Studios website at neoxten.com, operated by PLASTYPESA S.R.L. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using our website, you agree to be bound by these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Website Purpose</h2>
            <p>
              This website is provided for informational purposes only. It presents information about NeoXten Studios, our services, and how to contact us. The website does not constitute an offer, solicitation, or contractual commitment.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website in any unlawful manner or for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the website&apos;s operation</li>
              <li>Copy, reproduce, or distribute website content without permission</li>
              <li>Use automated systems to access the website without authorization</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of PLASTYPESA S.R.L. or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Disclaimer</h2>
            <p>
              The website and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, PLASTYPESA S.R.L. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third-Party Links</h2>
            <p>
              The website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of use of any third-party websites.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Romania. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Bucharest, Romania.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page. Your continued use of the website after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p>
              For questions regarding these Terms, please contact:
            </p>
            <address className={styles.address}>
              <p>NeoXten Studios</p>
              <p>A brand of PLASTYPESA S.R.L.</p>
              <p>Email: <Link href="mailto:neoxtenstudios@gmail.com">neoxtenstudios@gmail.com</Link></p>
            </address>
          </section>
        </div>
      </Container>
    </div>
  )
}
