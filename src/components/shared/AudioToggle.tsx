'use client';

import { useState, useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import { useStore } from '@/store/useStore';
import styles from './AudioToggle.module.css';

export default function AudioToggle() {
  const isAudioEnabled = useStore((state) => state.isAudioEnabled);
  const toggleAudioStore = useStore((state) => state.toggleAudio);

  return (
    <div className={styles.container}>
      <Magnetic strength={0.3}>
        <button className={styles.button} onClick={() => toggleAudioStore()}>
          <span className={styles.icon}>
            {isAudioEnabled ? 'SOUND ON' : 'SOUND OFF'}
          </span>
          <div className={styles.bars}>
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className={`${styles.bar} ${isAudioEnabled ? styles.animating : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </button>
      </Magnetic>
    </div>
  );
}
