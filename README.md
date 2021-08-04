![Deploy Now](https://github.com/hunsalz/documentation/actions/workflows/ionos-space.yml/badge.svg?branch=content-first)

# Deploy Now Documentation

Uses gridsome with NodeJS v12.22

## Setup

```bash
npm ci
```

```bash
npm run develop
```

```bash
npm run build
```

## Open issues

* add Footer
* check & fix menu icon in mobile view (not visible on home page)
* prettify components (replace CSS / SASS with WindiCSS where possible)
* extract all text snippets from components
* fix search component
* enable plugins: sitemap, PWA, gridsome-plugin-remark-container
* check header meta data
* fix .env in production
* optimize favicon and other icons: https://realfavicongenerator.net/
* dark mode
  * depend on system settings
  * how to handle images not svg with white background?
* images
  * set auto margins
  * separate images from floating text (maybe a dashed border)
* remark 
  * add an arrow icon to all external links
