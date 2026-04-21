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
      
      // Cursor is the "Clean Dot"
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      
      // Follower is the "Atmospheric Ring"
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.8, // More lag for "Sensory" feel
        ease: 'expo.out'
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, { scale: 1.5, opacity: 0.8, duration: 0.3 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, opacity: 0.3, duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Hover states for links and buttons - Expanded logic
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0, duration: 0.3 }); // Dot disappears
      gsap.to(follower, { 
        scale: 4, 
        backgroundColor: 'rgba(212, 175, 55, 0.1)', 
        borderColor: 'rgba(212, 175, 55, 0.5)',
        duration: 0.4,
        ease: 'back.out(2)'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: 'transparent', 
        borderColor: 'rgba(255, 255, 255, 0.3)',
        duration: 0.4 
      });
    };

    const targets = document.querySelectorAll('a, button, .interactive');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', handleMouseEnter);
      target.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleMouseEnter);
        target.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={followerRef} className={styles.follower}></div>
    </>
  );
}
