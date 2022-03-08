---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Deploy Static Sites via GitHub

## What you need to know when creating a new static project

### What does Deploy Now offer?

#### Automated deployments via GitHub

Deploy Now Static Projects supports direct deployments via GitHub for Static Site Generators, Single Page Applications and any other static asset. Repositories can be public or private and owned by GitHub users or organizations. After connecting your repository, Deploy Now detects the framework you are using and sets up a build and deployment workflow accordingly. Each code update triggers a new build via GitHub Actions.

#### Comprehensive framework support

Deploy Now supports all apps that run on PHP and can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). Automatic detection and workflow setup are available for the following frameworks.

**Static Site Generators**: Hugo, Gatsby, Gridsome, Docusaurus, Vuepress, Vitepress, NuxtJS (static), NextJS (static), Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw, Sculpin

**Single Page Applications**: Angular, React, Vue, Ionic, Svelte, Ember

*Please note that Deploy Now does not support Node.js runtime environments.*

#### Deployments to secure infrastructure

Static sites are delivered via shared hosting infrastures in Europe and North America. The datacenters are run by IONOS directly and come with georedundancy, DDoS protection and green energy.

#### Powerful features

- [Staging Deployments](/docs/staging-deployments/)
- [Custom domains and SSL](/docs/domain-tls/)
- Visitor statistics
- Unlimited bandwith

### How to set up a deployment?

You might want to [create a new project on the command line](docs/from-cmd-line), [deploy an existing repository](/docs/from-repo/) or [deploy one of our samples](/docs/framework-samples) for a quickstart. New Static Projects can be set up in the Deploy Now dashboard by clicking  **add project** and selecting **Static project** after the framework detection.

### Pricing

Prices in your local currency can be found on the respective shop pages for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now). 

## How to manage your Deploy Now PHP project

Deploy Now follows the approach to prefill configuration files based on the inputs from the project creation wizard, which can be later on edited by the user directly via their repository.

### Adapting build steps

Build steps are executed automatically based on GitHub Actions. Build logs can be viewed directly in GitHub Actions. Build commands, the publish directory and the build environment variables can be adapted in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/github-actions-customization/)

### Manage files on runtime

The current state of the webserver files including logs can be viewed via the deployment viewer in the Deploy Now dashboard. You can also download files here. Moving files onto the server is only possible via GitHub. If you want to keep files persistent, i.e. prevent them from being overwritten with the next commit, you can do this by adding excludes to `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Executing commands on runtime

To avoid inconsistencies between the GitHub repository and the runtime version of your project, Deploy Now does not offer SSH access to the server. Users can define commands to be executed on the runtime before and after deployments in `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Manage databases

Databases will be automacially created for both production and staging. You can access your databases via PHP MyAdmin. [Learn more](/docs/runtime-configuration/)

### Create HTACCESS file

Deploy Now webservers will react to any HTACCESS that is moved to the browser via the root of the publish directory. You can use your HTACCESS file to define redirects or password protections.

### Adapt environment variables

Build environment variables can be adapted under `.deploy-now/config.yaml`. Runtime environment variables can be adapted by moving an updated configuration file to your runtime. Secrets are generally stored as GitHub secrets. 

### Add a domain

You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.











## Configuration

The initial configuration of the build steps can be made via the setup wizard. Deploy Now sets up a GitHub Actions workflow accordingly. This workflow, including build commands, the publish directory and the build environment variables, can be adapted in the worlflow yaml in your repository directly. Build logs are available in GitHub Actions. 

[Learn more](/docs/github-actions-customization/)



