---
description: 'A quick overview of how to deploy and manage a static site via GitHub when using Deploy Now. Deploy Now offers automated deployments, comprehensive framework support, a secure infrastructure and predictable pricing.'
sidebar: 'docs'
prev: '/docs/from-repo/'
next: '/docs/deploy-php-apps/'
editable: true
---

# Deploy Static Sites via GitHub

Deploy Now offers automated builds and deployments to a shared hosting infrastructure for any static sites, such as Static Site Generation projects, Single Page Applications or plain HTML/CSS websites. They can be set up as a `starter project` that comes with your Deploy Now plan or as an `static project` for more storage and staging environments.

## Supported frameworks
Deploy Now supports all static sites that can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). The following frameworks can be detected automatically to prefill required build dependencies and commands. Please note that we do not provide Node.js runtime environments. 

### Static Site Generators

Hugo, Gatsby, Gridsome, Docusaurus, Vuepress, Vitepress, NuxtJS (static), NextJS (static), Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw and Sculpin

### Single Page Applications

Angular, React, Vue, Ionic, Svelte and Ember

## Features
- Automated builds and deployments
- Connect your custom domain
- SSL automatically connected and renewed 
- Deploy additional branches with [Staging Deployments](/docs/staging-deployments/)
- Deploy one branch to multiple environments with [Multi Deployments](/docs/staging-deployments/)
- Monitor traffic with [Visitor statistics](/docs/visitor-statistics/)
- Fixed monthly pricing (see plans for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now))

## Setup

Simply connect your repository and follow a guided setup of build dependencies and steps. After the setup, your project gets deployed instantly and will build and deploy on every following `git push`. 

You might want to [create a new project on the command line](docs/from-cmd-line), [deploy an existing repository](/docs/from-repo/) or [deploy one of our samples](/docs/framework-samples) for a quickstart. New Static Projects can be set up in the Deploy Now dashboard by clicking  **add project** and selecting `Starter Project` or `Static Project`(for more storage and stages) after the framework detection. Simply follow the instructions in the wizard to get your project up an running.

## Settings

### Build dependencies, commands and environment variables
Build settings can be adapted directly in the configuration files of the GitHub Actions workflow under `.github/workflows`. Instructions can be found under [build configuration](/docs/github-actions-customization/).

### Domains & TLS
You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.

# Redirects, rewrites, HTACCESS
Redirects and rewrites can be managed via `.htaccess` files. Visit [Apache configuration](/docs/apache-configuration-htaccess) for examples.
