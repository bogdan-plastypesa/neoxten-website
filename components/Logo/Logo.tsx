import Image from 'next/image'
import styles from './Logo.module.css'

interface LogoProps {
  /** Size in pixels — uses watermark for small, profile for medium, square for large */
  size?: 'small' | 'medium' | 'large' | 'hero'
  className?: string
  /** Whether to show the gold glow effect */
  glow?: boolean
}

/**
 * NeoXten Studios Logo
 * 
 * Uses actual brand assets from youtube_pack/exports:
 * - small (32-48px): watermark_150x150.png
 * - medium (64-120px): profile_800x800.png
 * - large (120-200px): profile_800x800.png
 * - hero (200px+): square_1080x1080.png
 */
export function Logo({ size = 'small', className = '', glow = false }: LogoProps) {
  const sizeMap = {
    small: { width: 32, height: 32, src: '/brand/watermark_150x150.png' },
    medium: { width: 80, height: 80, src: '/brand/profile_800x800.png' },
    large: { width: 120, height: 120, src: '/brand/profile_800x800.png' },
    hero: { width: 200, height: 200, src: '/brand/square_1080x1080.png' },
  }

  const config = sizeMap[size]

  return (
    <div 
      className={`${styles.logo} ${glow ? styles.glow : ''} ${className}`}
      style={{ width: config.width, height: config.height }}
    >
      <Image
        src={config.src}
        alt="NeoXten Studios"
        width={config.width}
        height={config.height}
        priority={size === 'hero'}
        quality={90}
      />
    </div>
  )
}
