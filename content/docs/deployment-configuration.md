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

``` yml
version: 1.0
deploy:

# comment in one of the following lines to force the use of the recurring or bootstrap configuration
#  force: recurring
#  force: bootstrap

  # configure the initial deployment of each branch
  bootstrap:
    # directories that are not copied to the infrastructure
    excludes:
      - samplefolder
      - samplefile.txt
      - folder/withfile.txt
      
    # commands that are executed on the runtime after new files are copied
    post-deployment-remote-commands:
      - touch database.sqlite
      - php8.0-cli -r "echo 'do something with php';"

  # configure all following deployments of each branch
  recurring:
    # directories that are not copied to the infrastructure
    excludes:
      - samplefolder
      - samplefile.txt
      - folder/withfile.txt
      - database.sqlite
      
    # commands that are executed on the runtime before new files are copied
    pre-deployment-remote-commands:
      - echo "starting maintenance mode"
      
    # commands that are executed on the runtime after new files are copied
    post-deployment-remote-commands:
      - echo "clearing caches"
      - php8.0-cli -r "echo 'do something with php again';"
      - echo "leaving maintenance mode"
      - echo "back again"

```
:::

## Step-by-step explanation

The following sections provide additional details about how the `config.yaml` is structured. 

### Switch between `bootstrap` and `recurring`

The directories you want to exclude and the commands you want to execute on your runtime might differ between initial deployments (`bootstrap`) and any following deployment (`recurring`). By default, the first deployment action of a newly connected branch always uses `bootstrap`, whereas any following deployment action is based on `recurring`. If you want to force either one, you can do this using this switch.

``` yml
force: bootstrap/recurring
```

### Bootstrap deployments

Directories that you don't want to copy to your runtime during your bootstrap deployment can be listed under `excludes`.
`Remote commands` are executed on your runtime right after the bootstrap deployment. 

``` yml
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
```

### Recurring deployments

`Excludes` and `remote commands` of any following deployment can be defined under `recurring`.

``` yml
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
