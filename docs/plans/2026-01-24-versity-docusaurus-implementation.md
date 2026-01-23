# Versity Docusaurus Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a fast, static Docusaurus website for Versity that matches current branding with a single-page landing design.

**Architecture:** Docusaurus 3.x with TypeScript, custom landing page built from React components, CSS custom properties for Versity branding, blog plugin enabled but hidden.

**Tech Stack:** Docusaurus 3.x, React 18, TypeScript, Corepack Yarn

---

### Task 1: Initialize Docusaurus Project

**Files:**
- Create: `versity/website/` (Docusaurus project root)

**Step 1: Initialize with Docusaurus CLI**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
npx create-docusaurus@latest website classic --typescript
```

Select defaults when prompted.

**Step 2: Enable Corepack and set Yarn**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
corepack enable
corepack use yarn@stable
```

**Step 3: Verify installation**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn start
```

Expected: Dev server starts at localhost:3000, default Docusaurus site loads.

**Step 4: Stop dev server and commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git init
git add .
git commit -m "feat: initialize Docusaurus project with TypeScript"
```

---

### Task 2: Configure Docusaurus for Versity

**Files:**
- Modify: `website/docusaurus.config.ts`

**Step 1: Update site configuration**

Replace contents of `website/docusaurus.config.ts` with:

```typescript
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Versity',
  tagline: 'Better decisions. Better outcomes.',
  favicon: 'img/favicon.ico',

  url: 'https://www.versity.co.nz',
  baseUrl: '/',

  organizationName: 'versity',
  projectName: 'versity-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en-nz',
    locales: ['en-nz'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'sustainability consulting, climate, waste management, New Zealand, ESG'},
      {name: 'description', content: 'Versity helps organizations make better decisions for climate, waste, and resource efficiency.'},
    ],
    navbar: {
      title: 'Versity',
      logo: {
        alt: 'Versity Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/#services', label: 'Services', position: 'left'},
        {to: '/#our-work', label: 'Our Work', position: 'left'},
        {to: '/#how-we-work', label: 'How We Work', position: 'left'},
        {to: '/#about', label: 'About', position: 'left'},
        // Blog hidden until ready - uncomment when needed:
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          to: '/#contact',
          label: 'Get in touch',
          position: 'right',
          className: 'navbar-cta-button',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `© ${new Date().getFullYear()} Versity Limited. All rights reserved.`,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
```

**Step 2: Verify config loads**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn start
```

Expected: Site loads with "Versity" in navbar (may have broken logo image, that's OK).

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: configure Docusaurus for Versity site"
```

---

### Task 3: Set Up Custom CSS with Versity Branding

**Files:**
- Modify: `website/src/css/custom.css`

**Step 1: Replace custom.css with Versity branding**

```css
/* Versity Brand Colors */
:root {
  --ifm-color-primary: #066aab;
  --ifm-color-primary-dark: #055d96;
  --ifm-color-primary-darker: #04578d;
  --ifm-color-primary-darkest: #034874;
  --ifm-color-primary-light: #0777c0;
  --ifm-color-primary-lighter: #087dc9;
  --ifm-color-primary-lightest: #0a8ee2;

  --ifm-background-color: #ffffff;
  --ifm-font-color-base: #000000;
  --versity-button-dark: #32373c;

  --ifm-font-family-base: -apple-system, BlinkMacSystemFont, "SF UI Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --ifm-heading-font-family: var(--ifm-font-family-base);

  --ifm-code-font-size: 95%;
  --ifm-navbar-height: 70px;
}

/* Global Styles */
body {
  font-family: var(--ifm-font-family-base);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Navbar Styles */
.navbar {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.navbar__title {
  font-weight: 600;
}

.navbar-cta-button {
  background-color: var(--ifm-color-primary);
  color: white !important;
  border-radius: 3px;
  padding: 8px 16px !important;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.navbar-cta-button:hover {
  background-color: var(--ifm-color-primary-dark);
  color: white !important;
  text-decoration: none;
}

/* Section Styles */
.section {
  padding: 80px 0;
}

.section--alt {
  background-color: #f8f9fa;
}

.section__title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
}

.section__subtitle {
  font-size: 1.25rem;
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Card Styles */
.card {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100%;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--ifm-color-primary);
}

.card__description {
  color: #555;
  line-height: 1.6;
}

/* Button Styles */
.button--primary {
  background-color: var(--ifm-color-primary);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.button--primary:hover {
  background-color: var(--ifm-color-primary-dark);
  color: white;
  text-decoration: none;
}

.button--secondary {
  background-color: var(--versity-button-dark);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.button--secondary:hover {
  background-color: #454a50;
  color: white;
  text-decoration: none;
}

/* Grid Layout */
.grid {
  display: grid;
  gap: 2rem;
}

.grid--2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid--4 {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 996px) {
  .grid--3,
  .grid--4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .grid--2,
  .grid--3,
  .grid--4 {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 60px 0;
  }

  .section__title {
    font-size: 2rem;
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Team Card */
.team-card {
  text-align: center;
}

.team-card__image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid var(--ifm-color-primary);
}

.team-card__name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.team-card__credentials {
  color: var(--ifm-color-primary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.team-card__bio {
  color: #555;
  line-height: 1.6;
}

/* Contact Section */
.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.contact-info__item {
  text-align: center;
}

.contact-info__label {
  font-weight: 600;
  color: var(--ifm-color-primary);
  margin-bottom: 0.5rem;
}

.contact-info__value a {
  color: inherit;
  text-decoration: none;
}

.contact-info__value a:hover {
  color: var(--ifm-color-primary);
}

/* Hide default footer links */
.footer__links {
  display: none;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
```

