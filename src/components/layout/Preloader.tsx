'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);

  const brandName = "L'Experience";

  useEffect(() => {
    // Smooth loading progress (Eased) - Runs ONCE on mount
    const loadSim = { value: 0 };
    gsap.to(loadSim, {
      value: 100,
      duration: 3,
      ease: "power2.inOut",
      onUpdate: () => setPercentage(Math.floor(loadSim.value))
    });

    // Staggered Brand Entrance
    if (brandRef.current) {
      const letters = brandRef.current.children;
      gsap.fromTo(letters, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []); // Run on mount only

  useEffect(() => {
    // 3. Exit animation when progress hits 100%
    if (percentage === 100) {
      const tl = gsap.timeline();

      tl.to(brandRef.current?.children || [], {
        y: -10,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power4.inOut'
      })
      .to(progressRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power4.inOut'
      }, '-=0.4')
      .to(containerRef.current, {
        y: '-100%',
        duration: 1.2,
        ease: 'expo.inOut',
        onComplete: () => {
          if (containerRef.current) containerRef.current.style.display = 'none';
        }
      });
    }
  }, [percentage]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div ref={brandRef} className={styles.brand}>
            {brandName.split('').map((char, i) => (
              <span key={i} style={{ display: 'inline-block' }}>{char}</span>
            ))}
          </div>
          <span className={styles.percentage}>{percentage}%</span>
        </div>
        <div className={styles.progressBar}>
          <div 
            ref={progressRef} 
            className={styles.progress} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
