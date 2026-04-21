import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import Magnetic from '@/components/shared/Magnetic';
import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const isMenuOpen = useStore((state) => state.isMenuOpen);
  const toggleMenu = useStore((state) => state.toggleMenu);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.nav} ${!isVisible ? styles.hidden : ''} ${isMenuOpen ? styles.menuActive : ''}`}>
      <div className={styles.logo}>
        <Magnetic strength={0.2}>
          <Link href="/">L&apos;E</Link>
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
