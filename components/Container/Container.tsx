import styles from './Container.module.css'

interface ContainerProps {
  children: React.ReactNode
  size?: 'default' | 'narrow' | 'wide'
  className?: string
}

export function Container({ children, size = 'default', className = '' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  )
}
