import styles from './Logo.module.css'

interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.logo} ${className}`}
      aria-label="NeoXten Studios"
      role="img"
    >
      {/* Outer orbital ring */}
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="20"
        transform="rotate(-30 50 50)"
        stroke="url(#chrome-gradient)"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner orbital ring */}
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        transform="rotate(30 50 50)"
        stroke="url(#chrome-gradient)"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Central play/N mark */}
      <path
        d="M35 30 L35 70 L70 50 Z"
        fill="var(--color-pure-black)"
        stroke="url(#chrome-gradient)"
        strokeWidth="2"
      />
      {/* Gold accent glow */}
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="20"
        transform="rotate(-30 50 50)"
        stroke="var(--color-accent)"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
        className={styles.glow}
      />
      <defs>
        <linearGradient id="chrome-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-chrome-highlight)" />
          <stop offset="50%" stopColor="var(--color-chrome-mid)" />
          <stop offset="100%" stopColor="var(--color-chrome-shadow)" />
        </linearGradient>
      </defs>
    </svg>
  )
}
