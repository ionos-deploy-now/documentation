![Deploy Now](https://github.com/hunsalz/documentation/actions/workflows/ionos-space.yml/badge.svg?branch=content-first)

# Deploy Now Documentation

Uses [Gridsome](https://gridsome.org) with NodeJS v12.22

## Setup

Install dependencies and edit new `.env` file
```bash
npm ci
cp .env.example .env
```

Run local server
```bash
npm run develop
```

Create static build in `dist` folder
```bash
npm run build
```

## Open issues

* prettify components (replace CSS / SASS with WindiCSS where possible)
* enable plugins: sitemap, PWA, gridsome-plugin-remark-container
* check header meta data
* optimize favicon and other icons: https://realfavicongenerator.net/
* images
  * separate images from floating text (maybe a dashed border)
* remark 
  * add an arrow icon to all external links
* add an changelog link in sitebar 
  * which source tbd 
    * a) e.g. https://twitter.com/GHchangelog 
    * b) https://github.com/olivierlacan/keep-a-changelog/blob/main/CHANGELOG.md as classic solution
