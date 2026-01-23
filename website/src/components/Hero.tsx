import React from 'react';
import styles from './Hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Better decisions.</h1>
            <h2 className={styles.heroSubtitle}>Better outcomes.</h2>
            <p className={styles.heroDescription}>
              We help clients make better strategy, policy and investment decisions in the climate, waste and resource efficiency sectors.
            </p>
            <a href="#contact" className={styles.heroButton}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
