import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    icon: '🔍',
    title: 'Research & Insights',
    description: 'We undertake research, policy and business analysis, including feasibility studies, investment scrutiny, and resource recovery business case development',
  },
  {
    icon: '📋',
    title: 'Strategy & Development',
    description: 'We facilitate and co-create business and organisational strategies, with emphasis on ESG factors; & develop effective policies, programmes, and partnerships',
  },
  {
    icon: '🚀',
    title: 'Implementation & Delivery',
    description: 'We provide government relations advice and advocacy; assistance with funding applications; & project and programme management',
  },
  {
    icon: '📊',
    title: 'Evaluation & Review',
    description: 'We develop outcomes and performance frameworks & conduct assessment aimed at driving improvement, generating insights, and maximising impact through compelling storytelling',
  },
];

export default function Services(): React.JSX.Element {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our services & offers</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
