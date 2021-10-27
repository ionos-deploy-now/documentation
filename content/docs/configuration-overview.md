---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/deployment-configuration/'
editable: true
---

# Overview

You can use different [YAML](https://yaml.org/spec/1.2/spec.html) files located in your repository to manage build and deployment settings.

|PURPOSE|FILE|NECESSITY|
|-|-|-|
|[Deployment configuration](/docs/deployment-configuration/): Manage file persistency and remote commands on your runtime |`.deploy-now/config.yaml`|optional|
|[GitHub Actions customization](/docs/github-actions-customization/): Manage the GitHub Actions workflow directly|`.github/workflows/deploy-now.yaml`|mandatory|
|[Configure a sample](/docs/create-sample/): Skip the wizard by providing a file-based configuration|`.ionos.yaml`|optional|


## Deployment configuration

As GitHub Actions configurations support only key-value-pairs, we've decided to manage the deployment settings in a separate 
`config.yaml` file using structured values. If your project requires a runtime, you can use this file to exclude files from being copied to the server and define commands that are executed remotely. This file is mandatory, as it is not required for static site usecases.

[Learn more](/docs/deployment-configuration/)

## GitHub Actions customization

Deploy Now connects GitHub repositories to IONOS infrastructure using [Github Actions](https://github.com/features/actions) for the workflow automation. During the project setup  Deploy Now scans your repository for the technologies and frameworks you use and stores this information in an `deploy-now.yaml`. This file is located in `.github/workflows`. You can edit this file to customize your workflow. 

[Learn more](/docs/github-actions-customization/)

## Create a sample

An `.ionos.yaml` can be stored in the repository root to make the framework configuration, like the dist folder or the build command, explicit. If a working `.ionos.yaml` is located in the root, the framework detection is automatically skipped. This is especially helpful if you want to create a sample and want to avoid accidental misconfigurations from users that deploy your repository.

[Learn more](/docs/create-sample/)

<!---
## Deployment setup overview

~~~mermaid
sequenceDiagram
    autonumber
    User ->> Deploy Now: new project
    Deploy Now ->> Deploy Now: Select repository
    alt lookup .ionos.yaml
        Deploy Now ->> Repository: use .ionos.yaml if available
    else detect framework
        Deploy Now ->> Repository: suggest config
    else ask user
        Deploy Now ->> Repository: follow UI wizard
    end
    opt
        Deploy Now ->> User: Acknowledge config
    end
    Deploy Now ->> Deploy Now: Create .github/workflows/deploy-now.yaml workflow
    Deploy Now ->> GitHub: Clone repository
    Deploy Now ->> GitHub: Add workflow
    GitHub ->> GitHub Action: Initial run
~~~
--->
