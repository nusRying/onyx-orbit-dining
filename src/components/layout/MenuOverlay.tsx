'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';
import styles from './MenuOverlay.module.css';

const menuLinks = [
  { label: 'The Experience', href: '/' },
  { label: 'Our Story', href: '/story' },
  { label: 'The Menu', href: '/menu' },
  { label: 'Reserve', href: '/reserve' },
];

export default function MenuOverlay() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current || !linksRef.current) return;

    if (isMenuOpen) {
      const tl = gsap.timeline();
      
      tl.to(containerRef.current, {
        display: 'flex',
        duration: 0
      })
      .to(gridRef.current.children, {
        scaleY: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.inOut'
      })
      .to(linksRef.current.children, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power3.out'
      }, '-=0.4');
    } else {
      const tl = gsap.timeline();
      
      tl.to(linksRef.current.children, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: 'power3.in'
      })
      .to(gridRef.current.children, {
        scaleY: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power4.inOut'
      })
      .to(containerRef.current, {
        display: 'none',
        duration: 0
      });
    }
  }, [isMenuOpen]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={gridRef} className={styles.grid}>
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.column}></div>
        ))}
      </div>
      
      <div ref={linksRef} className={styles.links}>
        {menuLinks.map((link, i) => (
          <div key={i} className={styles.linkItem}>
            <a href={link.href}>{link.label}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
