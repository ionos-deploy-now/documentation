---
description: 'A quick overview of how to deploy and manage a static site via GitHub when using Deploy Now. Deploy Now offers automated deployments, comprehensive framework support, a secure infrastructure and predictable pricing.'
sidebar: 'docs'
prev: '/docs/from-repo/'
next: '/docs/deploy-php-apps/'
editable: true
---

# Deploy Static Sites via GitHub

## Creating a new Static Project in Deploy Now

### What do Static Projects offer?

#### Automated deployments via GitHub

Deploy Now Static Projects support direct deployments via GitHub for Static Site Generators, Single Page Applications and any other static asset. Repositories can be public or private and owned by GitHub users or organizations. After connecting your repository, Deploy Now detects the framework you are using and sets up a build and deployment workflow accordingly. Each code update triggers a new build via GitHub Actions.

#### Comprehensive framework support

Deploy Now supports all static sites that can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). Automatic detection and workflow setup are available for the following frameworks.

**Static Site Generators**: 

- Hugo
- Gatsby
- Gridsome
- Docusaurus
- Vuepress
- Vitepress
- NuxtJS (static)
- NextJS (static)
- Hexo
- Metalsmith
- 11ty
- UmiJS
- Astro
- Scully
- ElderJS
- Middleman
- Jekyll
- Nanoc
- Pelican
- mkdocs
- Jigsaw
- Sculpin

**Single Page Applications**: 

- Angular
- React
- Vue
- Ionic
- Svelte
- Ember

*Please note that Deploy Now does not support Node.js runtime environments.*

#### Deployments to secure infrastructure

Static sites are delivered via shared hosting infrastures in Europe and North America. The datacenters are run by IONOS directly and come with georedundancy, DDoS protection and green energy.

#### Powerful features

- [Staging Deployments](/docs/staging-deployments/)
- [Custom domains and SSL](/docs/domain-tls/)
- Visitor statistics
- Unlimited bandwith

#### Predictable pricing

Static Projects can be added to your Deploy Now membership on a monthly base. Each project can contain multiple deployed branches from a single GitHub repository. Prices in your local currency can be found on the respective shop pages for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now). 

### How to set up a new Static Project

You might want to [create a new project on the command line](docs/from-cmd-line), [deploy an existing repository](/docs/from-repo/) or [deploy one of our samples](/docs/framework-samples) for a quickstart. New Static Projects can be set up in the Deploy Now dashboard by clicking  **add project** and selecting **Static Project** after the framework detection. Simply follow the instructions in the wizard to get your project up an running.


## Managing existing Static Projects in Deploy Now

### Adapt build steps

Build steps are executed automatically based on GitHub Actions. Build logs can be viewed directly in GitHub Actions. Build commands, the publish directory and the build environment variables can be adapted in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/github-actions-customization/)

### Create HTACCESS file

Deploy Now webservers will react to any HTACCESS file that is moved to the root directory of the server as part of the publish directory. You can use your HTACCESS file to define redirects or password protections. [Learn more](/docs/runtime-configuration/#htaccess-files)

### Adapt environment variables

Environment variables for your build steps can be adapted directly in the workflow under `.github/workflows/deploy-now.yaml`. Secrets are stored as GitHub secrets and can be referenced from the workflow as well. [Learn more](/docs/github-actions-customization/)

### Add a domain

You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.

### Monitor traffic

Visitor statistics such as session duration and pages per session are calculated and aggregated based on server logs. You can find them in the project details page next to each deployment.
