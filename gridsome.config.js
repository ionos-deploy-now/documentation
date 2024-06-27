// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const showBlog = process.env.SHOW_BLOG === "true";
const includedMarkdownPaths = [
  "docs",
  "team",
  ...(showBlog ? ["blog"] : []),
].join("|");
const markdownPath = `**/(${includedMarkdownPaths})/*.md`;
const fontFamilySans = '"Open Sans", ui-sans-serif, system-ui, sans-serif';
console.log(process.env.SITE_URL, JSON.stringify(process.env.SITE_URL));

module.exports = {
  titleTemplate: "%s | IONOS Deploy Now",
  siteDescription:
    "Deploy Now is a platform for building and hosting Static Site Generators and Single Page Applications on inhouse engineered IONOS infrastructure.",
  siteUrl: process.env.SITE_URL,
  pathPrefix: process.env.PATH_PREFIX ? process.env.PATH_PREFIX : "",
  icon: {
    favicon: {
      src: "./static/favicon.png",
      sizes: [16, 32, 96],
    },
    touchicon: {
      src: "./static/favicon.png",
      sizes: [76, 152, 120, 167],
      precomposed: true,
    },
  },
  settings: {
    web: process.env.URL_WEB || "",
    twitter: process.env.URL_TWITTER || "",
    github: process.env.URL_GITHUB || "",
    branch: process.env.GITHUB_REF_NAME || "main",
    showBlog,
    nav: {
      links: [
        { path: "/docs/", title: "Docs" },
        { path: "/docs/faq/", title: "FAQ" },
        ...(showBlog ? [{ path: "/blog/", title: "Blog" }] : []),
        { path: "/about-us/", title: "About us" },
        { path: "https://www.ionos.com/hosting/deploy-now?utm_source=deploy-now-docs&utm_medium=navigation&utm_campaign=sign-up#pricing", title: "Pricing" },
      ],
    },
    sidebar: [
      {
        name: "docs",
        sections: [
          {
            title: "Getting Started",
            items: [
              "/docs/",
              "/docs/framework-samples/",
              "/docs/from-cmd-line/",
              "/docs/from-repo/",
            ],
          },
          {
            title: "Stacks",
            items: ["/docs/deploy-static-sites/", "/docs/deploy-php-apps/"],
          },
          {
            title: "Configuration",
            items: [
              "/docs/github-actions-customization/",
              "/docs/deployment-configuration/",
              "/docs/runtime-configuration/",
              "/docs/apache-configuration-htaccess/",
            ],
          },
          {
            title: "Features",
            items: [
              "/docs/git-integration/",
              "/docs/staging-deployments/",
              "/docs/multi-deployments/",
              "/docs/database/",
              "/docs/domain-tls/",
              "/docs/deployment-viewer/",
              "/docs/visitor-statistics/",
              "/docs/cronjobs/",
            ],
          },
          {
            title: "More",
            items: [
              "/docs/faq/",
              ...(showBlog ? ["/blog/"] : []),
              "/about-us/",
              "/docs/create-sample/",
            ],
            external: [
              {
                title: "Changelog",
                path: "https://github.com/ionos-deploy-now/ionos-deploy-now/blob/main/CHANGELOG.md",
              },
              {
                title: "Request a feature",
                path: "https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose",
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        baseDir: "./content",
        path: markdownPath,
        typeName: "MarkdownPage",
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["noopener", "noreferrer"],
        },
      },
    },
    {
      use: "gridsome-plugin-windicss",
      options: {
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: ["en"],
        fallbackLocale: "en",
        defaultLocale: "en",
        enablePathGeneration: false,
        enablePathRewrite: false,
        rewriteDefaultLanguage: false,
        messages: {
          en: require("./src/locales/en.json"),
        },
      },
    },
    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
          "text/html",
          "application/javascript",
          "text/css",
          "image/png",
        ],
        redirections: [
          {
            from: "/samples/",
            to: "/docs/framework-samples/",
          },
          {
            from: "/samples",
            to: "/docs/framework-samples/",
          },
        ],
        forceHttps: true,
        disableDirectoryIndex: true,
        disableServerSignature: true,
        pingable: false,
        // preventScriptInjection: true,
        contentSecurityPolicy: {
          "default-src": ["self"],
          "connect-src": [
            "self",
            "data:",
            "*.ionos.space",
            "*.uicdn.net",
            "*.producthunt.com",
          ],
          "font-src": ["self", "data:"],
          "frame-src": ["self", "data:", "*.youtube-nocookie.com"],
          "img-src": [
            "self",
            "data:",
            "*.ionos.space",
            "*.uicdn.net",
            "*.producthunt.com",
          ],
          "script-src": ["self", "unsafe-inline"], // remove any inline scripts so that 'unsafe-inline' gets obsolete
          "style-src": ["self", "data:", "unsafe-inline"],
        },
        customHeaders: {
          "X-Frame-Options": "allow-from *.youtube-nocookie.com",
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "interest-cohort=()",
        },
        notCachedFiles: ["/service-worker.js", "/assets/js/service-worker.js"],
      },
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: ["/", "/about-us", "/docs"],
          fileTypes: ["document", "script", "style", "image"],
        },
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        exclude: ["/team/*"],
      },
    },
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            crawlDelay: 10,
          },
        ],
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        // add gridsome-plugin-remark-mermaid always first
        [
          "gridsome-plugin-remark-mermaid",
          {
            mermaidOptions: {
              //fontFamily: fontFamilySans,
              themeVariables: {
                edgeLabelBackground: "#fff",
              },
              //sequence: {
              //  actorFontFamily: fontFamilySans,
              //  noteFontFamily: fontFamilySans,
              //  messageFontFamily: fontFamilySans,
              //},
              flowchart: {
                diagramPadding: 10,
              },
            },
          },
        ],
        "@noxify/gridsome-remark-table-align",
        [
          "@gridsome/remark-prismjs",
          {
            showLineNumbers: true,
          },
        ],
        "gridsome-plugin-remark-container",
      ],
    },
  },
};
