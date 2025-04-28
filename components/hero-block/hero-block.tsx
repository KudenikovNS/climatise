'use client';

import styles from './hero-block.module.css'
import Button from '../button/button';
import Image from 'next/image';

export default function HeroBlock() {
  const words = ['Zmanjšaj', 'Poročaj', 'Izmeri'];

  return (
    <section className={styles.section}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Vaša celovita<br />rešitev za emisije.</h1>
        <div className={styles.wordWrapper}>
          <div className={styles.wordContainer}>
            <div className={styles.wordCycle}>
              {words.map((word, index) => (
                <div key={index} className={styles.word}>{word}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.btn}>
        <Button />
      </div>

      <div className={styles.analyticsContainer}>
        <div className={styles.leftColumn}>
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/scope1.jpg`}
            width={332}
            height={148}
            alt="Scope 1 Analytics"
            className={styles.scopeImage}
          />
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/scope2.jpg`}
            width={332}
            height={148}
            alt="Scope 2 Analytics"
            className={styles.scopeImage}
          />
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/scope3.jpg`}
            width={332}
            height={148}
            alt="Scope 3 Analytics"
            className={styles.scopeImage}
          />
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/progress.png`}
            width={235}
            height={317}
            alt="Progress"
            className={styles.progressImage}
          />
        </div>

        <div className={styles.rightColumn}>
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/graph.svg`}
            width={478}
            height={296}
            alt="Graph"
            className={styles.graphImage}
          />
          <Image
            src={`${process.env.NODE_ENV === 'production' ? '/climatise' : ''}/analytics/show.svg`}
            width={212}
            height={467}
            alt="Show"
            className={styles.showImage}
          />
        </div>

      </div>
    </section>
  );
}
