'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const setScrollProgress = useStore((state) => state.setScrollProgress);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function onScroll({ progress }: { progress: number }) {
      setScrollProgress(progress);
    }

    lenis.on('scroll', onScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync GSAP ticker with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      lenis.off('scroll', onScroll);
      gsap.ticker.remove(() => {});
    };
  }, [setScrollProgress]);

  return <>{children}</>;
}
