'use client';

import { useStore } from '@/store/useStore';
import Magnetic from '@/components/shared/Magnetic';
import styles from './Navbar.module.css';

export default function Navbar() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Magnetic strength={0.2}>
          <a href="/">L&apos;E</a>
        </Magnetic>
      </div>

      <div className={styles.menuTrigger} onClick={() => toggleMenu()}>
        <Magnetic strength={0.4}>
          <div className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}>
            <span></span>
            <span></span>
          </div>
        </Magnetic>
      </div>
    </nav>
  );
}
