import React from 'react';
import styles from './OurWork.module.css';

const projects = [
  {
    title: 'Business case development',
    description: 'We supported the review and development of a Better Business Case for processing of organic materials for beneficial use.',
    clients: 'Te Tahua O Rangitāne Limited; private industry clients',
    bgColor: '#2d5a6e',
  },
  {
    title: 'Waste minimisation strategies & plans',
    description: 'We have worked with a range of clients on Waste Management & Minimisation Plans (WMMPs), including feasibility studies, and development of bespoke strategies for optimising resource recovery and waste service options.',
    clients: 'Gisborne District Council, Auckland Council, Tauranga District Council',
    bgColor: '#4a7c59',
  },
  {
    title: 'Outcomes & evaluation projects',
    description: 'We have led outcomes framework development and both process and impact evaluation for clients. Our mixed-methods approach includes Social Return on Investment, cost-benefit analysis and value for money reviews.',
    clients: 'Tauranga City Council, Auckland Council, Zero Waste Network',
    bgColor: '#8b6914',
  },
  {
    title: 'Funding & advocacy',
    description: 'We are working with several clients on business cases, and developing applications for funding. An important part of this work is supporting clients with demonstrating their solution, providing evidence of impact, and stress testing their commercial and financial case.',
    clients: '',
    bgColor: '#5a4a7c',
  },
];

export default function OurWork(): React.JSX.Element {
  return (
    <section id="our-work" className={styles.ourWork}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Work</h2>
        <div className={styles.workGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.workCard}
              style={{ backgroundColor: project.bgColor }}
            >
              <div className={styles.workOverlay}>
                <h3 className={styles.workTitle}>{project.title}</h3>
                <p className={styles.workDescription}>{project.description}</p>
                {project.clients && (
                  <p className={styles.workClients}>
                    <strong>Recent clients:</strong> {project.clients}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
