'use client';

import { useStore, MENU_ITEMS } from '@/store/useStore';
import styles from './menu.module.css';
import TextReveal from '@/components/shared/TextReveal';
import Magnetic from '@/components/shared/Magnetic';
import { useEffect } from 'react';

export default function MenuPage() {
  const activeDishIndex = useStore((state) => state.activeDishIndex);
  const setActiveDishIndex = useStore((state) => state.setActiveDishIndex);
  const activeItem = MENU_ITEMS[activeDishIndex];

  const nextDish = () => {
    setActiveDishIndex((activeDishIndex + 1) % MENU_ITEMS.length);
  };

  const prevDish = () => {
    setActiveDishIndex((activeDishIndex - 1 + MENU_ITEMS.length) % MENU_ITEMS.length);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > 50) {
        if (e.deltaY > 0) {
          nextDish();
        } else {
          prevDish();
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeDishIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.ui}>
        <div className={styles.header}>
          <TextReveal className={styles.category}>{activeItem.category}</TextReveal>
          <h1 className={styles.title}>{activeItem.title}</h1>
        </div>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{activeItem.description}</p>
        </div>

        <div className={styles.navigation}>
          <Magnetic strength={0.2}>
            <button className={styles.navButton} onClick={prevDish}>PREV</button>
          </Magnetic>
          <div className={styles.counter}>
            <span>0{activeDishIndex + 1}</span>
            <div className={styles.line}></div>
            <span>0{MENU_ITEMS.length}</span>
          </div>
          <Magnetic strength={0.2}>
            <button className={styles.navButton} onClick={nextDish}>NEXT</button>
          </Magnetic>
        </div>
      </div>
      
      {/* Background Mist/Ambience for the 3D Carousel */}
      <div className={styles.mist}></div>
    </div>
  );
}
