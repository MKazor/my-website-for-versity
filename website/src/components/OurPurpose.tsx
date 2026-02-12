import React from 'react';
import styles from './OurPurpose.module.css';

export default function OurPurpose(): React.JSX.Element {
  return (
    <section id="purpose" className={styles.purpose}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img src="/img/hero-bg.png" alt="Our purpose" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>Our purpose</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.text}>
            We partner with organisations across the private, public, and non-profit sectors
            to deliver transformational outcomes. By maximising the impact of community and
            business investments, we contribute to a more sustainable, equitable, and thriving
            Aotearoa New Zealand.
          </p>
          <p className={styles.text}>
            In case you are wondering about the name, Versity comes from the Latin word 'versus'
            meaning 'to turn'. To us, Versity stands for the shift in thinking we need to solve
            today's most challenging social and environmental issues.
          </p>
        </div>
      </div>
    </section>
  );
}
