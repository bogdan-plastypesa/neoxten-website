import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          HERO — Cinematic banner with overlay + text
          ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroBanner}>
          <Image
            src="/brand/hero-banner.png"
            alt=""
            fill
            priority
            quality={90}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroVignette} />
          {/* Masks baked-in text on right side of banner image */}
          <div className={styles.heroTextMask} aria-hidden="true" />
        </div>

        <div className={styles.heroContent}>
          {/* Two-layer headline with center hotspot */}
          <div className="neoxtenHeadlineWrap">
            <h1 className="neoxtenHeadline neoxtenHeadline--display">NEOXTEN STUDIOS</h1>
            <span className="neoxtenHeadlineHotspot" aria-hidden="true">NEOXTEN STUDIOS</span>
          </div>
          <p className="neoxtenTagline neoxtenTagline--display">AI Solutions & Digital Innovation</p>
          <div className={styles.accentLine} aria-hidden="true" />
          
          <div className={styles.heroCtas}>
            <Link href="/contact" className={styles.btnPrimary}>
              Contact
            </Link>
            <Link href="/work" className={styles.btnSecondary}>
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CAPABILITIES — 4 cards with gold accent
          ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.section} aria-labelledby="capabilities-heading">
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>What We Do</span>
            <h2 id="capabilities-heading" className="neoxtenHeadline neoxtenHeadline--section">Capabilities</h2>
          </div>

          <div className={styles.capabilitiesGrid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Automation Systems</h3>
              <p className={styles.cardText}>
                End-to-end workflows that eliminate manual operations and scale reliably.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>AI Integration</h3>
              <p className={styles.cardText}>
                Practical intelligence layers for decision-support and content generation.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Content Infrastructure</h3>
              <p className={styles.cardText}>
                Publishing pipelines for YouTube, TikTok, and multi-platform distribution.
              </p>
            </article>

            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Digital Operations</h3>
              <p className={styles.cardText}>
                Backend systems, data flows, and tooling for modern businesses.
              </p>
            </article>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SELECTED WORK — 3 placeholder cards
          ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.section} aria-labelledby="work-heading">
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>Portfolio</span>
            <h2 id="work-heading" className="neoxtenHeadline neoxtenHeadline--section">Selected Work</h2>
          </div>

          <div className={styles.workGrid}>
            <article className={styles.workCard}>
              <span className={styles.workTag}>Automation</span>
              <h3 className={styles.workTitle}>Enterprise Workflow System</h3>
              <p className={styles.workOutcome}>Reduced manual operations by up to 80% through automated routing and orchestration.</p>
            </article>

            <article className={styles.workCard}>
              <span className={styles.workTag}>Content</span>
              <h3 className={styles.workTitle}>Multi-Platform Publishing</h3>
              <p className={styles.workOutcome}>Unified content pipeline across channels with consistent scheduling and delivery.</p>
            </article>

            <article className={styles.workCard}>
              <span className={styles.workTag}>AI Integration</span>
              <h3 className={styles.workTitle}>Intelligent Operations Layer</h3>
              <p className={styles.workOutcome}>Automated decision support and monitoring for key processes.</p>
            </article>
          </div>

          <p className={styles.workNote}>
            Full portfolio available on request.
          </p>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROCESS — 3 steps
          ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.section} aria-labelledby="process-heading">
        <Container>
          <div className={styles.sectionHeader}>
            <span className={styles.overline}>How We Work</span>
            <h2 id="process-heading" className="neoxtenHeadline neoxtenHeadline--section">Process</h2>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>01</span>
              <h3 className={styles.processTitle}>Align</h3>
              <p className={styles.processText}>
                Clarify outcomes, constraints, and success metrics.
              </p>
            </div>

            <div className={styles.processStep}>
              <span className={styles.processNumber}>02</span>
              <h3 className={styles.processTitle}>Build</h3>
              <p className={styles.processText}>
                Implement systems with reliability and clean interfaces.
              </p>
            </div>

            <div className={styles.processStep}>
              <span className={styles.processNumber}>03</span>
              <h3 className={styles.processTitle}>Ship</h3>
              <p className={styles.processText}>
                Deploy, monitor, iterate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA — Final call to action
          ═══════════════════════════════════════════════════════════════ */}
      <section className={styles.ctaSection} aria-label="Contact call to action">
        <Container>
          <div className={styles.ctaContent}>
            <h2 className="neoxtenHeadline neoxtenHeadline--section">Ready to build?</h2>
            <p className={styles.ctaText}>
              Let&apos;s discuss how we can help transform your operations.
            </p>
            <Link href="/contact" className={styles.btnPrimary}>
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
