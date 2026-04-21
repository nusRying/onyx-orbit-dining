import styles from "./page.module.css";
import TextReveal from "@/components/shared/TextReveal";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <TextReveal className={styles.heroTitle}>L&apos;Experience</TextReveal>
        <p>A Sensory Journey Into Taste</p>
      </section>

      <section className={styles.story}>
        <div className={styles.content}>
          <TextReveal>The Story</TextReveal>
          <p>
            Crafted with precision, delivered with passion. Our philosophy 
            revolves around the harmony of ingredients and the art of 
            presentation.
          </p>
        </div>
      </section>

      <section className={styles.ingredients}>
        <div className={styles.content}>
          <TextReveal>Purity</TextReveal>
          <p>
            Sourcing the finest ingredients from local artisans to create 
            an unforgettable palate.
          </p>
        </div>
      </section>

      <section className={styles.footer}>
        <p>© 2026 L&apos;Experience. All Rights Reserved.</p>
      </section>
    </div>
  );
}
