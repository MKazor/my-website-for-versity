import React from 'react';
import styles from './HowWeWork.module.css';

const principles = [
  {
    icon: '/img/work_icon1.png',
    title: 'Clients at the heart',
    description: 'We work in partnership with our clients. The better we understand you, your organisation and your issues, the more we can help.',
  },
  {
    icon: '/img/work_icon2.png',
    title: 'Keep it simple',
    description: 'Practical, tailored and fit for purpose solutions, with no academic or consulting jargon. Simple also means phased approaches that reduce your cost and risk.',
  },
  {
    icon: '/img/work_icon3.png',
    title: 'Capability raising is key',
    description: 'We equip you with the knowledge, attitudes and skills your team needs to sustain positive change.',
  },
  {
    icon: '/img/work_icon4.png',
    title: 'Actionable insights',
    description: 'We provide you with a set of actionable insights and an execution roadmap to prioritise the next steps.',
  },
  {
    icon: '/img/work_icon5.png',
    title: 'We are inclusive',
    description: 'We value people\'s differences and encourage diversity of thought and action. We respectfully listen, learn and collaborate to empower those who partner with us.',
  },
];

export default function HowWeWork(): React.JSX.Element {
  return (
    <section id="how-we-work" className={styles.howWeWork}>
      <div className="container">
        <h2 className={styles.sectionTitle}>How we work</h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.principlesContainer}>
          {principles.map((principle, index) => (
            <div key={index} className={styles.principle}>
              <div className={styles.principleIcon}>
                <img src={principle.icon} alt="" />
              </div>
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
