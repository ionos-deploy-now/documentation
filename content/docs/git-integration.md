---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/staging-deployments/'
---

# GitHub Integration

A Deploy Now subscription allows you to deploy public or private projects from one GitHub account. This can be either a personal or an organization account. Setting up a project via Deploy Now generates automatically a [GitHub Action](https://github.com/features/actions) workflow file, that enables direct deployments to IONOS. Just edit, commit and push your local changes and your updates go live. Try [staging deployments](/docs/staging-deployments/) to have the safety for doing live tests.

~~~mermaid
%%{init: {'darkMode': 'true'}}%%
sequenceDiagram
    autonumber
    User ->> User: edit and commit
    User ->> GitHub: push
    GitHub ->> GitHub Action: on push
    GitHub Action ->> Deploy Now: run .github/workflows/deploy-now.yml 
    Note left of Deploy Now: checkout, build and deploy to IONOS
~~~

<!-- ![Deploy Now git integration](/git-integration.svg) -->
As prerequisite you just need to enable IONOS Deploy Now App to your GitHub account and give correpsonding rights to your repositories. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows.

~~~mermaid
%%{init: {'darkMode': 'true'}}%%
sequenceDiagram
    autonumber
    User ->> Deploy Now: First login
    Deploy Now->>GitHub: Authenticate
    GitHub ->> Deploy Now: Grant account permissions
    Note left of GitHub: Read access to actions and meta data
    Note left of GitHub: Read and write access to administration, code, secrets and workflows
    GitHub ->> Deploy Now: Grant repo access
    Note left of GitHub: Select all or at least one repository
~~~

<!-- ![IONOS Deploy Now App](/github-app.png) -->
Deploy Now does not limit the build time you can use to update your web project. However, the build time for private repositories depends on your personal GitHub plan.
