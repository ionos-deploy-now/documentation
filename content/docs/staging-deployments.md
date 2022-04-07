---
description: 'Deploy Now allows you to create multiple Staging Deployments from feature branches and provides preview URLs. This allows you to preview changes before merging them to production.'
sidebar: 'docs'
prev: '/docs/git-integration/'
next: '/docs/domain-tls/'
editable: true
---

# Staging deployments
  
Staging deployments give you the ability to build & deploy any branch of your web project to IONOS. 
While working on new features this gives you the advantage to preview changes on the fly and share them with your colleagues or customers. 
Based on our own experiences, we recommend working with feature branches rather than allways editing the main branch right away. 
Deploy Now creates new Staging Deployments from freshly opened branches automatically. 
Staging Deployments receive generic preview URLs. 

~~~mermaid
graph TD
    A(local workspace):::active -->|push to feature1| B(GitHub repository):::active
    B -->|on push| C{Deploy Now}:::active
    C -->|deploy main| D([production]):::inactive
    C -->|deploy branch A| E([stage 1]):::active
    C -->|deploy branch N| F([stage x]):::inactive
    D --> D1([custom domain])
    E --> E1([preview URL]):::active
    F --> F1([preview URL])
~~~

As Staging Deployment are not meant to be visible for website visitors, you cannot connect them with custom domains. If you want to make changes on your stage visible under your custom domain, you can either merge your changes to the production branch or switch the production branch in Deploy Now.

~~~mermaid
graph TD
    A([main]):::active -->|switch| B1([stage]):::inactive
    A -.- A1
    B([branch]):::inactive -->|switch| A1([production]):::active
    B -.- B1
    A1 --> A2([custom domain]):::active
    B1 --> B2([preview URL])
~~~

The number of available Staging Deployments depends on your project package size. 

<!-- ![Screenshot from staging deployment section](/staging.jpg) -->
