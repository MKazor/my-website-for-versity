import React from 'react';
import styles from './Contact.module.css';

const contactItems = [
  {
    icon: '/img/icons/call.png',
    label: 'Phone',
    value: '+64 21 677 672',
    href: 'tel:+6421677672',
  },
  {
    icon: '/img/icons/mail.png',
    label: 'Email',
    value: 'hello@versity.co.nz',
    href: 'mailto:hello@versity.co.nz',
  },
  {
    icon: '/img/icons/location.png',
    label: 'Location',
    value: 'Auckland, New Zealand',
    href: null,
  },
  {
    icon: '/img/icons/linkedin.png',
    label: 'LinkedIn',
    value: 'versity-limited',
    href: 'https://www.linkedin.com/company/versity-limited',
    external: true,
  },
];

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className={styles.sectionTitle}>WE LOVE TO CHAT</h2>
        <div className={styles.titleUnderline}></div>
        <div className={styles.contactContainer}>
          {contactItems.map((item, index) => (
            <div key={index} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <img src={item.icon} alt={item.label} />
              </div>
              <div className={styles.contactText}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
