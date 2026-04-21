'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.3 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Hover states for links and buttons
    const targets = document.querySelectorAll('a, button, [role="button"]');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        gsap.to(follower, { scale: 3, backgroundColor: 'rgba(212, 175, 55, 0.2)', duration: 0.3 });
      });
      target.addEventListener('mouseleave', () => {
        gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={followerRef} className={styles.follower}></div>
    </>
  );
}
