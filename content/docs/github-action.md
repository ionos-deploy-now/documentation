---
description: ''
sidebar: 'docs'
prev: '/docs/file-based-configuration/'
next: '/docs/custom-domain-ssl/'
---

# GitHub Action

If you look at your project repository into `.github/workflows/` you will find a generated `ionos-space.yml` file when using Deploy Now. You're welcome to change whatever fit your needs. But it should fairly obvious to keep any IONOS key as it is. Otherwise the workflow will probably fail. Furthermore ny IONOS key is unique to a project. Copying keys to other projects won't work.

## Sample file

This sample of an ionos-space.yml file demonstrates a common workflow.

``` yml
name: Deploy-Now

on: [push]

jobs:
  ionos-space:
    runs-on: ubuntu-latest
    steps:
      - name: Fetch project data
        uses: ionos-deploy-now/retrieve-project-info-action@v1
        id: project
        with:
          project: 719bd98b-3b8c-477b-8563-018a96856ab6
          api-key: ${{ secrets.IONOS_API_KEY }}
          service-host: api-eu.ionos.space
      - name: Checkout project
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/checkout@v2
        with:
          submodules: 'recursive'
      - name: Setup project
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: 12.16.x
      - name: Prepare project environment
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: |
          npm install --global yarn
          yarn install --frozen-lockfile
      - name: Build project
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: yarn build
        env:
          CI: true
          SITE_URL: ${{ steps.project.outputs.site-url }}
      - name: Deploy build
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/deploy-to-ionos-action@v1
        with:
          service-host: api-eu.ionos.space
          branch-id: ${{ steps.project.outputs.branch-id }}
          storage-quota: ${{ steps.project.outputs.storage-quota }}
          project: 719bd98b-3b8c-477b-8563-018a96856ab6
          dist-folder: public
          remote-host: ${{ steps.project.outputs.remote-host }}
          api-key: ${{ secrets.IONOS_API_KEY }}
```

**TODO** a few more words