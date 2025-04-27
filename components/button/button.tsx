import styles from './button.module.css'
import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonProps = {
  text?: string;
  href?: string;
  isExternal?: boolean;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
  buttonProps?: any;
  children?: ReactNode;
}

export default function Button({
  text = 'Rezerviraj klic',
  href = '/',
  isExternal = true,
  variant = 'primary',
  className = '',
  buttonProps = {},
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

  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        className={buttonClass}
        {...buttonProps}
      >
        {children || buttonContent}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className={buttonClass}
      {...buttonProps}
    >
      {children || buttonContent}
    </Link>
  );
}