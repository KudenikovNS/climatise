import Link from 'next/link';
import styles from './footer.module.css';
import Button from '../button/button';
import { navItems } from "@/constants/navigation";

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.link}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contact}>
            <Button text="+386 316 943 24" variant="primary" />
            <Button text="hello@climatise.com" variant="primary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
