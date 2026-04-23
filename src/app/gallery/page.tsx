'use client';

import { useStore } from '@/store/useStore';
import styles from './gallery.module.css';
import TextReveal from '@/components/shared/TextReveal';
import Magnetic from '@/components/shared/Magnetic';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GalleryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.ui}>
        <div className={styles.header}>
          <TextReveal className={styles.category}>Visual Poetry</TextReveal>
          <h1 className={styles.title}>The Gallery</h1>
        </div>

        <div className={styles.instructions}>
          <p>Drag or Scroll horizontally to explore the craft</p>
        </div>
      </div>
      
      {/* Background Ambience */}
      <div className={styles.vignette}></div>
    </div>
  );
}
