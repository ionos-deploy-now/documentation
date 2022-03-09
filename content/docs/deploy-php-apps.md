---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Deploy PHP apps via GitHub

## What you need to know when creating a new PHP project

### What does Deploy Now offer?

#### Automated deployments via GitHub

Deploy Now PHP projects retrieve code from your GitHub repository, detect the PHP framework you are using and set up an automated build and deployment pipeline accordingly. GitHub repositories can be public or private and owned by users or organizations. Each code update triggers a new build and deployment via GitHub Actions.

#### Comprehensive framework support

Out of the box, Deploy Now is able to detect Laravel and Smyfony. In general, Deploy Now supports all apps that run on PHP and can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). PHP apps are equipped with MariaDBs for both production and staging.

#### Deployments to secure infrastructure

Depending on your location, Deploy Now apps are hosted on IONOS datacenters in Europe and North America. IONOS shared hosting infrastructure runs apache webservers and supports a wide variety of PHP versions. The infrastructure is georedundant, protected from DDoS attacks and powered by green energy.

#### Powerful features

- 10 GB storage per deployment
- 2 GB MariaDB for production and staging
- [Staging Deployments](/docs/staging-deployments/)
- [Custom domains and SSL](/docs/domain-tls/)
- Visitor statistics
- Unlimited bandwith

### How do I set up a new deployment?

To create a PHP project in Deploy Now, click **add project** and select **PHP project** after the framework detection. The [setup wizard](/docs/from-repo/) guides you through the build, deployment and runtime configuration. Tutorials showing how projects can be set up on the command line can be found [here](docs/from-cmd-line). If you don't have a project at hand, you can deploy one of our [sample projects](/docs/framework-samples).

### Pricing

Prices in your local currency can be found on the respective shop pages for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now). 

## How to manage your Deploy Now PHP project

Deploy Now follows the approach to prefill configuration files based on the inputs from the project creation wizard, which can be later on edited directly in the repository.

### Adapt build steps

Build steps are executed automatically based on GitHub Actions. Build logs can be viewed directly in GitHub Actions. Build commands, the publish directory and the build environment variables can be adapted in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/github-actions-customization/)

### Manage files on runtime

The current state of the webserver files including logs can be viewed via the deployment viewer in the Deploy Now dashboard. You can also download files here. Moving files onto the server is only possible via GitHub. If you want to keep files persistent, i.e. prevent them from being overwritten with the next commit, you can do this by adding excludes to `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Execute commands on runtime

To avoid inconsistencies between the GitHub repository and the runtime version of your project, Deploy Now does not offer SSH access to the server. Users can define commands to be executed on the runtime before and after deployments in `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Manage databases

Databases will be automacially created for both production and staging. You can access your databases via PHP MyAdmin. [Learn more](/docs/runtime-configuration/)

### Create HTACCESS file

Deploy Now webservers will react to any HTACCESS that is moved to the browser via the root of the publish directory. You can use your HTACCESS file to define redirects or password protections.

### Adapt environment variables

Build environment variables can be adapted under `.deploy-now/config.yaml`. Runtime environment variables can be adapted by moving an updated configuration file to your runtime. Secrets are generally stored as GitHub secrets. 

### Add a domain

You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.



