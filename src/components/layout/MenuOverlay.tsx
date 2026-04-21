'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';
import styles from './MenuOverlay.module.css';

import Link from 'next/link';

const menuLinks = [
  { label: 'Celestial Journey', href: '/' },
  { label: 'The Philosophy', href: '/story' },
  { label: 'Gastronomy Menu', href: '/menu' },
  { label: 'Secure a Moment', href: '/reserve' },
];

export default function MenuOverlay() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);
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
        stagger: 0.05,
        duration: 0.8,
        ease: 'power4.inOut'
      })
      .to(linksRef.current.querySelectorAll('.link-content'), {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.7,
        ease: 'power3.out'
      }, '-=0.4');
    } else {
      const tl = gsap.timeline();
      
      tl.to(linksRef.current.querySelectorAll('.link-content'), {
        y: 20,
        opacity: 0,
        stagger: 0.03,
        duration: 0.4,
        ease: 'power3.in'
      })
      .to(gridRef.current.children, {
        scaleY: 0,
        stagger: 0.03,
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
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.column}></div>
        ))}
      </div>
      
      <div ref={linksRef} className={styles.links}>
        {menuLinks.map((link, i) => (
          <div 
            key={i} 
            className={styles.linkItem} 
            onClick={() => {
              if (link.label === 'Secure a Moment') {
                useStore.getState().setIsBookingOpen(true);
                toggleMenu(false);
              } else {
                toggleMenu(false);
              }
            }}
          >
            <div className="link-content" style={{ opacity: 0, transform: 'translateY(20px)' }}>
              {link.label === 'Secure a Moment' ? (
                <span style={{ cursor: 'pointer' }}>{link.label}</span>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
