import Link from 'next/link';
import styles from './footer.module.css';
import Button from '../button/button';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.heading}>Newsletter</h3>
          <div className={styles.newsletter}>
            <input
              type="email"
              placeholder="Email…"
              className={styles.input}
            />
            <Button text="Submit" variant="primary" className={styles.button} />
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Links</h3>
          <nav className={styles.links}>
            <Link href="/" className={styles.link}>Domov</Link>
            <Link href="/platform" className={styles.link}>Platform</Link>
            <Link href="/resources" className={styles.link}>Viri</Link>
            <Link href="/regulations" className={styles.link}>Predpisi</Link>
            <Link href="/about" className={styles.link}>O nas</Link>
          </nav>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contact}>
            <Button text="+44 (0)20 3031 0560" variant="primary" />
            <Button text="hello@climatise.com" variant="primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
