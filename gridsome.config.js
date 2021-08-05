// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [{ path: '/docs/', title: 'Docs' }],
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
              '/docs/settings/',
              '/docs/custom-domain-ssl/',
            ],
          },
          {
            title: 'More',
            items: [
              '/docs/faq/',
              '/docs/about-us/',
            ],
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
          plugins: ['@gridsome/remark-prismjs'],
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
          'en-gb',
        ],
        pathAliases: {
          'en-gb': 'en',
        },
        fallbackLocale: 'en-gb',
        defaultLocale: 'en-gb',
        enablePathRewrite: false,
        rewriteDefaultLanguage: false,
        messages: {
          'en-gb': require('./src/locales/en-gb.json'),
        },
      },
    },
    /*     {
          use: '@gridsome/plugin-sitemap',
          options: {},
        }, */
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs'],
    },
  },
};
