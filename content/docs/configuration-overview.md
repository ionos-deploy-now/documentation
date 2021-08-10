---
description: ''
sidebar: 'docs'
prev: '/docs/framework-samples/'
next: '/docs/file-based-configuration/'
---

# Overview

Deploy Now is web hosting right away from [GitHub](https://github.com/) to [IONOS](https://ionos.com). Automation is based on [Github actions](https://github.com/features/actions) as continous intergration and continous delivery/deployment (CI/CD) workflow. Starting a new project with Deploy Now generates a GitHub Action workflow file out of the box and makes CI/CD a breeze.

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

But Deploy Now isn't able to guess all available settings and sometimes it makes sense to simply start your configuration from scratch. In both cases this is the right beginning to read further.
