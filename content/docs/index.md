---
description: ''
sidebar: 'docs'
next: '/docs/git-integration/'
editable: true
---

# Introduction

Deploy Now is a hosting platform built from developers for developers. Connect your GitHub account with Deploy Now and your web project is instantly live.

## Deploy Now in a nutshell

Deploy Now provides a full platform for your web projects and integrates perfectly with your https:&#47;&#47;github.com/&lt;your account&gt;. Automation is based on [GitHub Actions](https://github.com/features/actions) that makes it easy to deploy all your changes right away and blends perfectly with your existing dev tooling. 

|FUNCTION SET|APPLICATION STACK|BY DEFAULT|
|-|-|-|
|Smart framework setup|HTTP/2|DDos Protection|
|Automated deployments|Apache|Geo redundancy|
|Staging deployments|SSL/TLS by default|[Climate-neutral hosting](https://www.ionos.com/environment)|
|Custom domains|Wide variety of PHP versions|IPv6|

## Step by step guide

1. **Connect your GitHub account** 

We'll need your permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories. You can grant access to all your repositories. But at least you have to choose one initial.
    
2. **Select your deployment source**

We can deploy either repositories within your GitHub account or a public, third party repository. No repository at hand? Deploy one of our [samples](/docs/framework-samples/).
![Screenshot from source selection step](/source-selection.jpg)  
  
3. **Configure the deployment**

Deploy Now scans your repository to detect the framework and the dist folder. If we can't identify them automatically, you'll get a request to provide them manually.
![Screenshot from configuration screen](/confirm-configuration.jpg)

4. **Your project gets built** 

After a couple of seconds, your website will go live on a preview URL. 
![Screenshot from project details](/project-details.jpg)

5. **Just git push and your updates go live** 

You can now open [staging deployments](/docs/staging-deployments/) or connect a [custom domain](/docs/domain-tls/).

## Supported frameworks and technologies

### HTML, CSS & PHP Sites and Apps
Deploy Now allows you to host static websites based on HTML and CSS. In addition, you can run PHP scripts on our infrastructure. Deploy Now projects are served from Apache webservers. 

### Static Site Generators
If you are working with static site generators, Deploy Now allows you to move static files to our infrastructure after every build based on the [GitHub Actions](https://github.com/features/actions) pipeline. If you setup the build pipeline manually, all existing static site generators can be used. 

Deploy Now offers out of the box support for the following static site generators:

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