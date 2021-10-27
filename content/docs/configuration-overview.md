---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/deployment-configuration/'
editable: true
---

# Overview

You can use different [YAML](https://yaml.org/spec/1.2/spec.html) files located in your repository to manage build and deployment settings.

|PURPOSE|FILE NAME|LOCATION|NECESSITY|
|-|-|-|-|
|[Deployment configuration](/docs/deployment-configuration/): Manage file persistency and remote commands on your runtime |config.yaml|/.deploy-now|optional|
|[GitHub Actions customization](/docs/github-actions-customization/): Manage the GitHub Actions workflow directly|deploy-now|/.github/workflows|mandatory|
|[Configure a sample](/docs/create-sample/): Skip the wizard by providing a file-based configuration|.ionos.yml|./|optional|


## Deployment configuration

As GitHub Actions configurations support only key-value-pairs, we've decided to manage the deployment settings in a separate 
`config.yml` file using structured values. If your project requires a runtime, you can use this file to exclude files from being copied to the server and define commands that are executed remotely. This file is mandatory, as it is not required for static site usecases.

[Learn more](/docs/deployment-configuration/)

## GitHub Actions configuration

Deploy Now connects GitHub repositories to IONOS infrastructure using [Github Actions](https://github.com/features/actions) for the workflow automation. During the project setup  Deploy Now scans your repository for the technologies and frameworks you use and stores this information in an `deploy-now.yml`. This file is located in `.github/workflows`. You can edit this file to customize your workflow. 

[Learn more](/docs/github-actions-customization/)

## Explicit build configuration

An `.ionos.yaml` can be stored in the repository root to make the framework configuration, like the dist folder or the build command, explicit. If a working `.ionos.yaml` is located in the root, the framework detection is automatically skipped. This can be especially helpful to make more complex configurations run smoothly or to avoid accidental misconfigurations when you wish your repository to be forked by others. 

[Learn more](/docs/explicit-build-configuration/)

## Deployment setup overview

~~~mermaid
sequenceDiagram
    autonumber
    User ->> Deploy Now: new project
    Deploy Now ->> Deploy Now: Select repository
    alt lookup .ionos.yml
        Deploy Now ->> Repository: use .ionos.yml if available
    else detect framework
        Deploy Now ->> Repository: suggest config
    else ask user
        Deploy Now ->> Repository: follow UI wizard
    end
    opt
        Deploy Now ->> User: Acknowledge config
    end
    Deploy Now ->> Deploy Now: Create .github/workflows/deploy-now.yml workflow
    Deploy Now ->> GitHub: Clone repository
    Deploy Now ->> GitHub: Add workflow
    GitHub ->> GitHub Action: Initial run
~~~

