---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Runtime configuration

## Prefill runtime configurations using the setup wizard

If you create a new PHP project in Deploy Now, you can specify all relevant deployment settings in the setup wizard. The deployment configuration specifies which files should be persistent after being deployed to your runtime and which commands.

## Adapt runtime configurations for existing projects

The inputs from the initial project creation will be stored in a `config.yaml` in the `.deploy-now` folder of your repository. You can adapt this file directly via GitHub. The new settings become active with the next deployment. 

## Examplary config file

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



