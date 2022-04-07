---
description: 'Deploy Now allows you to deploy from public or private repositories owned by GitHub users or organizations. After every git commit, a GitHub Actions workflow automatically updates your web project on the infrastructure'
sidebar: 'docs'
prev: '/docs/runtime-configuration/'
next: '/docs/staging-deployments/'
editable: true
---

# GitHub integration

Deploy Now allows you to deploy public or private projects from one GitHub account. This can be either a personal or an organization account, as long as you are the owner of the organization. Setting up a project via Deploy Now automatically generates a [GitHub Actions](https://github.com/features/actions) workflow file, that enables instant deployments to IONOS. Just edit, commit and push your local changes and your updates go live. Try [staging deployments](/docs/staging-deployments/) to preview changes before rolling them out to your production deployment.

~~~mermaid
sequenceDiagram
    autonumber
    User ->> User: edit and commit
    User ->> GitHub: push
    GitHub ->> GitHub Actions: on push
    GitHub Actions ->> Deploy Now: run .github/workflows/deploy-now.yaml 
    Note left of Deploy Now: checkout, build and deploy to IONOS
~~~

To ensure that the deployment process works correctly you just need to install the IONOS Deploy Now App to your GitHub repository and grant the corresponding rights. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows.

~~~mermaid
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

Deploy Now does not limit the build time you can use to update your web project. However, the build time that can be used in private repositories depends on your personal GitHub plan.
