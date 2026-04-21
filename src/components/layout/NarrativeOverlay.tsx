'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './NarrativeOverlay.module.css';

gsap.registerPlugin(ScrollTrigger);

const narrativeSteps = [
  { main: "The Awakening", sub: "A symphony of raw elements" },
  { main: "The Synthesis", sub: "Artistry meets precision" },
  { main: "The Moment", sub: "A transcendence of taste" }
];

export default function NarrativeOverlay() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const revealItems = gsap.utils.toArray('.' + styles.textWrapper);
      
      revealItems.forEach((item: any, i) => {
        const mainLine = item.querySelector('.' + styles.narrativeLine);
        const subLine = item.querySelector('.' + styles.subLine);
        
        gsap.to(mainLine, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: 'main',
            start: `${i * 33}% center`,
            end: `${(i + 1) * 33}% center`,
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        });

        gsap.to(subLine, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: 'main',
            start: `${i * 33}% center`,
            end: `${(i + 1) * 33}% center`,
            scrub: true,
            toggleActions: "play reverse play reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      {narrativeSteps.map((step, i) => (
        <div key={i} className={styles.textWrapper} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
          <span className={styles.narrativeLine}>{step.main}</span>
          <span className={styles.subLine}>{step.sub}</span>
        </div>
      ))}
    </div>
  );
}
