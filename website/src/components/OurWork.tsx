import React from 'react';
import styles from './OurWork.module.css';

const projects = [
  {
    title: 'Organic Material Processing',
    description: 'Developed comprehensive business cases for organic material processing facilities, supporting investment decisions for councils and private operators.',
    category: 'Business Case',
  },
  {
    title: 'Waste Minimisation Strategies',
    description: 'Created waste minimisation strategies and implementation plans for local authorities across New Zealand.',
    category: 'Strategy',
  },
  {
    title: 'Outcomes & Evaluation',
    description: 'Designed outcomes frameworks and conducted impact assessments for government-funded sustainability programmes.',
    category: 'Evaluation',
  },
  {
    title: 'Funding & Advocacy',
    description: 'Supported organisations in securing funding and building relationships with key stakeholders and decision-makers.',
    category: 'Implementation',
  },
];

export default function OurWork(): React.JSX.Element {
  return (
    <section id="our-work" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Our Work</h2>
        <p className="section__subtitle">
          Examples of how we've helped organisations achieve their sustainability goals.
        </p>
        <div className={`grid grid--2 ${styles.projectsGrid}`}>
          {projects.map((project, index) => (
            <div key={index} className="card">
              <span className={styles.category}>{project.category}</span>
              <h3 className="card__title">{project.title}</h3>
              <p className="card__description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
