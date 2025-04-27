import styles from './button.module.css'
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  text?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
  children?: ReactNode;
}

export default function Button({
  text = 'Rezerviraj klic',
  href = '/',
  variant = 'primary',
  className = '',
  children
}: ButtonProps) {
  const buttonContent = (
    <div className={styles.textContainer}>
      <div className={styles.textWrapper}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );

  const variantClass = styles[variant];
  const buttonClass = `${styles.link} ${variantClass} ${className}`;

  return (
    <Link 
      href={href} 
      className={buttonClass}
    >
      {children || buttonContent}
    </Link>
  );
}