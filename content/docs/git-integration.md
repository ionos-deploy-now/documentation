---
description: 'Deploy Now allows you to deploy from public or private repositories owned by GitHub users or organizations. After every git commit, a GitHub Actions workflow automatically updates your web project on the infrastructure'
sidebar: 'docs'
prev: '/docs/runtime-configuration/'
next: '/docs/staging-deployments/'
editable: true
---

# GitHub integration

Deploy Now builds your project in a [GitHub Actions](https://github.com/features/actions) workflow and deploys results instantly to IONOS infrastructure. Repositories can be `public` or `private` and owned by `personal accounts` or `GitHub organizations`. 

~~~mermaid
sequenceDiagram
    autonumber
    User ->> User: edit and commit
    User ->> GitHub: push
    GitHub ->> GitHub Actions: on push
    GitHub Actions ->> GitHub Actions: build
    GitHub Actions ->> IONOS: deploy
~~~

Interactions between GitHub and Deploy Now are managed by the IONOS Deploy Now App, which requires read access to actions and metadata as well as write access to administration, secrets, code and workflows. The available GitHub Actions build time of private repositories depends on your personal GitHub plan.

## Workflow versions

The workflow version used depends on your project creation date.

### v1 (projects created until 11/2022)

A GitHub Actions workflow in `.github/workflows/deploy-now.yaml` runs the entire build and deployment. This workflow exists per branch to enable [Staging Deployments](/docs/staging-deployments). 

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

### v2 (projects created from 11/2022)

An orchestration workflow in `.github/workflows/[project-name]-orchestration.yaml` runs the build steps specified in `.github/workflows/[project-name]-build.yaml` and triggers `.github/workflows/deploy-to-ionos.yaml` for the deployment. This decoupled set up enables [Multi Deployments](/docs/multi-deployments) in addition to [Staging Deployments](/docs/staging-deployments).

~~~mermaid
flowchart LR
    subgraph s1[project-name-orchestration.yaml]
    subgraph s2[project-name-build.yaml]
    b1(generate .env/.htaccess)-->b2(install dependencies)-->b3(run build)
    end
    a1(check readiness)-->a2(build)-->b1
    b3-->a3(trigger deployment)
    end
    subgraph s3[deploy-to-ionos.yaml]
    c1(deploy to deployment 1)
    c2(deploy to deployment 2)
    c3(deploy to deployment 3)
    end
    a3 --> c1
    a3 --> c2
    a3 --> c3
~~~

`.env`/`.htaccess` files are generated from `.env.template`/`.htaccess.template` files in `.deploy-now/[project-name]`. Files can be excluded from deployments in `.deploy-now/[project-name]/config.yaml`.

