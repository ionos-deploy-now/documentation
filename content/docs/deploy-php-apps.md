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
Deploy Now can host any PHP Application built with Composer and Node.js, see [languages supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). Setting up Content Management System such as WordPress is possible, but does not yet come with automated, prefilled setups. 

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
- Deploy one branch to multiple environments with [Multi Deployments](/docs/multi-deployments/)
- 10GB storage
- Up-to-date PHP versions
- MariaDB for each deployment
- Monitor traffic with [Visitor statistics](/docs/visitor-statistics/)
- Fixed monthly pricing (see plans for [US](https://www.ionos.com/hosting/deploy-now), [UK](https://www.ionos.co.uk/hosting/deploy-now), [GER](https://www.ionos.de/hosting/deploy-now), [CA](https://www.ionos.ca/hosting/deploy-now), [ES](https://www.ionos.es/alojamiento/deploy-now), [FR](https://www.ionos.fr/hebergement/deploy-now), [MX](https://www.ionos.mx/alojamiento/deploy-now) and [IT](https://www.ionos.it/hosting/deploy-now))

## Setup
After connecting your repository, Deploy Now will guide you trough the following steps. Afterwards, the workflow will be set up to automacially build and deploy your project on every following `git push`.

- [Build configuration](/docs/github-actions-customization/): Define build depencies and commands
- [Runtime configuration](/docs/runtime-configuration/): Set up application configuration including database credentials
- [Deployment configuration](/docs/deployment-configuration/): Define file persistency and automate runtime commands

## Settings

### Build setup
[Build settings](/docs/github-actions-customization/) like dependencies, commands and environment variables can be adapted directly in the configuration files of the GitHub Actions workflow under `.github/workflows`. 

### Domains & TLS
Custom domains can be connected in a few clicks to replace the IONOS placeholder domain. If you want to connect a domain that you have not purchased at IONOS, you need to switch to the IONOS nameservers first. Each domain is automatically SSL secured.

### Redirects, rewrites, HTACCESS
Redirects and rewrites can be managed via `.htaccess` files. Visit [Apache configuration](/docs/apache-configuration-htaccess) for examples.

### Cronjobs
Cron Jobs can be managed in the `config.yaml` under `.deploy-now` as described [here](/docs/cronjobs/).

## Managing running projects

### File space
The current state of the webserver files including logs can be viewed via the [deployment viewer](/docs/deployment-viewer) in the Deploy Now dashboard. You can also download files here. Moving files onto the server is only possible via GitHub. If you want to keep files persistent, i.e. prevent them from being overwritten with the next commit, you can do this by adding excludes to the `config.yaml` under `.deploy-now`. Visit [deployment configuration](/docs/deployment-configuration/) for instructions.

### Database
Databases will be automatically created for both production and staging deployments. You can access your databases via PHP MyAdmin. A backup of your database is creates automatically once per day and stored for 7 days. If you wish to access or restore a database backup, please contact our customer service. 

### Execute commands on runtime
To avoid inconsistencies between the GitHub repository and the runtime version of your project, Deploy Now does not offer SSH access to the server. Users can define commands to be executed on the runtime before and after deployments in the `config.yaml` under `.deploy-now` as described [here](/docs/deployment-configuration/).
