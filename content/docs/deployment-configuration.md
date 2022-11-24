---
description: 'How to define file persistency and remote commands in Deploy Now.'
sidebar: 'docs'
prev: '/docs/github-actions-customization/'
next: '/docs/runtime-configuration/'
editable: true
---

# Deployment configuration

Workflows deploy to IONOS infrastructure after the [build](/docs/github-actions-customization/). Build results can be deployed to one instance or multiple instances with [Multi deployments](/docs/multi-deployments/). Additional feature branches can be deployed as [Staging deployments](/docs/staging-deployments/). More information about the Deploy Now workflows can be found under [GitHub integration](/docs/git-integration/).

Deploy Now offers configurations for file persistency and automated runtime commands for `PHP projects`. Configurations can be made under `.deploy-now/config.yaml` for [workflow v1](/docs/git-integration/#v1-projects-created-until-112022) and `.deploy-now/[project-name]/config.yaml` for [workflow v2](docs/git-integration/#v2-projects-created-from-112022).

## Configurations

### Excludes
#### Description
by default, all files in your publish directory get deployed. Directories that should not be deployed can be listed as excludes. Vice versa, files created by your application at runtime can also be listed as excluced, preventing them from being deleted. You can define different excludes for the first deployment (`bootstrap`) and any following deployment (`recurring`). The folders `logs`, `.deploy-now`, `.git` and `.github` are marked as excludes by default. 
#### How to edit
Listing directories relative to the publish directory under `excludes:` in `config.yaml`. Changes become active with the next deployment.
#### Example
``` yaml
    bootstrap:
      # directories that are not copied by the initial deployment
      excludes:
        - samplefolder
        - samplefile.txt
        - folder/withfile.txt
```
``` yaml
    recurring:
      # directories that are not overwritten or removed by the next deployment
      excludes:
        - samplefolder
        - samplefile.txt
        - folder/withfile.txt
        - database.sqlite
```

### Remote commands
#### Description
You can execute commands on your runtime during the deployment process. This could either be done before or after the deployment. You can define different commands for the initial deployment (`bootstrap`) and any other deployment (`recurring`).
#### How to edit
List runtime commands under `pre-deployment-remote-commands`or `post-deployment-remote-commands`.
#### Example
``` yaml
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

## Need help?
Feel free to reach out to us via <a href="mailto:someone@yoursite.com">deploynow-support@ionos.com</a>.
