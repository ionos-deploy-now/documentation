// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const showBlog = process.env.SHOW_BLOG === 'true' || false;

module.exports = {
  siteName: 'Deploy Now - Documentation',
  siteDescription: 'Documentation of Deploy Now',
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX ? process.env.PATH_PREFIX : '',
  icon: {
    favicon: {
      src: './static/favicon.png',
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: './static/favicon.png',
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  settings: {
    web: process.env.URL_WEB || '',
    twitter: process.env.URL_TWITTER || '',
    github: process.env.URL_GITHUB || '',
    showBlog,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' },
        { path: '/docs/framework-samples/', title: 'Samples' },
        { path: '/docs/faq/', title: 'FAQ' },
        { path: '/about-us/', title: 'About us' },
        ...(showBlog ? [{ path: '/blog/', title: 'Blog' }] : []),
      ],
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/git-integration/',
              '/docs/staging-deployments/',
              '/docs/framework-samples/',
            ],
          },
          {
            title: 'Configuration',
            items: [
              '/docs/configuration-overview/',
              '/docs/explicit-build-configuration/',
              '/docs/github-actions-customization/',
              '/docs/domain-tls/',
            ],
          },
          {
            title: 'More',
            items: ['/docs/faq/', '/about-us/'],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
        },
      },
    },
    {
      use: 'gridsome-plugin-windicss',
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [
          'en',
        ],
        fallbackLocale: 'en',
        defaultLocale: 'en',
        enablePathGeneration: false,
        enablePathRewrite: false,
        rewriteDefaultLanguage: false,
        messages: {
          'en': require('./src/locales/en.json'),
        },
      },
    },
    /* {
      use: '@gridsome/plugin-sitemap',
      options: {},
    }, */
  ],
  transformers: {
    remark: {
      plugins: [
        // add gridsome-plugin-remark-mermaid always first
        ['gridsome-plugin-remark-mermaid', {
          mermaidOptions: {
            themeVariables: {
              edgeLabelBackground: '#fff',
            },
          },
        }],
        '@noxify/gridsome-remark-table-align',
        '@gridsome/remark-prismjs',
        'gridsome-plugin-remark-container',
      ],
    },
  },
};
