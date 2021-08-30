---
description: ''
sidebar: 'docs'
next: '/docs/git-integration/'
editable: true
---

# Introduction

Deploy Now is a hosting platform dedicated to developers. Connect your GitHub account and instantly deploy your web projects to DDoS-protected, georedundant and green infrastructure.

## Getting started
  
1. **Connect your GitHub account.** We ask you for the permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories.  
    
1. **Select your deployment source.** We can deploy either repositories within your GitHub account or any public third party repository. No repository at hand? Deploy one of our [samples](/docs/framework-samples/).
![Screenshot from source selection step](/source-selection.jpg)  
  
1. **Configure the deployment.** Deploy Now scans your repository to detect the framework and the dist folder. In case we are not able to identify them, we ask you to provide them explicitly.
![Screenshot from configuration screen](/confirm-configuration.jpg)

1. **Your project is beeing build.** After a couple of seconds your website goes live under a preview URL. 
![Screenshot from project details](/project-details.jpg)

1. **Git commits code changes and Deploy Now updates your site.** Now, you can open [staging deployments](/docs/staging-deployments/) or connect a [custom domain](/docs/domain-tls/).

## Supported frameworks and technologies

### HTML, CSS & PHP Sites and Apps
Deploy Now allows you to host static websites based on HTML and CSS. In addition, you can run PHP scripts on our infrastructure. Deploy Now projects are served from Apache webservers. 

### Static Site Generators
If you are working with static site generators, Deploy Now allows you to move static files to our infrastructure after every build based on the [GitHub Actions](https://github.com/features/actions) pipeline. If you setup the build pipeline manually, all existing static site generatos can be used. Out of the box, Deploy Now supports the following static site generators:  

- Gridsome [(sample)](/docs/framework-samples/#gridsome-sample)
- Gatsby [(sample)](/docs/framework-samples/#gatsby-sample)
- Hugo [(sample)](/docs/framework-samples/#hugo-sample)
- Jigsaw [(sample)](/docs/framework-samples/#jigsaw-sample)
- Jekyll [(sample)](/docs/framework-samples/#jekyll-sample)
- Next [(sample)](/docs/framework-samples/#next-sample)
- Nuxt [(sample)](/docs/framework-samples/#nuxt-sample)
- Vuepress [(sample)](/docs/framework-samples/#vuepress-sample)
- Eleventy
- Hexo
- Metalsmith

### Single Page Applications
You can deploy Single Page Applications based on frameworks like React, Vue and Angular.

### Not supported
Our hosting infastructure uses Apache webservers only. Thus, server-side rendering with Node.js is not supported. Besides, Deploy Now does not support databases. If you are missing one of these or any other technology, you can let us know by requesting a feature via the product dashboard.
