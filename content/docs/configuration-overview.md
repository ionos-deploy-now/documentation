---
description: ''
sidebar: 'docs'
prev: '/docs/framework-samples/'
next: '/docs/file-based-configuration/'
---

# Overview

Deploy Now connects GitHub repositories to IONOS infrastructure using [Github actions](https://github.com/features/actions) for the workflow automation. During the project setup  Deploy Now scans your repository for the technologies and frameworks you use and generates a GitHub action workflow file accordingly. This file is located in .github/workflows. If you want to ensure that this detection is correct, you can provide an explicit [file-based configuration](/docs/file-based-configuration/). 

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

