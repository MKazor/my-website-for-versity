import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'Research & Insights',
    description: 'Feasibility studies, investment analysis, and business cases that provide the evidence base for sound decision-making.',
  },
  {
    title: 'Strategy & Development',
    description: 'Policy creation and organisational strategies with ESG focus, helping you chart a clear path forward.',
  },
  {
    title: 'Implementation & Delivery',
    description: 'Government relations, funding assistance, and project management to turn plans into reality.',
  },
  {
    title: 'Evaluation & Review',
    description: 'Outcomes frameworks, impact assessment, and storytelling that demonstrates your achievements.',
  },
];

export default function Services(): React.JSX.Element {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section__title">What We Do</h2>
        <p className="section__subtitle">
          We offer end-to-end support across the full lifecycle of sustainability initiatives.
        </p>
        <div className={`grid grid--4 ${styles.servicesGrid}`}>
          {services.map((service, index) => (
            <div key={index} className="card">
              <h3 className="card__title">{service.title}</h3>
              <p className="card__description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
