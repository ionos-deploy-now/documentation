---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/configuration-overview/'
editable: true
---

# Framework samples

The following framework samples give you an overview of static site generator (SSG) frameworks that can be hosted with Deploy Now. 
To start your project, you can either bring your own repository or deploy a sample from the list below. 
Deploy Now will detect your framework and set up the deployment automatically. 
The setup information will be stored in the .ionos.yml. You can [customize this file](/docs/file-based-configuration) anytime.

## hello-plain-html

Just copy static assets to IONOS. This couldn't be easier. You just need to define a `dist` folder and that's it! 
Try yourself.


[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-plain-html)

:::details .ionos.yml
``` yml
distFolder: "./"
```
:::

## hello-gridsome

A website based on Vue.js framework [Gridsome](https://gridsome.org/).

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

## hello-gatsby

A website based on React framework [Gatsby](https://www.gatsbyjs.com/).

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

## hello-hugo

A website based on Go framework [Hugo](https://gohugo.io/).

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

## hello-jigsaw

A website based on PHP framework [Jigsaw](https://jigsaw.tighten.co/).

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

## hello-jekyll

A website based on Ruby framework [Jekyll](https://jekyllrb.com/).

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

## hello-next

A website based on [Next](https://nextjs.org/) as [Server Side Generation (SSG)](hhttps://nextjs.org/docs/basic-features/static-file-serving) version.

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

## hello-nuxt

A website based on [Nuxt](https://nuxtjs.org) as [Server Side Generation (SSG)](https://nuxtjs.org/docs/2.x/concepts/static-site-generation) version.

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

## hello-vuepress

A website based on Vue-powered Static Site Generator [VuePress](https://vuepress.vuejs.org/).

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
