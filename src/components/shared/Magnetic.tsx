'use client';

import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.5 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const xTo = gsap.quickTo(element, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(element, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * strength);
      yTo(y * strength);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      {children}
    </div>
  );
}
