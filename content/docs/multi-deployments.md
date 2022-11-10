---
description: 'Deploy Now allows you to deploy from one repository to multiple web spaces. This eases central management of multiple, customized instances.'
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/domain-tls/'
editable: true
---

# Multi deployments
  
Multi deployments allow you to deploy your productive branch to multiple production deployments after one, centralized build. 

:::tip
Multi Deployments are only available for projects running under the [v2 workflow](/docs/git-integration/#v2-projects-created-from-112022). Projects created under v1 need to be switched to v2 manually or by re-creating them. 
:::

~~~mermaid
graph TD
    A(local workspace):::active -->|push to branch A| B(GitHub repository):::active
    B -->|on push| C{Deploy Now}:::active
    C -->|deploy main| D([production]):::inactive
    C -->|deploy branch A| E([stage 1]):::active
    C -->|deploy branch N| F([stage x]):::inactive
    D --> D1([custom domain])
    E --> E1([preview URL]):::active
    F --> F1([preview URL])
~~~


