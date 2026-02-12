import React from 'react';
import styles from './OurWork.module.css';

const projects = [
  {
    title: 'Business case development',
    description: 'We\'ve supported the development of Business Cases for organics processing facilities and for a range of resource recovery infrastructure. We have also supported clients with options assessment, due diligence and feasibility research.',
    clients: 'Te Tahua O Rangitāne; Auckland Council; EnviroNZ Ltd; Wānaka Wastebusters; Gisborne Holdings Limited',
    image: '/img/work/work1.jpg',
  },
  {
    title: 'Waste minimisation strategies & plans',
    description: 'We have worked with a range of clients on Waste Management & Minimisation Plans (WMMPs), including feasibility studies, and development of bespoke strategies for optimising resource recovery and waste service options.',
    clients: 'Gisborne District Council, Auckland Council, Tauranga District Council',
    image: '/img/work/work2.jpg',
  },
  {
    title: 'Outcomes & evaluation projects',
    description: 'We have led outcomes framework development and both process and impact evaluation for clients. Our mixed-methods approach includes Social Return on Investment, cost-benefit analysis and value for money reviews.',
    clients: 'Tauranga City Council, Auckland Council, Zero Waste Network',
    image: '/img/work/work3.jpg',
  },
  {
    title: 'Funding & advocacy',
    description: 'We work with clients on strategic positioning, advocacy strategies, business cases, and applications for funding. An important part of this work is supporting clients with demonstrating their solution, providing evidence of impact, and stress testing their commercial, and economic case.',
    clients: 'Greencycle Ltd; Echo Tech Ltd; WasteMINZ TAO Forum, Zero Waste Tāmaki Makaurau Trust, and Waste & Recycling Industry Association',
    image: '/img/work/work4.jpg',
  },
];

export default function OurWork(): React.JSX.Element {
  return (
    <section id="our-work" className={styles.ourWork}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>OUR WORK</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionSubtitle}>Examples of our projects & client work</p>
        </div>
        <div className={styles.workGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.workCard}
              style={{ backgroundImage: `url(${project.image})` }}
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
