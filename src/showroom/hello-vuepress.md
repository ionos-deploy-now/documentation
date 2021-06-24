---
title: hello-vuepress
date: 2020-04-28
description: A website based on Vue-powered Static Site Generator.
tags: ['Vue', 'Vuepress']
---

# hello-vuepress

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
