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
