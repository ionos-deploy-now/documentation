---
description: 'How to define which files should be persistent on the runtime and which commands should be executed.'
sidebar: 'docs'
prev: '/docs/configuration-overview/'
next: '/docs/github-actions-customization/'
editable: true
---

# Deployment configuration

If your project requires a runtime, you might wish to define which files should be persistent and which commands should be executed remotely. You can do this by using the `config.yaml` in `.deploy-now`. The information stored in this file is used to define the part of the GitHub action that manages the deployment to our infrastructure.

*When working with static sites, the only deployment setting you need ist the dist folder. You can adapt this directly by [customizing GitHub actions](/docs/github-actions-customization).*

:::note
Supporting PHP runtimes is currently in alpha. You can join our alpha by following [these](/docs/php-alpha) instructions.
::: 

## Sample file

This sample of a config.yaml file demonstrates remote commands and excludes can be managed for a PHP project:

:::details config.yaml
``` yml
name: config.yaml

version: 1.0

deploy:
  force: bootstrap/recurring

  bootstrap:
    excludes:
      - tests
      - node_modules

    remote-commands:
      - create SQL lite
      - php8.0 artisan migrate --force
      - php8.0 artisan cache:clear
      - php8.0 artisan config:clear
      - php8.0 artisan route:clear
      - php8.0 artisan view:clear
      - php8.0 artisan config:cache
      - php8.0 artisan route:cache
      - php8.0 artisan view:cache
      - seed DB

  recurring:
    excludes:
      - tests
      - node_modules
      - storage

    remote-commands:
      - php8.0 artisan migrate --force
      - php8.0 artisan cache:clear
      - php8.0 artisan config:clear
      - php8.0 artisan route:clear
      - php8.0 artisan view:clear
      - php8.0 artisan config:cache
      - php8.0 artisan route:cache
      - php8.0 artisan view:cache

```
:::

## Step-by-step explanation

The following sections provide additional details for used configuration settings.

### Fetch project data

The following [action](https://github.com/ionos-deploy-now/retrieve-project-info-action) retrieves project meta data and is set up by Deploy Now only.

``` yml
- name: Fetch project data
  uses: ionos-deploy-now/retrieve-project-info-action@v1
  id: project
  with:
    project: 719bd98b-3b8c-477b-8563-018a96856ab6
    api-key: ${{ secrets.IONOS_API_KEY }}
    service-host: api-eu.ionos.space
```

### Checkout project

Checkout repository from GitHub:

``` yml
- name: Checkout project
  if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
  uses: actions/checkout@v2
  with:
    submodules: 'recursive'
```

### Setup project

Set up build runtime:

``` yml
- name: Setup project
  if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
  uses: actions/setup-node@v1
  with:
    node-version: 12.16.x
```

### Prepare project environment

Install build dependencies:

``` yml
- name: Prepare project environment
  if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
  run: |
    npm install --global yarn
    yarn install --frozen-lockfile
```

### Build project

Build project and set build env vars:

``` yml
- name: Build project
  if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
  run: yarn build
  env:
    CI: true
    SITE_URL: ${{ steps.project.outputs.site-url }}
```

### Deploy build

The following [action](https://github.com/ionos-deploy-now/deploy-to-ionos-action) deploys data to IONOS via Deploy Now.

``` yml
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
