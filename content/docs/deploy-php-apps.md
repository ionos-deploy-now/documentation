---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Deploy PHP apps via GitHub

Deploy Now PHP projects retrieve code from your GitHub repository, detect the PHP framework you are using and set up an automated build and deployment pipeline. GitHub repositories can be public or private and owned by users or organizations. Your app is hosted on IONOS shared hosting infrastructure. Each code update triggers a new build and deployment via GitHub Actions.

## Setup

To create a PHP project in Deploy Now, click **add project** and select **PHP project** after the framework detection. The setup wizard guides you through the build, deployment and runtime configuration. Tutorials showing how projects can be set up on the command line can be found [here](docs/from-cmd-line). If you don't have a project at hand, you can deploy one of our [sample projects](/docs/framework-samples).

## Supported frameworks

Deploy Now automatically detects Laravel and Symfony projects and automates the build steps accordingly. In general, Deploy Now supports all apps that run on PHP and can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). PHP apps are equipped with MariaDBs for both production and staging.

## Infrastructure

Depending on your location, Deploy Now apps are hosted on IONOS datacenters in Europe and North America. IONOS shared hosting infrastructure runs apache webservers and supports a wide variety of PHP versions. The infrastructure is georedundant, protected from DDoS attacks and powered by green energy.

## Configuration

The configuration of your application is initially made via the setup wizard. After the setup, you can change configuration directly in your repository code. 

### Build

Build steps are executed automatically based on GitHub Actions. Build logs can be viewed directly in GitHub Actions. Build commands, the publish directory and the build environment variables can be adapted in the worlflow yaml in your repository.

[Learn more](/docs/github-actions-customization/)

### Deployment

If you have a stateful runtime, you can keep files persistent by defining excludes in a configuration yaml file. Here, you can also define commands that are executed on the runtime before or after the deployment. 

[Learn more](/docs/deployment-configuration/)

### Runtime

Deploy Now is purely Git-centered, which means that you cannot access your runtime via SSH. You can provide a .env file and additional secrets during the setup, that can be adapted later on. Databases can be managed via PHP MyAdmin. Logs and other runtime files can be viewed and downloaded via the user interface. Additionally, a .HTACCESS file can be moved to the runtime via your publish directory.

[Learn more](/docs/runtime-configuration/)

Hier brauch ich noch hilfe - was kann der Kunde hier wie nach dem Setup noch anpassen?

## Features

- 10 GB storage per deployment
- 2 GB MariaDB for production and staging
- [Staging Deployments](/docs/staging-deployments/)
- [Custom domains and SSL](/docs/domain-tls/)
- Visitor statistics
- Unlimited bandwith

## Pricing

Prices in your local currency can be found on the respective shop pages for [US](), [UK](), [GER](), [CA](), [ES](), [FR](), [MX]() and [IT](). 
