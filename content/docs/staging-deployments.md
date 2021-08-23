---
description: ''
sidebar: 'docs'
prev: '/docs/git-integration/'
next: '/docs/framework-samples/'
---

# Staging Deployments
  
Staging Deployments give you the ability to build & deploy any branch of your web project to IONOS. While working on new features this gives you the advantage to preview changes on the fly and share them with your colleagues or customers. Based on our own experiences, we recommend working with feature branches rather than allways editing the main branch right away. Deploy Now creates new Staging Deployments from freshly opened branches automatically. Staging Deployments receive generic preview URLs. 

~~~mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff'}, 'darkMode': 'true'}}%%
graph TD
    subgraph id[ ]
        A(local workspace):::active -->|push to feature1| B(GitHub repository):::active
        B -->|on push| C{Deploy Now}:::active
        C -->|deploy main| D([production]):::inactive
        C -->|deploy branch A| E([stage 1]):::active
        C -->|deploy branch N| F([stage x]):::inactive
        D --> D1([custom domain])
        E --> E1([preview URL])
        F --> F1([preview URL])
    end
    classDef active fill:#ff8c00,stroke:#fff,stroke-width:1px,color:#fff
    classDef inactive fill:#0b9dcc,stroke:#fff,stroke-width:1px,color:#fff
~~~

As Staging Deployment are not meant to be visible for website visitors, you cannot connect them with custom domains. If you want to make changes on your stage visible under your custom domain, you can either merge your changes to the production branch or switch the production branch in Deploy Now.

~~~mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#fff'}, 'darkMode': 'true'}}%%
graph TD
    subgraph id[ ]
        A([main]):::active -->|switch| B1([stage]):::inactive
        A -.- A1
    end
    subgraph id[ ]
        B([branch]):::inactive -->|switch| A1([production]):::active
        B -.- B1
    end
    A1 --> A2([custom domain])
    B1 --> B2([preview URL])
    classDef active fill:#ff8c00,stroke:#fff,stroke-width:1px,color:#fff
    classDef inactive fill:#0b9dcc,stroke:#fff,stroke-width:1px,color:#fff
~~~

The number of available Staging Deployments depends on your project package size. 

<!-- ![Screenshot from staging deployment section](/staging.jpg) -->
