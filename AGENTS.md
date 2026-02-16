# Versity Project

## Overview

Versity is a New Zealand sustainability consulting firm's marketing website. The site is a single-page landing design covering the company's services, work portfolio, team bios, and contact information. Built with Docusaurus 3.9.2 and deployed to Cloudflare Pages.

- **URL**: https://www.versity.co.nz
- **Domain**: versity.co.nz (DNS managed via Cloudflare)
- **Repository**: git@github.com-versity:MKazor/my-website-for-versity.git

## Tech Stack

- **Framework**: Docusaurus 3.9.2 (static site generator)
- **UI**: React 19, TypeScript 5.6
- **Package Manager**: Yarn 4.12.0 (via Corepack)
- **Deployment**: Cloudflare Pages via Wrangler
- **Styling**: CSS Modules per component + global custom.css
- **Typography**: SF UI Text (self-hosted TTF, 4 weights)

## Project Structure

```
versity/
├── CLAUDE.md
├── docs/plans/              # Design & implementation planning docs
└── website/                 # Docusaurus project root
    ├── docusaurus.config.ts
    ├── package.json
    ├── src/
    │   ├── pages/index.tsx  # Single landing page (imports all section components)
    │   ├── components/      # Section components, each with .tsx + .module.css
    │   │   ├── Hero.tsx
    │   │   ├── OurPurpose.tsx
    │   │   ├── Services.tsx
    │   │   ├── OurWork.tsx
    │   │   ├── WhatWeBelieve.tsx
    │   │   ├── HowWeWork.tsx
    │   │   ├── About.tsx
    │   │   └── Contact.tsx
    │   └── css/custom.css   # Global styles, font-face, Docusaurus overrides
    ├── static/
    │   ├── fonts/           # SF UI Text TTF files
    │   └── img/             # Logo, favicon, hero, services, work, team images
    ├── blog/                # Empty (configured but hidden from navbar)
    └── build/               # Production output
```

## Brand Colors

| Color          | Hex       | Usage                                |
|----------------|-----------|--------------------------------------|
| Primary Aqua   | `#0cbbd1` | Buttons, CTAs, highlights            |
| Primary Teal   | `#01838e` | Section backgrounds, dark accents    |
| Orange/Accent  | `#f0592b` | Section underlines, highlights       |
| Light BG       | `#f8f9fa` | Alternate section backgrounds        |

## Development Commands

All commands run from the `website/` directory:

```bash
cd website
yarn start          # Dev server with hot reload (localhost:3000)
yarn build          # Production build to build/
yarn serve          # Preview production build locally
yarn typecheck      # TypeScript validation
yarn clear          # Clear Docusaurus cache
yarn wrangler <cmd> # Cloudflare Pages deployment
```

## Key Configuration

- **Docs**: Disabled (not used)
- **Blog**: Enabled but hidden from navbar (uncomment in config when ready)
- **Color mode**: Light only, dark mode switch disabled
- **Locale**: en-nz
- **Sitemap**: Enabled, weekly updates

## Page Sections (in order)

1. **Hero** - Banner with tagline "Better decisions. Better outcomes." and CTA
2. **Our Purpose** - Company mission and name etymology
3. **Services** - 4-card grid: Research, Strategy, Implementation, Evaluation
4. **Our Work** - 4-column portfolio with hover overlays showing client work
5. **What We Believe** - Problem statement and call to action
6. **How We Work** - 5 principles: client-focused, simple, capability-raising, actionable, inclusive
7. **About** ("Who we are") - Team bios for Michelle Kazor and Joanne McGregor
8. **Contact** - Phone, email, location (Auckland, NZ), LinkedIn

## DNS Management

- **Domain**: versity.co.nz
- **DNS Provider**: Cloudflare
- **Nameservers**: rommy.ns.cloudflare.com, rosalyn.ns.cloudflare.com
- **Original hosting**: DreamHost (migrated to Cloudflare)
- **Email**: Microsoft 365 (Outlook)
