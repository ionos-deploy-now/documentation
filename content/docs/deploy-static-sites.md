---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Deploy static sites via GitHub

Deploy Now Static Projects supports direct deployments via GitHub for Static Site Generators, Single Page Applications and any other static asset. Repositories can be public or private and owned by GitHub users or organizations. After connecting your repository, Deploy Now detects the framework you are using and sets up a build and deployment workflow accordingly. Each code update triggers a new build via GitHub Actions. Results are deployed to IONOS shared hosting infrastructure.

## Setup

You might want to [create a new project on the command line](docs/from-cmd-line), [deploy an existing repository](/docs/from-repo/) or [deploy one of our samples](/docs/framework-samples) for a quickstart. New Static Projects can be set up in the Deploy Now dashboard by clicking  **add project** and selecting **Static project** after the framework detection.

## Supported frameworks

Deploy Now supports all apps that run on PHP and can be build with Node.js, Composer, Ruby or any other [language supported by GitHub Actions](https://docs.github.com/en/get-started/learning-about-github/github-language-support). Automatic detection and workflow setup are available for the following frameworks.

**Static Site Generators**: Hugo, Gatsby, Gridsome, Docusaurus, Vuepress, Vitepress, NuxtJS (static), NextJS (static), Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw, Sculpin

**Single Page Applications**: Angular, React, Vue, Ionic, Svelte, Ember

*Please note that Deploy Now does not support Node.js runtime environments.*

## Infrastructure

Static sites are delivered via shared hosting infrastures in Europe and North America. The datacenters are run by IONOS directly and come with georedundancy, DDoS protection and green energy.

## Configuration

The initial configuration of the build steps can be made via the setup wizard. Deploy Now sets up a GitHub Actions workflow accordingly. This workflow, including build commands, the publish directory and the build environment variables, can be adapted in the worlflow yaml in your repository directly. Build logs are available in GitHub Actions. 

[Learn more](/docs/github-actions-customization/)


## Features

- [Staging Deployments](/docs/staging-deployments/)
- [Custom domains and SSL](/docs/domain-tls/)
- Visitor statistics
- Unlimited bandwith

## Pricing

Prices in your local currency can be found on the respective shop pages for [US](), [UK](), [GER](), [CA](), [ES](), [FR](), [MX]() and [IT](). 
