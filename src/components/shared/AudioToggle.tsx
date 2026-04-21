'use client';

import { useState, useEffect, useRef } from 'react';
import Magnetic from './Magnetic';
import styles from './AudioToggle.module.css';

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Note: In a real project, we would use a high-quality ambient loop.
    // For now, we set up the architecture for it.
    audioRef.current = new Audio('ambient-loop.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <Magnetic strength={0.3}>
        <button className={styles.button} onClick={toggleAudio}>
          <span className={styles.icon}>
            {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
          </span>
          <div className={styles.bars}>
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </button>
      </Magnetic>
    </div>
  );
}
