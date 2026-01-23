import React from 'react';
import styles from './HowWeWork.module.css';

const principles = [
  {
    title: 'Client Partnership',
    description: 'We work alongside you, not just for you. Your knowledge combined with our expertise creates better outcomes.',
  },
  {
    title: 'Simplicity',
    description: 'Complex problems don\'t always need complex solutions. We focus on clarity and practical approaches.',
  },
  {
    title: 'Capability Building',
    description: 'We aim to leave you stronger. Knowledge transfer and skill development are built into everything we do.',
  },
  {
    title: 'Actionable Insights',
    description: 'Research and analysis that leads to clear next steps, not reports that gather dust on shelves.',
  },
  {
    title: 'Inclusive Collaboration',
    description: 'The best solutions come from diverse perspectives. We bring people together to solve shared challenges.',
  },
];

export default function HowWeWork(): React.JSX.Element {
  return (
    <section id="how-we-work" className="section">
      <div className="container">
        <h2 className="section__title">How We Work</h2>
        <p className="section__subtitle">
          Our approach is built on principles that ensure meaningful, lasting impact.
        </p>
        <div className={styles.principlesContainer}>
          {principles.map((principle, index) => (
            <div key={index} className={styles.principle}>
              <div className={styles.principleNumber}>{index + 1}</div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
