---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/settings/'
---

# Samples

The following samples give you an overview of static site generator (SSR) frameworks with auto-setup ability by Deploy Now.

## hello-plain-html

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-plain-html)

A plain html website that needs no additional build instructions, so that the whole content is just copied to IONOS.

::: tip .ionos.yml
``` yml
    distFolder: "./"
```
:::

## hello-gridsome <Badge text="todo" type="warning"/>

## hello-gatsby <Badge text="todo" type="warning"/>

## hello-hugo <Badge text="todo" type="warning"/>

## hello-jigsaw <Badge text="todo" type="warning"/>

## hello-jekyll <Badge text="todo" type="warning"/>

## hello-next <Badge text="todo" type="warning"/>

## hello-nuxt <Badge text="todo" type="warning"/>

## hello-vuepress

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-vuepress)
[<icon-base name="GitHub" view-box="0 0 25 25" color="black"><icon-github/></icon-base>](https://github.com/ionos-deploy-now/hello-vuepress)

A website based on Vue-powered Static Site Generator [VuePress](https://vuepress.vuejs.org/).

::: tip .ionos.yml
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