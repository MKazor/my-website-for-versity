import React from 'react';
import styles from './Contact.module.css';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section__title">Get in Touch</h2>
        <p className="section__subtitle">
          Ready to start a conversation? We'd love to hear from you.
        </p>
        <div className={styles.contactGrid}>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Phone</div>
            <div className={styles.contactValue}>
              <a href="tel:+6421677672">+64 21 677 672</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Email</div>
            <div className={styles.contactValue}>
              <a href="mailto:hello@versity.co.nz">hello@versity.co.nz</a>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>Location</div>
            <div className={styles.contactValue}>Auckland, New Zealand</div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactLabel}>LinkedIn</div>
            <div className={styles.contactValue}>
              <a
                href="https://www.linkedin.com/company/versity-limited"
                target="_blank"
                rel="noopener noreferrer"
              >
                versity-limited
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
