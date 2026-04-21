import styles from "./page.module.css";
import TextReveal from "@/components/shared/TextReveal";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <TextReveal className={styles.heroTitle}>L&apos;Experience</TextReveal>
          <div className={styles.heroSubtitle}>
            <span className={styles.line}></span>
            <p className="interactive">Celestial Gastronomy</p>
            <span className={styles.line}></span>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={styles.content}>
          <TextReveal className={styles.sectionLabel}>The Awakening</TextReveal>
          <h2 className={styles.sectionTitle}>The Synthesis of Light & Taste</h2>
          <p className={styles.description}>
            Where the ethereal meets the terrestrial. Our culinary philosophy 
            is a kinetic narrative of flavor, merging the theatrical drama of 
            the cosmos with the organic purity of the earth.
          </p>
        </div>
      </section>

      <section className={styles.ingredients}>
        <div className={styles.content}>
          <TextReveal className={styles.sectionLabel}>The Synthesis</TextReveal>
          <h2 className={styles.sectionTitle}>Matter at its Purest</h2>
          <p className={styles.description}>
            We harvest the secrets of the soil, refining raw ingredients into 
            liquid gold and crystalline textures. Every dish is a moment 
            suspended in time.
          </p>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.footerContent}>
          <p className="interactive">Est. 2026 — Paris</p>
          <div className={styles.footerLinks}>
            <span className="interactive">Instagram</span>
            <span className="interactive">Reservations</span>
          </div>
        </div>
      </section>
    </div>
  );
}
