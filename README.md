# Versity Website

A Docusaurus-based static website for [Versity Limited](https://www.versity.co.nz).

## Prerequisites

- Node.js 18+ (recommended: 22.x)
- Corepack enabled

## Setup

1. Enable Corepack (if not already enabled):

```bash
corepack enable
```

2. Navigate to the website directory:

```bash
cd /path/to/versity/website
```

3. Install dependencies:

```bash
corepack yarn install
```

## Local Development

Start the development server with hot reloading:

```bash
corepack yarn start
```

The site will be available at `http://localhost:3000`. Most changes are reflected live without having to restart the server.

## Build

Create a production build:

```bash
corepack yarn build
```

This command generates static content into the `build/` directory.

## Preview Production Build

To preview the production build locally:

```bash
corepack yarn serve
```

## Project Structure

```
website/
├── src/
│   ├── components/       # React components
│   │   ├── Hero.tsx
│   │   ├── OurPurpose.tsx
│   │   ├── WhatWeBelieve.tsx
│   │   ├── Services.tsx
│   │   ├── OurWork.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── css/
│   │   └── custom.css    # Global styles and @font-face declarations
│   └── pages/
│       └── index.tsx     # Landing page
├── static/
│   ├── fonts/            # SF UI Text font files
│   └── img/              # Images and icons
├── docusaurus.config.ts  # Docusaurus configuration
└── package.json
```

## Deployment

After building, deploy the contents of the `build/` directory to any static hosting service (AWS S3, Netlify, Vercel, etc.).

### Using GitHub Pages

Using SSH:

```bash
USE_SSH=true corepack yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> corepack yarn deploy
```

## Technology Stack

- [Docusaurus 3.x](https://docusaurus.io/) - Static site generator
- [React 18](https://react.dev/) - UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling
- SF UI Text - Typography (self-hosted)
