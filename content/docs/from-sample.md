---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/from-cmd-line/'
editable: true
---

# From sample

The following samples give you a first glance how Deploy Now works. Just click on the according __Deploy Now__ button to get your instance live.

The samples kept fairly simple to provide you with working protoytypes out of the box. You can start up from this point to create easily your own web project.

If you don't find what you are looking for, maybe you want to start from scratch. In this case follow our instructions [from command line](/docs/from-cmd-line/) or start [from any existing repository](/docs/from-repo/). 

## Plain html sample

Simply copies static assets to the infrastructure. You only need to define a `dist` folder.

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-plain-html)

:::details .ionos.yml
``` yml
distFolder: "./"
```
:::

## Gridsome sample

A website based on the Vue.js framework [Gridsome](https://gridsome.org/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-gridsome)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-gridsome)

:::details .ionos.yml
``` yml
---
distFolder: dist
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run build
  environment:
    SITE_URL: ${{ steps.project.outputs.site-url }}
    CI: true
```
:::

## Gatsby sample

A website based on the React framework [Gatsby](https://www.gatsbyjs.com/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-gatsby)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-gatsby)

:::details .ionos.yml
``` yml
---
distFolder: public
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run build
  environment:
    SITE_URL: ${{ steps.project.outputs.site-url }}
    CI: true
```
:::

## Hugo sample

A website based on the Go framework [Hugo](https://gohugo.io/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-hugo)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-hugo)

:::details .ionos.yml
``` yml
---
distFolder: public
setup:
- name: Setup project
  action: peaceiris/actions-hugo@v2
  properties:
    extended: true
    hugo-version: 0.82.0
build:
  name: Build project
  command: hugo --gc --minify -b $SITE_URL
  environment:
    SITE_URL: ${{ steps.project.outputs.site-url }}
```
:::

## Jigsaw sample

A website based on the PHP framework [Jigsaw](https://jigsaw.tighten.co/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-jigsaw)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-jigsaw)

:::details .ionos.yml
``` yml
---
distFolder: build_production
setup:
- name: Setup composer
  action: php-actions/composer@v2
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run prod
```
:::

## Jekyll sample

A website based on the Ruby framework [Jekyll](https://jekyllrb.com/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-jekyll)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-jekyll)

:::details .ionos.yml
``` yml
---
distFolder: _site
setup:
- name: Setup project
  action: ruby/setup-ruby@v1
  properties:
    ruby-version: 2.7
    bundler-cache: true
build:
  name: Build project
  command: bundle exec jekyll build
```
:::

## Next sample

A website based on [static file serving](https://nextjs.org/docs/basic-features/static-file-serving) with [Next](https://nextjs.org/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-next)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-next)

:::details .ionos.yml
``` yml
---
distFolder: out
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run build
```
:::

## Nuxt sample

A website based on [Static Site Generation](https://nuxtjs.org/docs/2.x/concepts/static-site-generation) with [Nuxt](https://nuxtjs.org).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-nuxt)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-nuxt)

:::details .ionos.yml
``` yml
---
distFolder: dist
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run generate
```
:::

## Vuepress sample

A website based on the Vue-powered Static Site Generator [VuePress](https://vuepress.vuejs.org/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-vuepress)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-vuepress)

:::details .ionos.yml
``` yml
---
distFolder: src/.vuepress/dist
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.3
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run build
```
:::