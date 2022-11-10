---
description: 'Deploy Now allows you to deploy from one repository to multiple web spaces. This eases central management of web services requiring multiple runtimes, which only differ in persistent files.'
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/domain-tls/'
editable: true
---

# Multi deployments

## Concept
  
Multi deployments allow you to deploy your productive branch to multiple production deployments after one, centralized build. This allows you to deploy many instances of a web service efficiently. The instances might differ in their persistent data in filespace or database.

:::tip
Multi Deployments are only available for projects running under the [v2 workflow](/docs/git-integration/#v2-projects-created-from-112022). Projects created under v1 need to be switched to v2 manually or by re-creating them. 
:::

~~~mermaid
graph TD
    A(local workspace):::active -->|push to main| B(GitHub repository):::active
    B -->|on push| C{Deploy Now}:::active
    C -->|deploy main| D([production deployment 1]):::active
    C -->|deploy branch A| E([production deployment 2]):::active
    C -->|deploy branch N| F([production deployment 3]):::active
    D --> D1([custom domain]):::active
    E --> E1([custom domain]):::active
    F --> F1([custom domain]):::active
~~~

## Domains
By default, each production deployment goes live under a preview URL. All preview URLs can be connected to custom domains and get automatically SSL-secured.

## Production data
Each production deployment receives its own filespace and database, meaning their productive data can differ. Files that need to be kept persistent on the server can be defined in `config.yaml` under `.deploy-now`.

## Set up
Simply set up a Deploy Now project as usual and add additional production deployments on the project detail page. Each production deployment requires one Deploy Now project package. Multi deployments can be created for `starter projects`, `static projects` and `php projects`, using only project packages of the same type. The number of the available staging deployments adds up based on the number of production deployments created. 

