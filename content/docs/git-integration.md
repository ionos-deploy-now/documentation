---
description: 'Deploy Now allows you to deploy from public or private repositories owned by GitHub users or organizations. After every git commit, a GitHub Actions workflow automatically updates your web project on the infrastructure'
sidebar: 'docs'
prev: '/docs/runtime-configuration/'
next: '/docs/staging-deployments/'
editable: true
---

# GitHub integration

Deploy Now build your project in a [GitHub Actions](https://github.com/features/actions) workflow and deploys results instanlty to IONOS infrastructure. Repositories can be `public` or `private` and owned by `personal accounts` or `GitHub organizations`. 

~~~mermaid
sequenceDiagram
    autonumber
    User ->> User: edit and commit
    User ->> GitHub: push
    GitHub ->> GitHub Actions: on push
    GitHub Actions ->> GitHub Actions: build
    GitHub Actions ->> IONOS: deploy
~~~

To ensure that the deployment process works correctly you just need to install the IONOS Deploy Now App to your GitHub repository and grant the corresponding rights. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows. Deploy Now does not limit the build time you can use to update your web project. However, the build time that can be used in private repositories depends on your personal GitHub plan.

## Workflow v1 (projects created until 11/2022): Including support for `Staging Deployments`

A GitHub Actions workflow in `.github/workflows/deploy-now.yaml` runs the entire build and deployment. This workflow exists per branch allowing users to stage branches before deploying to production.

~~~mermaid
flowchart LR
    subgraph prepare
    a1(fetch project data)-->a2(checkout repository)
    end
    subgraph build
    b1(generate .env/.htaccess)-->b2(install dependencies)-->b3(run build)
    end
    subgraph deploy
    c1(deploy)
    end
    a2 --> b1
    b3 --> c1
~~~

`.env`/`.htaccess` files are generated from `.env.template`/`.htaccess.template` files in `.deploy-now`. Files can be excluded from deployments in `.deploy-now/config.yaml`.

## Workflow v2 (projects created from 11/2022): Including support for `Staging Deployments` and `Multi Deployments`

A GitHub Actions workflow in `.github/workflows/deploy-now.yaml` runs the entire build and deployment. This workflow exists per branch allowing users to stage branches before deploying to production.

~~~mermaid
flowchart LR
    subgraph prepare
    a1(fetch project data)-->a2(checkout repository)
    end
    subgraph build
    b1(generate .env/.htaccess)-->b2(install dependencies)-->b3(run build)
    end
    subgraph deploy
    c1(deploy)
    end
    a2 --> b1
    b3 --> c1
~~~

`.env`/`.htaccess` files are generated from `.env.template`/`.htaccess.template` files in `.deploy-now`. Files can be excluded from deployments in `.deploy-now/config.yaml`.

