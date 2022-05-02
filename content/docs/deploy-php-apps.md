---
description: 'How to deploy a PHP application including a database directly via GitHub. Including smart setups for Laravel and Symfony, build automation and staging.'
sidebar: 'docs'
prev: '/docs/deploy-static-sites/'
next: '/docs/github-actions-customization/'
editable: true
---

# Deploy PHP apps via GitHub

## Creating a new PHP Project in Deploy Now

### What do PHP Projects offer?

#### Automated deployments via GitHub

Deploy Now PHP Projects retrieve code from your GitHub repository, detect the PHP framework you are using and set up an automated build and deployment pipeline accordingly. GitHub repositories can be public or private and owned by users or organizations. Each code update triggers a new build and deployment via GitHub Actions.

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

#### Predictable pricing

PHP Projects can be added to your Deploy Now membership on a monthly basis. The price for a project is fixed and does not depend on metrics such as resource consumption. Each project corresponds to one connected GitHub repository and can contain multiple deployed branches. Prices in your local currency can be found on the respective shop pages for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now). 

### How to set up a new PHP project

To create a PHP Project in Deploy Now, click **add project** and select **PHP Project** after the framework detection. The [setup wizard](/docs/from-repo/) guides you through the build, deployment and runtime configuration. Tutorials showing how projects can be set up on the command line can be found [here](docs/from-cmd-line). If you don't have a project at hand, you can deploy one of our [sample projects](/docs/framework-samples). Additional staging deployments can be created simply by opening new branches in the repository and toggle them on for staging in the project details page.

## Managing an existing PHP Project after the project creation

Deploy Now follows the approach to prefill configuration files based on the inputs from the project creation wizard, which can be later on edited directly in the repository.

### Adapt build steps

Build steps are executed automatically based on GitHub Actions. Build logs can be viewed directly in GitHub Actions. Build commands, the publish directory and the build environment variables can be adapted in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/github-actions-customization/)

### Manage files on runtime

The current state of the webserver files including logs can be viewed via the [deployment viewer](/docs/deployment-viewer) in the Deploy Now dashboard. You can also download files here. Moving files onto the server is only possible via GitHub. If you want to keep files persistent, i.e. prevent them from being overwritten with the next commit, you can do this by adding excludes to `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Execute commands on runtime

To avoid inconsistencies between the GitHub repository and the runtime version of your project, Deploy Now does not offer SSH access to the server. Users can define commands to be executed on the runtime before and after deployments in `.deploy-now/config.yaml`. [Learn more](/docs/deployment-configuration/)

### Manage databases

Databases will be automacially created for both production and staging. You can access your databases via PHP MyAdmin. [Learn more](/docs/runtime-configuration/)

A backup of your database is creates automatically once per day and stored for 7 days. If you wish to access or restore a database backup, please contact our customer service. 

### Create HTACCESS file

Deploy Now webservers will react to any HTACCESS file that is moved to the root directory of the server as part of the publish directory. You can use your HTACCESS file to define redirects or password protections. [Learn more](/docs/runtime-configuration/#htaccess-files)

### Adapt build environment variables

Build environment variables can be adapted in the workflow description under `.github/workflows/deploy-now.yaml`. Secrets are generally stored as GitHub secrets. You can reference their values with `${{ secrets.KEY_NAME }}`. [Learn more](/docs/github-actions-customization/#install-dependencies-render-templates-and-execute-build-steps)

### Adapt runtime environment variables

Runtime environment variables can be adapted by moving an updated configuration file to your runtime. Secrets are generally stored as GitHub secrets. You can transfer their values to the infrastructure via the `render templates` step in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/runtime-configuration/#adding-new-runtime-secrets)

### Add a domain

You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.

### Monitor traffic

Visitor statistics such as session duration and pages per session are calculated and aggregated based on server logs. You can find them in the project details page next to each deployment.


