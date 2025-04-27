'use client';

import { useRef } from 'react';
import styles from './carousel.module.css';

export default function StandardsCarousel() {
  const originalStandards = ['TCFD', 'SECR', 'CSRD', 'ISSB'];
  const standards = [...originalStandards, ...originalStandards, ...originalStandards];
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.standardsCarousel}>
      <div className={styles.standardsTrack} ref={trackRef}>
        {standards.map((standard, index) => (
          <div 
            key={index} 
            className={styles.standardItem}
          >
            {standard}
          </div>
        ))}
      </div>
    </div>
  );
}
