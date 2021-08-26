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

* consolidate color definitions
* fix table borders
* enable plugins: sitemap, PWA
* check header meta data
* optimize favicon and other icons: https://realfavicongenerator.net/
* remark
  * lazy load images
  * add an arrow icon to all external links
  * style mermaid graphs with variables
* add a changelog link in sitebar 
  * which source tbd 
    * a) e.g. https://twitter.com/GHchangelog 
    * b) https://github.com/olivierlacan/keep-a-changelog/blob/main/CHANGELOG.md as classic solution
* framework-samples.md
  * fix icon-base with GitHub icon
  * embed .ionos.yml from repo (nice to have)
* blog
  * do not create markdown nodes if SHOW_BLOG is false
  * fix createdAt
