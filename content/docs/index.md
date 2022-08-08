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

## Under the hood

Deploy Now provides the value of setting up a GitHub Actions workflow in a convenient setup wizard and provides a shared hosting infrastructure that is automatically connected to the workflow. As a result of the setup, Deploy Now injects a `.yaml` describing the GitHub Actions workflow directly into the repisitory. By default, this workflow is triggered on git push and automatically installs build dependencies, executes build steps and rsyncs results to the IONOS infrastructure. Once the workflow is injected into the repository, it is up to the user to extend it or keep it up to date. 

All other settings that are made in the project setup can be adapted in an additional config file that gets injected into a `.deploy-now` folder of the repository. If your project requires configuration files such as `.env` or `.htaccess` on the runtime, you can place them into this folder and suffix them with an additional `.template`. The relative path of this file inside the `.deploy-now` folder will be used as the target path for the deployed file on the server. You can store sensitive information in GitHub secrets and reference them in your configuration files. Deploy Now automatically replaces placeholders with real variable values during the deployment process.

## Deploy Now in a nutshell

|FUNCTION SET|APPLICATION STACK|BY DEFAULT|
|-|-|-|
|Smart framework setup|HTTP/2|DDos Protection|
|Automated deployments|Apache|Geo redundancy|
|[Staging deployments](/docs/staging-deployments)|[SSL/TLS by default](/docs/domain-tls/#tlsssl)|[Climate-neutral hosting](https://www.ionos.com/environment)|
|[Custom domains](/docs/domain-tls)|Wide variety of PHP versions|IPv6|
|[Visitor statistics](/docs/visitor-statistics)|[Cron jobs](/docs/cron-jobs)||

## Getting started
You can start either [from sample](/docs/framework-samples), [from command line](/docs/from-cmd-line) or [from an existing repository](/docs/from-repo).

## Need help?
Feel free to reach out to us via <a href="mailto:someone@yoursite.com">deploynow-support@ionos.com</a>.
