'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10);
      });
    }, 150);

    if (percentage === 100) {
      tl.to(textRef.current, {
        y: -20,
        opacity: 0,
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

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        <div ref={textRef} className={styles.text}>
          <span className={styles.brand}>L&apos;Experience</span>
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
