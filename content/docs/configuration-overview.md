---
description: ''
sidebar: 'docs'
prev: '/docs/framework-samples/'
next: '/docs/file-based-configuration/'
editable: true
---

# Overview

Deploy Now uses two different [YAML](https://yaml.org/spec/1.2/spec.html) files to store information that is needed for the build and deploy process. 

## Explicit build configuration

An `.ionos.yaml` can be stored in the repository root to make the framework configuration, like the dist folder or the build command, explicit. If a working `.ionos.yaml` is located in the root, the framework detection is automatically skipped. This can be especially helpful to make more complex configurations run smoothly or to avoid accidental misconfigurations when you wish your repository to be forked by others. 

[Learn more]((/docs/explicit-build-configuration/)

## GitHub Actions configuration

Deploy Now connects GitHub repositories to IONOS infrastructure using [Github Actions](https://github.com/features/actions) for the workflow automation. During the project setup  Deploy Now scans your repository for the technologies and frameworks you use and stores this information in an `ionos-space.yml`. This file is located in `.github/workflows`. You can edit this file to customize your workflow. 

[Learn more]((/docs/github-actions-customization/)

## Deployment setup overview

~~~mermaid
%%{init: {'darkMode': 'true'}}%%
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

