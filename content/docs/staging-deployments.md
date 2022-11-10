---
description: 'Deploy Now allows you to create multiple Staging Deployments from feature branches and provides preview URLs. This allows you to preview changes before merging them to production.'
sidebar: 'docs'
prev: '/docs/git-integration/'
next: '/docs/domain-tls/'
editable: true
---

# Staging deployments
  
Staging deployments give you the ability to build and deploy branches in addition to your main branch. This allows you to stage changes before merging them to production, giving colleagues or customers the option to test and provide feedback. By default, new branches get deployed automatically and receive preview URLs. As Staging Deployment are not meant to be visible for website visitors, you cannot connect them with custom domains. If you are happy with your changes, simply roll them out by merging the branch to production.

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


