---
description: 'Deploy static or PHP starter projects with a few clicks '
sidebar: 'docs'
prev: '/docs/'
next: '/docs/from-cmd-line/'
editable: true
---

# From sample

Looking for a quick start? Simply click on one of the "Deploy to IONOS buttons" below and we set up a very simple sample project for you. You can use this as a starting point to further work with the selected framework. 

*Not what you are looking for? [Start from the command line](/docs/from-cmd-line/) or [deploy an existing repository](/docs/from-repo/).*

## Plain html sample

Simply copies static assets to the infrastructure. You only need to define a `dist` folder. [View repository](https://github.com/ionos-deploy-now/hello-plain-html).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-plain-html)

<!---
:::details .ionos.yaml
``` yml
distFolder: "./"
```
:::
--->

## Gridsome sample

A website based on the Vue.js framework [Gridsome](https://gridsome.org/). [View repository](https://github.com/ionos-deploy-now/hello-gridsome).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-gridsome)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-gridsome)

<!---
:::details .ionos.yaml
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
--->

## Gatsby sample

A website based on the React framework [Gatsby](https://www.gatsbyjs.com/). [View repository](https://github.com/ionos-deploy-now/hello-gatsby).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-gatsby)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-gatsby)

<!---
:::details .ionos.yaml
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
--->

## Hugo sample

A website based on the Go framework [Hugo](https://gohugo.io/). [View repository](https://github.com/ionos-deploy-now/hello-hugo).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-hugo)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-hugo)

<!---
:::details .ionos.yaml
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
--->

## Jigsaw sample

A website based on the PHP framework [Jigsaw](https://jigsaw.tighten.co/). [View repository](https://github.com/ionos-deploy-now/hello-jigsaw).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-jigsaw)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-jigsaw)

<!---
:::details .ionos.yaml
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
--->

## Jekyll sample

A website based on the Ruby framework [Jekyll](https://jekyllrb.com/). [View repository](https://github.com/ionos-deploy-now/hello-jekyll).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-jekyll)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-jekyll)

<!---
:::details .ionos.yaml
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
--->

## Next sample

A website based on [static file serving](https://nextjs.org/docs/basic-features/static-file-serving) with [Next](https://nextjs.org/). [View repository](https://github.com/ionos-deploy-now/hello-next).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-next)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-next)

<!---
:::details .ionos.yaml
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
--->

## Nuxt sample

A website based on [Static Site Generation](https://nuxtjs.org/docs/2.x/concepts/static-site-generation) with [Nuxt](https://nuxtjs.org). [View repository](https://github.com/ionos-deploy-now/hello-nuxt).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-nuxt)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-nuxt)

<!---
:::details .ionos.yaml
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
--->

## Vuepress sample

A website based on the Vue-powered Static Site Generator [VuePress](https://vuepress.vuejs.org/). [View repository](https://github.com/ionos-deploy-now/hello-vuepress).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-vuepress)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-vuepress)

<!---
:::details .ionos.yaml
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
--->

## Laravel sample

A website based on the PHP framework [Laravel](https://laravel.com). [View repository](https://github.com/ionos-deploy-now/laravel-starter).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/laravel-starter)

## Symfony sample
A website based on the PHP framework [Symfony](https://symfony.com/). [View repository](https://github.com/ionos-deploy-now/symfony-starter).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/symfony-starter)
