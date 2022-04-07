---
description: 'How to define file persistency and remote commands in Deploy Now.'
sidebar: 'docs'
prev: '/docs/github-actions-customization/'
next: '/docs/runtime-configuration/'
editable: true
---

# Deployment configuration

## Prefill deployment configurations using the setup wizard

If you create a new PHP project in Deploy Now, you can specify all relevant deployment settings in the setup wizard. The deployment configuration specifies which files should be persistent after being deployed to your runtime and which commands should be executed.

## Adapt deployment configurations for existing projects

The inputs from the initial project creation will be stored in a `config.yaml` in the `.deploy-now` folder of your repository. You can adapt this file directly via GitHub. The new settings become active with the next deployment. 

## Explanation of deployment settings

### Configure initial and following deployments

The directories you want to exclude and the commands you want to execute on your runtime might differ between initial deployments (`bootstrap`) and any following deployment (`recurring`). By default, the first deployment action of a newly connected branch always uses `bootstrap`, whereas any following deployment action is based on `recurring`. You have the option to force the use of either one.

### Manage persistency 

Per default, all files in your publish directory are copied to the infrastructure after every git commit. If you want to prevent certain directories from being copied, you can list them under `excludes`. `Excludes` also prevent files that are created by your application from beeing deleted. If you want to copy files to the infrastructure on your initial deployment, but keep them persistent afterwards, you can do this by adding them to the `excludes` in `recurring`, but leaving them out in `bootstrap`.

### Executing commands on the runtime

You can execute commands on your runtime after `bootstrap` and `recurring` deployments by listing them under `post-deployment-remote-commands` and before `recurring` deployments using `pre-deployment-remote-commands`. The folders `logs`, `.deploy-now`, `.git` and `.github` are marked as excludes by default.

## Examplary `config.yaml`

``` yml
version: 1.0
deploy:
  # comment in one of the following lines to force the use of the recurring or bootstrap configuration
#  force: recurring
#  force: bootstrap

  # configure the initial deployment of each branch
  bootstrap:
    # directories that are not overwritten or removed by the next deployment
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
    # directories that are not overwritten or removed by the next deployment
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

An examplary `config.yaml` for a Laravel project can be found [here](https://github.com/ionos-deploy-now/laravel-starter), a Symfony example can be found [here](https://github.com/ionos-deploy-now/symfony-starter).

