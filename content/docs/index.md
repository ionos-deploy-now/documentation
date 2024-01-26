---
description: 'Deploy Now in a nutshell and how to get started'
sidebar: 'docs'
next: '/docs/framework-samples/'
editable: true
---

# Introduction

Deploy Now is a hosting platform that allows you to deploy static sites and PHP apps directly via GitHub. As a tool built from developers for developers, Deploy Now automates build and deployment so you can focus entirely on your code. Your code is deployed to [IONOS](https://www.ionos.com/) reliable shared hosting infrastructure in Europe and North America. The workflow automation is based on [GitHub Actions](https://github.com/features/actions) and can be customized directly in your repository.

[How to deploy a static site](/docs/deploy-static-sites)

[How to deploy a PHP app](/docs/deploy-php-apps)

## How Deploy Now works

Deploy Now abstracts from the complexity of infrastructure provisioning, CI/CD configuration and TLS/domain handling. Connect your repository to Deploy Now and set up a GitHub Actions [build and deploy workflow](/docs/git-integration/) in a step-by-step guide. The workflow, cronjobs, file persistency, automated runtime commands, `.env` and `.htaccess` can be managed directly and version-controlled in the repository files. Sensitive data such as database or email credentials can be stored in GitHub secrets and referenced in runtime configuration files. Deploy Now injects their values during the deployment process. Databases can be managed via phpMyAdmin. Use `Staging Deployments` to deploy feature branches and  `Multi Deployments` to deploy from one repository to multiple runtimes. 

## Deploy Now in a nutshell

|FUNCTION SET|APPLICATION STACK|BY DEFAULT|
|-|-|-|
|Smart framework setups|HTTP/2|DDos Protection|
|Automated deployments|Apache|Geo redundancy|
|[Staging deployments](/docs/staging-deployments)|[SSL/TLS by default](/docs/domain-tls/#tlsssl)|[Climate-neutral hosting](https://www.ionos.com/environment)|
|[Multi deployments](/docs/multi-deployments)|Wide variety of PHP versions|IPv6|
|[Custom domains](/docs/domain-tls)|[Cron jobs](/docs/cron-jobs)||
|[Visitor statistics](/docs/visitor-statistics)|[MariaDB](/docs/database)||

## Deploy Now project types

|Feature|Starter Project|Static Project|PHP Project|
|-|-|-|-|
|**Project Type**|Starter Project|Static Project|PHP Project|
|**Use Cases**|Static Site Generators & SinglePage Applications|Static Site Generators & SinglePage Applications|PHP Applications|
|**Storage per Deployment**|50 MB|1 GB|10 GB|
|**Staging Deployments**|1|5|5|
|**PHP runtime environment**|-|-|PHP 8.2 and older|
|**Database**|-|-|2GB MariaDB with PHPMyAdmin access|
|**Included in**|Deploy Now Membership|additionally bookable|additionally bookable|
|**Price**|3 projects for 4€ per month|2€/month per project - monthly cancellable|7€/month per project - monthly cancellable|

Each project type is deployed to IONOS infrastructure, comes with georedundancy, DDoS protection and visitor statistics.

## Getting started
You can start either [from sample](/docs/framework-samples), [from command line](/docs/from-cmd-line) or [from an existing repository](/docs/from-repo).

## Need help?
Feel free to reach out to us via <a href="mailto:deploynow-support@ionos.com">deploynow-support@ionos.com</a>.
