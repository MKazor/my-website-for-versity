import React from 'react';
import styles from './About.module.css';

const team = [
  {
    name: 'Michelle Kazor',
    credentials: 'MSES; BA',
    image: '/img/team/michelle.jpg',
    bio: 'Michelle brings extensive experience from her role as Waste Investment Director at the Ministry for the Environment, where she led significant funding programmes for waste infrastructure and innovation across New Zealand.',
  },
  {
    name: 'Joanne McGregor',
    credentials: 'MEng; BCEng',
    image: '/img/team/joanne.jpg',
    bio: 'Joanne is a civil engineer with deep expertise in the waste sector. She combines technical knowledge with strategic thinking to help organisations implement practical solutions for complex environmental challenges.',
  },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Meet the Team</h2>
        <p className="section__subtitle">
          Experienced professionals dedicated to driving sustainable outcomes.
        </p>
        <div className={`grid grid--2 ${styles.teamGrid}`}>
          {team.map((member, index) => (
            <div key={index} className={`card ${styles.teamCard}`}>
              <img
                src={member.image}
                alt={member.name}
                className={styles.teamImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=180&background=066aab&color=fff`;
                }}
              />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamCredentials}>{member.credentials}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
