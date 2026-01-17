import Image from 'next/image'
import styles from './Logo.module.css'

interface LogoProps {
  /** Height in pixels — aspect ratio is preserved */
  height?: number
  className?: string
}

/**
 * NeoXten Studios Logo Mark
 * 
 * Renders the transparent logo emblem (no background tile).
 * Source: logo-mark.png (512x512, RGBA with alpha transparency)
 */
export function Logo({ height = 24, className = '' }: LogoProps) {
  // Logo is square (1:1 aspect ratio)
  const width = height

  return (
    <Image
      src="/brand/logo-mark.png"
      alt="NeoXten Studios"
      width={width}
      height={height}
      className={`${styles.logo} ${className}`}
      priority
    />
  )
}
