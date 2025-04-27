'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './platform-img.module.css';

export default function PlatformImg() {
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const updateScrollPosition = () => {
      setScrollY(window.scrollY);
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(updateScrollPosition);
    };

    // Сохраняем текущий элемент в локальную переменную
    const currentSectionRef = sectionRef.current;

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScrollPosition();

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      
      window.removeEventListener('scroll', handleScroll);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!imgContainerRef.current || !sectionRef.current || !isVisible) return;

    const rect = sectionRef.current.getBoundingClientRect();
    
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    const targetPosition = windowHeight * 0.3;
    
    let progress = (windowHeight - rect.top) / (windowHeight + sectionHeight);
    progress = Math.max(0, Math.min(1, progress));
    
    const isInTargetPosition = rect.top <= targetPosition;
    
    if (isInTargetPosition) {
      imgContainerRef.current.style.transform = `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    } else {
      const maxAngle = 35;
      const normalizedProgress = Math.min(1, progress * 1.5);
      const easing = 1 - Math.pow(1 - normalizedProgress, 3);
      
      const rotateX = maxAngle * (1 - easing);
      const translateZ = -20 * (1 - easing);
      
      imgContainerRef.current.style.transform = `translate3d(0px, 0px, ${translateZ}px) scale3d(1, 1, 1) rotateX(${rotateX}deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
    }
  }, [scrollY, isVisible]);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.wrapper}>
        <div className={styles.gradient}>
          <div className={styles.content}>
            <div ref={imgContainerRef} className={styles.imgContainer}>
              <Image
                src="/platform/platform.png"
                width={1086}
                height={717}
                alt="Platform"
                className={styles.img}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}