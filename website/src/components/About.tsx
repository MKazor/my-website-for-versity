import React from 'react';
import styles from './About.module.css';

const team = [
  {
    name: 'Michelle Kazor',
    title: 'MSES; BA Director & Consultant',
    image: '/img/team/michelle.jpg',
    bio: 'Michelle is the founder of Versity, with over fifteen years\' consulting experience across corporate, government and not-for-profit sectors. She focuses on strategy, policy, service design and investment advisory, working at the intersection of public purpose and practical delivery. Previously a Director at the Ministry for the Environment, she oversaw significant public investment in waste infrastructure and product stewardship initiatives. In addition to her consulting practice, she is a member of the national Waste Advisory Board and is on the Board of the Trust for Destruction of Synthetic Refrigerants, an accredited product stewardship organisation. Michelle works with clients to design practical, investable solutions that deliver long-term environmental and economic outcomes.',
    linkedin: 'https://www.linkedin.com/in/michellekazor/',
  },
  {
    name: 'Joanne McGregor',
    title: 'MEng; BCEng Director & Consultant',
    image: '/img/team/joanne.jpg',
    bio: 'Joanne is a civil engineer with long-standing involvement in the waste sector. Her extensive public and private experience, includes two years as a WMF Senior Investment Manager. Joanne produces actionable research, technical due diligence and feasibility review, project development, and resource recovery business cases.',
    linkedin: 'https://www.linkedin.com/in/joanne-mcgregor/',
  },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className={styles.sectionTitle}>WHO WE ARE</h2>
        <div className={styles.titleUnderline}></div>
        <p className={styles.introText}>
          The practice is led by Michelle Kazor and Joanne McGregor. Together we bring senior
          leadership, industry and consulting experience across corporate, local and central
          government and non-profit sectors.
        </p>
        <div className={styles.teamContainer}>
          {team.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.teamImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=200&background=066aab&color=fff`;
                  }}
                />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamTitle}>{member.title}</p>
                <p className={styles.teamBio}>{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinLink}
                >
                  <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
