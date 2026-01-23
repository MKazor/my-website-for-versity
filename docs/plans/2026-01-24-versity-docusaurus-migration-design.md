# Versity Website Migration to Docusaurus

## Overview

Migrate www.versity.co.nz from its current platform to a Docusaurus-based static website for improved performance, with blog capability for future use.

## Goals

- Fast static site with minimal load times
- Match current Versity branding closely
- Single-page landing design with scroll navigation
- Blog feature ready but hidden until needed

## Project Structure

```
versity-website/
├── docusaurus.config.ts    # Site configuration
├── src/
│   ├── pages/
│   │   └── index.tsx       # Single-page landing (all sections)
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── OurWork.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── css/
│       └── custom.css      # Versity branding overrides
├── static/
│   └── img/
│       ├── logo.png
│       └── team/           # Team photos
├── blog/                   # Empty for now, ready for future use
└── package.json
```

## Branding & Styling

### Color Palette

```css
:root {
  --ifm-color-primary: #066aab;        /* Versity blue */
  --ifm-color-primary-dark: #055d96;
  --ifm-color-primary-light: #0777c0;
  --ifm-background-color: #ffffff;
  --ifm-font-color-base: #000000;
  --ifm-button-background-color: #32373c;
}
```

### Typography

- Primary font: `-apple-system, BlinkMacSystemFont, "SF UI Text", sans-serif`
- Clean, professional appearance with generous whitespace

### Component Styling

- Blue buttons (#066aab) with white text, 3px border-radius
- White backgrounds with clear section separation
- Professional imagery placement

### Navbar

- Logo on left
- Section links as anchor scrolls (Services, Our Work, How We Work, About)
- "Get in touch" as blue CTA button on right
- Sticky header

## Page Sections

### Hero

- Headline: "Better decisions. Better outcomes."
- Subtext: Climate, waste, and resource efficiency consulting focus
- CTA button linking to contact section

### Services

Four cards in grid layout:

1. **Research & Insights** - feasibility studies, investment analysis, business cases
2. **Strategy & Development** - policy creation, ESG-focused organizational strategies
3. **Implementation & Delivery** - government relations, funding assistance, project management
4. **Evaluation & Review** - outcomes frameworks, impact assessment, storytelling

### Our Work

Portfolio cards showing example projects:

- Business case development for organic material processing
- Waste minimisation strategies and plans
- Outcomes and evaluation projects
- Funding and advocacy support

### How We Work

Core principles:

- Client partnership
- Simplicity
- Capability building
- Actionable insights
- Inclusive collaboration

### About

Team cards with photos:

- **Michelle Kazor** (MSES; BA) - former Ministry for Environment Waste Investment Director
- **Joanne McGregor** (MsEng; BCEng) - civil engineer with waste sector experience

### Contact (Footer)

- Phone: +64 21 677 672
- Email: hello@versity.co.nz
- Location: Auckland, New Zealand
- LinkedIn: versity-limited

## Technical Configuration

### Docusaurus Setup

- Disable docs feature (not needed)
- Blog enabled but hidden from navbar
- SEO metadata configured
- Sitemap generation enabled

### Performance

- Static site generation (pre-rendered HTML)
- Lazy loading for images
- Minimal JavaScript bundle
- System fonts (no external font loading)

### Package Manager

- Corepack with Yarn
- `corepack enable`
- `yarn install`, `yarn start`, `yarn build`

### Blog (Future)

- Located in `/blog` directory
- Enable in navbar when first post is added
- Categories: climate, waste, policy, sustainability

### Deployment

- Build outputs to `build/` folder
- Compatible with: Netlify, Vercel, GitHub Pages, AWS S3/CloudFront

## Content to Migrate

All content sourced from current www.versity.co.nz single-page site:

- Hero text and tagline
- Four service descriptions
- Work portfolio examples
- Team bios and photos
- Contact information
- Company story/purpose ("versus" = to turn)
