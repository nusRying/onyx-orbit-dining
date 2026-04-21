'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        delay: delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, [delay]);

  return (
    <h2 ref={containerRef} className={className} style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
      {children.split('').map((char, i) => (
        <span 
          key={i} 
          className="char" 
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </span>
      ))}
    </h2>
  );
}
