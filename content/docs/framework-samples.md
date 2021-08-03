---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/settings/'
---

# Framework samples

The following frameworks samples give you an overview of static site generator (SSR) frameworks with Deploy Now. We're working on auto-setup abilities for the most popular frameworks. Besides it's possible to setup your web project by Deploy Now step-by-step assistance. In addition it's always possible to directly edit `.github/workflows/ionos-space.yml` in your repository. Following framework samples give you an idea. You find detail setting options [here](/docs/settings/).

## hello-plain-html

Simply copy static assets to IONOS. 

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-plain-html)

Just copy static assets to IONOS. This sample is plain html without additional build instructions.

:::details .ionos.yml
``` yml
    distFolder: "./"
```
:::

## hello-gridsome

## hello-gatsby

## hello-hugo

## hello-jigsaw

## hello-jekyll

## hello-next

## hello-nuxt

## hello-vuepress

A website based on Vue-powered Static Site Generator [VuePress](https://vuepress.vuejs.org/).

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-vuepress)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-vuepress)

:::tip .ionos.yml
``` yml
    distFolder: src/.vuepress/dist
    setup:
        name: Setup Node.js v10.16.3
        action: actions/setup-node@v1
        properties:
        node-version: v10.16.3
    prepare:
        name: Prepare project build environment
    command: npm ci
    build:
    name: Build VuePress
    command: npm run build
```
:::