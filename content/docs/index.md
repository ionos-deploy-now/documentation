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

|Feature|StarterProject|StaticProject|PHPProject|
|-|-|-|-|
|**ProjectType**|StarterProject|StaticProject|PHPProject|
|**UseCases**|StaticSiteGenerators&SinglePageApplications|StaticSiteGenerators&SinglePageApplications|PHPApplications|
|**StorageperDeployment**|50MB|1GB|10GB|
|**StagingDeployments**|1|5|5|
|**DeploymenttoIONOSinfrastructure**|✅|✅|✅|
|**Georedundancy&DDoSprotection**|✅|✅|✅|
|**Visitorstatistics**|✅|✅|✅|
|**PHPruntimeenvironment**|-|-|PHP8.2andolder|
|**Database**|-|-|2GBMariaDBwithPHPMyAdminAccess|
|**Includedin**|DeployNowMembership|additionallybookable|additionallybookable|
|**Price**|3projectsfor4€permonth|2€/monthperproject-monthlycancellable|7€/monthperproject-monthlycancellable|

## Getting started
You can start either [from sample](/docs/framework-samples), [from command line](/docs/from-cmd-line) or [from an existing repository](/docs/from-repo).

## Need help?
Feel free to reach out to us via <a href="mailto:deploynow-support@ionos.com">deploynow-support@ionos.com</a>.
