import type { Metadata } from 'next'
import { Container } from '@/components'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Privacy Policy, Terms of Use, and Imprint for NeoXten Studios.',
}

export default function Legal() {
  return (
    <div className={styles.page}>
      <Container size="narrow">
        <header className={styles.header}>
          <h1 className={styles.title}>Legal</h1>
          <nav className={styles.nav} aria-label="Legal sections">
            <a href="#privacy">Privacy</a>
            <span className={styles.separator} aria-hidden="true">·</span>
            <a href="#terms">Terms</a>
            <span className={styles.separator} aria-hidden="true">·</span>
            <a href="#imprint">Imprint</a>
          </nav>
        </header>

        {/* Privacy Policy */}
        <section id="privacy" className={styles.section} aria-labelledby="privacy-heading">
          <h2 id="privacy-heading" className={styles.sectionTitle}>Privacy Policy</h2>
          <div className={styles.content}>
            <p className={styles.updated}>Last updated: January 2026</p>
            
            <h3>Data Controller</h3>
            <p>
              PLASTYPESA S.R.L. (&quot;NeoXten Studios&quot;, &quot;we&quot;, &quot;us&quot;) is the data controller for personal data collected through this website.
            </p>

            <h3>Data Collection</h3>
            <p>
              This website collects minimal data necessary for its operation. We do not use tracking cookies or third-party analytics services. When you contact us via email, we process your email address and message content solely for the purpose of responding to your inquiry.
            </p>

            <h3>Legal Basis</h3>
            <p>
              We process personal data based on legitimate interest (responding to inquiries) and consent where applicable. You have the right to withdraw consent at any time.
            </p>

            <h3>Data Retention</h3>
            <p>
              Contact information is retained only as long as necessary to respond to inquiries and maintain business correspondence. Data is deleted upon request or when no longer needed.
            </p>

            <h3>Your Rights</h3>
            <p>
              Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. To exercise these rights, contact us at neoxtenstudios@gmail.com.
            </p>

            <h3>Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3>Contact</h3>
            <p>
              For privacy-related inquiries, contact: neoxtenstudios@gmail.com
            </p>
          </div>
        </section>

        {/* Terms of Use */}
        <section id="terms" className={styles.section} aria-labelledby="terms-heading">
          <h2 id="terms-heading" className={styles.sectionTitle}>Terms of Use</h2>
          <div className={styles.content}>
            <p className={styles.updated}>Last updated: January 2026</p>

            <h3>Acceptance</h3>
            <p>
              By accessing this website, you agree to these terms of use. If you do not agree, do not use this website.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of PLASTYPESA S.R.L. or its licensors and is protected by intellectual property laws. Unauthorized use is prohibited.
            </p>

            <h3>Use of Website</h3>
            <p>
              You may use this website for lawful purposes only. You may not attempt to gain unauthorized access to any part of this website, interfere with its operation, or use it to transmit harmful code.
            </p>

            <h3>Disclaimer</h3>
            <p>
              This website is provided &quot;as is&quot; without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any content. We are not liable for any damages arising from use of this website.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, PLASTYPESA S.R.L. shall not be liable for any indirect, incidental, special, or consequential damages arising from use of this website.
            </p>

            <h3>Governing Law</h3>
            <p>
              These terms are governed by the laws of Romania and the European Union. Disputes shall be resolved in the courts of Romania.
            </p>

            <h3>Changes</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.
            </p>
          </div>
        </section>

        {/* Imprint */}
        <section id="imprint" className={styles.section} aria-labelledby="imprint-heading">
          <h2 id="imprint-heading" className={styles.sectionTitle}>Imprint</h2>
          <div className={styles.content}>
            <p>
              Information pursuant to § 5 TMG and EU Regulation on E-Commerce.
            </p>

            <h3>Company</h3>
            <address className={styles.address}>
              <strong>PLASTYPESA S.R.L.</strong><br />
              Trading as: NeoXten Studios<br />
              Romania, European Union
            </address>

            <h3>Contact</h3>
            <address className={styles.address}>
              Email: <a href="mailto:neoxtenstudios@gmail.com">neoxtenstudios@gmail.com</a><br />
              Phone: <a href="tel:+40793785007">+40 793 785 007</a><br />
              Website: <a href="https://neoxten.com">neoxten.com</a>
            </address>

            <h3>Operating Region</h3>
            <p>
              United Kingdom & European Union, with global operational presence.
            </p>

            <h3>Responsible for Content</h3>
            <p>
              PLASTYPESA S.R.L. is responsible for the content of this website pursuant to applicable laws.
            </p>

            <h3>Dispute Resolution</h3>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>. We are not obligated to participate in dispute resolution proceedings before a consumer arbitration board.
            </p>
          </div>
        </section>
      </Container>
    </div>
  )
}
