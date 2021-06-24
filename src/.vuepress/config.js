const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Deploy Now",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Documentation of Deploy Now",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Overpass" }],
    ["meta", { name: "charset", content: "UTF-8" }],
    [
      "meta",
      { name: "application-name", content: "Deploy Now - Documentation" },
    ],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "mobile-web-app-capable", content: "yes" }],
    // attach common sizes for iphone and ipads
    ["link", { name: "apple-touch-icon", content: "/icon-192x192.png" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      {
        name: "apple-mobile-web-app-title",
        content: "Deploy Now - Documentation",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
    ],
    ["meta", { name: "msapplication-navbutton-color", content: "#3eaf7c" }],
    ["meta", { name: "msapplication-starturl", content: "/" }],
    ["meta", { name: "msapplication-TileColor", content: "#ffffff" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: "/deploynow-nologo-default.svg",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    search: true,
    searchMaxSuggestions: 10,
    searchPlaceholder: "Search by topic",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Advanced",
        link: "/advanced/",
      },
/*       {
        text: "Showroom",
        link: "/showroom/",
      }, */
      {
        text: "About us",
        link: "/about/",
      },
      {
        text: "Login",
        link: "https://ionos.space",
      },
    ],
    sidebar: [
      {
        title: "Guide",
        path: "/guide/",
        collapsable: true,
        children: ["/guide/", "/guide/samples"],
      },
      {
        title: "Advanced",
        collapsable: true,
        children: [
          "/advanced/",
          "/advanced/custom-domains+ssl"
        ],
      },
      {
        title: "FAQ",
        collapsable: false,
        path: "/faq/",
      },
      {
        title: "Change log",
        collapsable: false,
        path: "https://github.com/ionos-deploy-now/ionos-deploy-now/blob/main/CHANGELOG.md"
      },
      {
        title: "GitHub",
        collapsable: false,
        path: "https://github.com/ionos-deploy-now/ionos-deploy-now"
      }
    ],
  },

  /**
   * Apply markdown，ref：https://v1.vuepress.vuejs.org/config/#markdown
   */
  markdown: {
    lineNumbers: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@kawarimidoll/tailwind",
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    ["vuepress-plugin-code-copy", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available",
          buttonText: "Refresh",
        },
      },
    ],
    [
      "check-md",
      {
        pattern: "**/*.md",
      },
    ],
    [
      "sitemap",
      {
        hostname: "http://docs.ionos.space/",
      },
    ],
  ],
};