**Step 2: Verify styles load**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn start
```

Expected: Site loads with blue primary color visible in navbar elements.

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: add Versity branding and custom CSS"
```

---

### Task 4: Create Hero Component

**Files:**
- Create: `website/src/components/Hero.tsx`

**Step 1: Create Hero component**

```typescript
import React from 'react';
import styles from './Hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Better decisions.<br />Better outcomes.
          </h1>
          <p className={styles.heroSubtitle}>
            We partner with organisations across private, public, and non-profit sectors
            to navigate complex challenges in climate, waste, and resource efficiency.
          </p>
          <p className={styles.heroDescription}>
            The name Versity derives from the Latin "versus," meaning "to turn" —
            representing the shifts in thinking needed to create sustainable change.
          </p>
          <a href="#contact" className="button--primary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create Hero CSS module**

Create file `website/src/components/Hero.module.css`:

```css
.hero {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  padding: 120px 0 100px;
  text-align: center;
}

.heroContent {
  max-width: 800px;
  margin: 0 auto;
}

.heroTitle {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #000;
}

.heroSubtitle {
  font-size: 1.35rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.heroDescription {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .hero {
    padding: 80px 0 60px;
  }

  .heroTitle {
    font-size: 2.5rem;
  }

  .heroSubtitle {
    font-size: 1.15rem;
  }
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create Hero component"
```

---

### Task 5: Create Services Component

**Files:**
- Create: `website/src/components/Services.tsx`
- Create: `website/src/components/Services.module.css`

**Step 1: Create Services component**

```typescript
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
```

**Step 2: Create Services CSS module**

```css
.servicesGrid {
  margin-top: 2rem;
}

@media (max-width: 1100px) {
  .servicesGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .servicesGrid {
    grid-template-columns: 1fr;
  }
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create Services component"
```

---

### Task 6: Create OurWork Component

**Files:**
- Create: `website/src/components/OurWork.tsx`
- Create: `website/src/components/OurWork.module.css`

**Step 1: Create OurWork component**

```typescript
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
```

**Step 2: Create OurWork CSS module**

```css
.projectsGrid {
  margin-top: 2rem;
}

.category {
  display: inline-block;
  background-color: #066aab;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 3px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create OurWork component"
```

---

### Task 7: Create HowWeWork Component

**Files:**
- Create: `website/src/components/HowWeWork.tsx`
- Create: `website/src/components/HowWeWork.module.css`

**Step 1: Create HowWeWork component**

```typescript
import React from 'react';
import styles from './HowWeWork.module.css';

const principles = [
  {
    title: 'Client Partnership',
    description: 'We work alongside you, not just for you. Your knowledge combined with our expertise creates better outcomes.',
  },
  {
    title: 'Simplicity',
    description: 'Complex problems don\'t always need complex solutions. We focus on clarity and practical approaches.',
  },
  {
    title: 'Capability Building',
    description: 'We aim to leave you stronger. Knowledge transfer and skill development are built into everything we do.',
  },
  {
    title: 'Actionable Insights',
    description: 'Research and analysis that leads to clear next steps, not reports that gather dust on shelves.',
  },
  {
    title: 'Inclusive Collaboration',
    description: 'The best solutions come from diverse perspectives. We bring people together to solve shared challenges.',
  },
];

export default function HowWeWork(): React.JSX.Element {
  return (
    <section id="how-we-work" className="section">
      <div className="container">
        <h2 className="section__title">How We Work</h2>
        <p className="section__subtitle">
          Our approach is built on principles that ensure meaningful, lasting impact.
        </p>
        <div className={styles.principlesContainer}>
          {principles.map((principle, index) => (
            <div key={index} className={styles.principle}>
              <div className={styles.principleNumber}>{index + 1}</div>
              <div className={styles.principleContent}>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 2: Create HowWeWork CSS module**

```css
.principlesContainer {
  max-width: 800px;
  margin: 2rem auto 0;
}

.principle {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;
}

.principle:last-child {
  border-bottom: none;
}

.principleNumber {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background-color: #066aab;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.principleContent {
  flex: 1;
}

.principleTitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000;
}

.principleDescription {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 576px) {
  .principle {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create HowWeWork component"
```

---

### Task 8: Create About Component

**Files:**
- Create: `website/src/components/About.tsx`
- Create: `website/src/components/About.module.css`

**Step 1: Create About component**

```typescript
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
```

**Step 2: Create About CSS module**

```css
.teamGrid {
  max-width: 900px;
  margin: 2rem auto 0;
}

.teamCard {
  text-align: center;
  padding: 2.5rem 2rem;
}

.teamImage {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #066aab;
}

.teamName {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #000;
}

.teamCredentials {
  color: #066aab;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.teamBio {
  color: #555;
  line-height: 1.6;
  margin: 0;
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create About component with team profiles"
```

---

### Task 9: Create Contact Component

**Files:**
- Create: `website/src/components/Contact.tsx`
- Create: `website/src/components/Contact.module.css`

**Step 1: Create Contact component**

```typescript
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
```

**Step 2: Create Contact CSS module**

```css
.contactGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.contactItem {
  text-align: center;
  min-width: 180px;
}

.contactLabel {
  font-weight: 600;
  color: #066aab;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contactValue {
  font-size: 1.1rem;
  color: #333;
}

.contactValue a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contactValue a:hover {
  color: #066aab;
}

@media (max-width: 576px) {
  .contactGrid {
    flex-direction: column;
    gap: 2rem;
  }
}
```

**Step 3: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create Contact component"
```

---

### Task 10: Create Landing Page

**Files:**
- Modify: `website/src/pages/index.tsx`

**Step 1: Replace index.tsx with landing page**

```typescript
import React from 'react';
import Layout from '@theme/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import HowWeWork from '../components/HowWeWork';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Sustainability Consulting"
      description="Versity helps organisations make better decisions for climate, waste, and resource efficiency in New Zealand."
    >
      <main>
        <Hero />
        <Services />
        <OurWork />
        <HowWeWork />
        <About />
        <Contact />
      </main>
    </Layout>
  );
}
```

**Step 2: Delete unused default pages**

```bash
rm -f /home/cameron_beattie/Documents/VSCode_projects/versity/website/src/components/HomepageFeatures/index.tsx
rm -f /home/cameron_beattie/Documents/VSCode_projects/versity/website/src/components/HomepageFeatures/styles.module.css
rmdir /home/cameron_beattie/Documents/VSCode_projects/versity/website/src/components/HomepageFeatures 2>/dev/null || true
```

**Step 3: Verify site renders**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn start
```

Expected: Full landing page loads with all sections visible and working anchor scroll navigation.

**Step 4: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "feat: create single-page landing with all sections"
```

---

### Task 11: Add Placeholder Images and Clean Up

**Files:**
- Create: `website/static/img/team/` directory
- Modify: `website/static/img/logo.png` (placeholder)

**Step 1: Create team images directory**

```bash
mkdir -p /home/cameron_beattie/Documents/VSCode_projects/versity/website/static/img/team
```

**Step 2: Create placeholder logo**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website/static/img
curl -o logo.png "https://ui-avatars.com/api/?name=V&size=200&background=066aab&color=fff&bold=true&format=png"
```

Note: Replace with actual Versity logo file when available.

**Step 3: Delete unused docs folder and blog sample posts**

```bash
rm -rf /home/cameron_beattie/Documents/VSCode_projects/versity/website/docs
rm -rf /home/cameron_beattie/Documents/VSCode_projects/versity/website/blog/*
```

**Step 4: Create .gitkeep for blog directory**

```bash
touch /home/cameron_beattie/Documents/VSCode_projects/versity/website/blog/.gitkeep
```

**Step 5: Final verification**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn build
```

Expected: Build completes successfully with no errors.

**Step 6: Commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "chore: add placeholder assets and clean up unused files"
```

---

### Task 12: Test Production Build

**Step 1: Build for production**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn build
```

Expected: Build completes, outputs to `build/` directory.

**Step 2: Serve production build locally**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity/website
yarn serve
```

Expected: Production site serves at localhost:3000, all sections render correctly, navigation works.

**Step 3: Final commit**

```bash
cd /home/cameron_beattie/Documents/VSCode_projects/versity
git add .
git commit -m "chore: verify production build"
```

---

## Summary

After completing all tasks, you will have:

1. A fully functional Docusaurus site matching Versity branding
2. Single-page landing with Hero, Services, Our Work, How We Work, About, and Contact sections
3. Anchor navigation for smooth scrolling
4. Blog capability ready (hidden until needed)
5. Production-ready static build

**To deploy:** Upload contents of `website/build/` to any static hosting service (Netlify, Vercel, S3, etc.)

**To enable blog later:** Uncomment the blog line in `docusaurus.config.ts` navbar items and add posts to `blog/` directory.
