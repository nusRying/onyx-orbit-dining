'use client';

import { useRef, useEffect } from 'react';
import styles from './story.module.css';
import TextReveal from '@/components/shared/TextReveal';
import { useStore } from '@/store/useStore';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  { id: 'origin', title: 'The Origin', date: '1994', text: 'Born from the volcanic soil of the Mediterranean.' },
  { id: 'obsession', title: 'The Obsession', date: '2008', text: 'Seven years spent mastering the chemistry of steam.' },
  { id: 'discovery', title: 'The Discovery', date: '2015', text: 'The moment the first celestial plate was realized.' },
  { id: 'discipline', title: 'The Discipline', date: '2021', text: 'A team of 14, moving as a single heartbeat.' },
  { id: 'moment', title: 'The Moment', date: 'NOW', text: 'Your seat at the table of infinity.' },
];

export default function StoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom logic for the timeline rail or chapter transitions can go here
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.rail}>
        <div className={styles.railLine}></div>
        {chapters.map((chapter, i) => (
          <div key={chapter.id} className={styles.node}>
            <div className={styles.nodeCircle}></div>
            <span className={styles.nodeDate}>{chapter.date}</span>
          </div>
        ))}
      </div>

      <div className={styles.chapters}>
        {chapters.map((chapter) => (
          <section key={chapter.id} className={styles.chapterSection}>
            <div className={styles.content}>
              <span className={styles.date}>{chapter.date}</span>
              <TextReveal className={styles.title}>{chapter.title}</TextReveal>
              <p className={styles.description}>{chapter.text}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
