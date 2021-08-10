---
description: ''
sidebar: 'docs'
prev: '/docs/git-integration/'
next: '/docs/framework-samples/'
---

# Staging Deployments
  
Staging Deployments give you the ability to build & deploy any branch of your web project to IONOS. While working on new features this gives you the advantage to preview changes on the fly and share them with your colleagues or customers. From our own work we recommend to open a feature branch rather than working right away on your main branch. By default any branch is automatically build & deploy with Deploy Now and reveives a generic preview URL. 

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

In contrast to the production branch you can't connect a custom domain to a staging deployment. But you can switch your production branch with a staging branch at any time. Of course you can keep your main branch as production branch and merge back your changes with git. In the result both ways are equal.

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

Last but not least the amount of staging deployments depends on your current Deploy Now plan.

<!-- ![Screenshot from staging deployment section](/staging.jpg) -->