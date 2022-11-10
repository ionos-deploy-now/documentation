---
description: 'How to deploy a PHP application including a database directly via GitHub. Including smart setups for Laravel and Symfony, build automation and staging.'
sidebar: 'docs'
prev: '/docs/deploy-static-sites/'
next: '/docs/github-actions-customization/'
editable: true
---
# Deploy PHP Apps via GitHub

Deploy Now offers a convenient toolset to automate builds and deployments for dynamic PHP applications. Workflows are automated with GitHub Actions and connect to IONOS shared hosting infrastructure. An automatic setup with default workflows are available for Laravel and Symfony. Set up a `PHP project` in Deploy Now for PHP scripting at runtime and a MariaDB for each deployment. 

![PHP Projects in Deploy Now](/04_PHP_apps_via_GitHub.gif)

## Supported frameworks
Deploy Now supports PHP projects that can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). Setting up Content Management System such as WordPress is possible, but does not yet come with automated, prefilled setups. 

### Laravel
After you connect your Laravel repository, Deploy Now suggests you build steps you can adapt to your liking. It might help you to deploy our [laravel sample project](/docs/framework-samples/#laravel-sample) for a completely prefilled setup including build steps, prefilled `.env`, `.htaccess`, file persistency management and automated runtime commands before and after each deployment. A complete manual of setting up a Laravel project can be found below.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/otSwpzsoZss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Symfony
Deploy Now automacally detects Symfony projects and suggests build steps accordingly. The setup follows the same logic as a Laravel setup. You can deploy our [symfony sample project](/docs/framework-samples/#symfony-sample) for a quick start.

## Features
- Automated builds and deployments
- Connect your custom domain
- SSL automatically connected and renewed 
- Set up [Cron Jobs](/docs/cronjobs/)
- Deploy additional branches with [Staging Deployments](/docs/staging-deployments/)
- Deploy one branch to multiple environments with [Multi Deployments](/docs/staging-deployments/)
- 10GB storage
- Up-to-date PHP versions
- MariaDB for each deployment
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

### Redirects, rewrites, HTACCESS
Redirects and rewrites can be managed via `.htaccess` files. Visit [Apache configuration](/docs/apache-configuration-htaccess) for examples.














 

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

### Adapt build environment variables

Build environment variables can be adapted in the workflow description under `.github/workflows/deploy-now.yaml`. Secrets are generally stored as GitHub secrets. You can reference their values with `${{ secrets.KEY_NAME }}`. [Learn more](/docs/github-actions-customization/#install-dependencies-render-templates-and-execute-build-steps)

### Adapt runtime environment variables

Runtime environment variables can be adapted by moving an updated configuration file to your runtime. Secrets are generally stored as GitHub secrets. You can transfer their values to the infrastructure via the `render templates` step in `.github/workflows/deploy-now.yaml`. [Learn more](/docs/runtime-configuration/#adding-new-runtime-secrets)

### Add a domain

You can connect any kind of custom domain in a few clicks. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.

### Monitor traffic

Visitor statistics such as session duration and pages per session are calculated and aggregated based on server logs. You can find them in the project details page next to each deployment.







