import React from 'react';
import styles from './Hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Better decisions.<br />Better outcomes.
          </h1>
          <p className={styles.heroSubtitle}>
            We partner with organisations across private, public, and non-profit sectors
            to navigate complex challenges in climate, waste, and resource efficiency.
          </p>
          <p className={styles.heroDescription}>
            The name Versity derives from the Latin "versus," meaning "to turn" —
            representing the shifts in thinking needed to create sustainable change.
          </p>
          <a href="#contact" className="button--primary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
