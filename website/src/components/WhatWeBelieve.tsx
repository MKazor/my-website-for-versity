import React from 'react';
import styles from './WhatWeBelieve.module.css';

export default function WhatWeBelieve(): React.JSX.Element {
  return (
    <section id="believe" className={styles.believe}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/img/believe.png" alt="What we believe" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>What we believe</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.text}>
            Investment decisions are being made every day, on well-intended plans, products,
            policies and programmes aimed at making the world a better place.
          </p>
          <p className={styles.text}>
            Many initiatives fall short. Why? Often, outcomes are vague, strategies misaligned,
            research insufficient, or resources and capability lacking. Sometimes good programs
            haven't told their story, leaving their success unproven. Have you faced these challenges?
          </p>
          <p className={styles.textHighlight}>
            We have—and we're here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
