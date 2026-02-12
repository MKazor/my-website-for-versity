import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    icon: '/img/services/icon1.png',
    image: '/img/services/bg1.jpg',
    title: 'Research & Insights',
    description: 'We undertake research, policy and business analysis, including feasibility studies, investment scrutiny, and resource recovery business case development',
  },
  {
    icon: '/img/services/icon2.png',
    image: '/img/services/bg2.jpg',
    title: 'Strategy & Development',
    description: 'We facilitate and co-create business and organisational strategies, with emphasis on ESG factors; & develop effective policies, programmes, and partnerships',
  },
  {
    icon: '/img/services/icon3.png',
    image: '/img/services/bg3.jpg',
    title: 'Implementation & Delivery',
    description: 'We provide government relations advice and advocacy; assistance with funding applications; & project and programme management',
  },
  {
    icon: '/img/services/icon4.png',
    image: '/img/services/bg4.jpg',
    title: 'Evaluation & Review',
    description: 'We develop outcomes and performance frameworks & conduct assessment aimed at driving improvement, generating insights, and maximising impact through compelling storytelling',
  },
];

export default function Services(): React.JSX.Element {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our services & offers</h2>
        <p className={styles.sectionSubtitle}>We want our clients to get the most from their policies, programmes and investments. Our service offering is framed around four interconnected pillars:</p>
        <div className={styles.titleUnderline}></div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.iconWrapper}>
                  <img src={service.icon} alt="" className={styles.serviceIcon} />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
