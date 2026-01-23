import React from 'react';
import styles from './HowWeWork.module.css';

const principles = [
  {
    title: 'Clients at the heart',
    description: 'We work in partnership with our clients. The better we understand you, your organisation and your issues, the more we can help.',
  },
  {
    title: 'Keep it simple',
    description: 'Practical, tailored and fit for purpose solutions, with no academic or consulting jargon.',
  },
  {
    title: 'Capability raising is key',
    description: 'We equip you with the knowledge, attitudes and skills your team needs to sustain positive change.',
  },
  {
    title: 'Actionable insights',
    description: 'We provide you with a set of actionable insights and an execution roadmap to prioritise the next steps.',
  },
  {
    title: 'We are inclusive',
    description: 'We value people\'s differences and encourage diversity of thought and action.',
  },
];

export default function HowWeWork(): React.JSX.Element {
  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How We Work</h2>
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
