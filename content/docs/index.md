---
description: ''
sidebar: 'docs'
next: '/docs/git-integration/'
---

# Introduction

Deploy Now is a static site hosting platform dedicated to developers. Connect your GitHub account and instantly deploy your static web projects on IONOS own DDoS-protected, georedundant and green infrastructure.

## Getting started
  
1. **Connect your GitHub account.** We ask you for the permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories.  
    
2. **Select your deployment source.** We can deploy either repositories within your GitHub account or any public third party repository. No repository at hand? Deploy one of our samples [Link to "samples"]. 
  
![Screenshot from source selection step](/source-selection.jpg)  
  
3. **Configure the deployment.** Deploy Now scans your repository for the framework and the dist folder you use. In case we are not able to identify these, we ask you to provide them explicitly. 

![Screenshot from configuration screen](/confirm-configuration.jpg)

4. **Your project is beeing build.** After a couple of seconds your website goes live under a preview URL. 

![Screenshot from project details](/project-details.jpg)

5. **Git commits code changes and Deploy Now updates your site.** You can now open [staging deployments](/guide/#staging-deployments) or connect a [custom domain](/advanced/custom-domains+ssl.html).
