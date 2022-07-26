---
description: 'Deploy Now uses a combination of GitHub Actions and GitHub Apps to build, stage and deploy static sites, single-page applications and PHP apps.'
created: '2022-07-26'
author: 'robert-schleinhege'
header: '@assets/blog/DPNW_GH_coverimage@2x.png'
teaser: '@assets/blog/DPNW_GH_coverimage@2x.png'
tags:
    - github
    - actions
---

# How to make Git deployments with IONOS quick and easy

*Deploy Now uses a combination of GitHub Actions and GitHub Apps to build, stage and deploy static sites, single-page applications and PHP apps.*

Do you enjoy endlessly repeating mundane deployment tasks for software testing, only to repeat them some more for production? No? Then read on.

Deploy Now is a build tool created by developers for developers, bringing together modern Git workflows and IONOS infrastructure. Combined with the power of [GitHub Actions](https://github.com/features/actions), you can now implement projects faster than ever — and save yourself the trouble of integrating and automating workflows yourself (or sifting through Stack Overflow tutorials).

GitHub Actions automates, customises, and executes software build and deployment workflows right in the repository, making it the perfect link between the worlds of hosting and development. 

Deploy Now’s setup assistant makes it possible to launch new projects in seconds, literally. Upfront scans of GitHub repositories collect data to intelligently produce out-of-the box configurations with tons of pre-filled data. And with recently added support for full LAMP stacks, Deploy Now is the perfect companion for real full stack web development.

## How to get started

First, sign up for Deploy Now and link it with your GitHub account. For things to work smoothly the tool needs access to the GitHub repositories that you want to deploy from. The [IONOS Deploy Now GitHub App](https://github.com/marketplace/ionos-deploy-now) will manage all interactions between your repository and IONOS. Now you’re ready to deploy your first project.
 
Deploy Now automatically scans your chosen repository for existing frameworks and suggests a prefilled build pipeline within the user interface. Deploy Now supports static site generators (SSG), single-page applications (SPA) and PHP frameworks. 

The final confirmation will generate a GitHub Actions workflow that triggers your first automatic deployment to IONOS. If something is still missing you can easily make adjustments directly in GitHub. IONOS recommends you adjust your workflow directly in Git and make use of the rich ecosystem of the [GitHub marketplace](https://github.com/marketplace). You can for example run automated Lighthouse tests before each deployment or send a Slack notification to your team, everytime a new deployment goes live.

All you need to do is push your changes, then it’s time to lean back while your assets are built and deployed to the IONOS platform. And that’s it.

![PHP Projects in Deploy Now](/04_PHP_apps_via_GitHub.gif)

View a detailed description of how Deploy Now defines GitHub Actions workflows for your projects [here](https://docs.ionos.space/docs/github-actions-customization/). Deploy Now offers automatic workflow setups for many static frameworks as well as Laravel and Symfony. 

What about staging new features, you ask? By default, Deploy Now takes care of new branches and creates a new staging deployment for each branch. Every deployment gets a preview URL and uses TLS to encrypt the transfer of data. 

Got ideas for how to improve our GitHub integration? Feel free to drop them via our [GitHub issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues). 


