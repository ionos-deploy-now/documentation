---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/staging-deployments/'
---

# GitHub Integration

![Deploy Now git integration](/git-integration.svg)

A Deploy Now subscription allows you to deploy public or private projects from one GitHub account. This can be either a personal account or an organization owner. Deploy Now updates your website after every git commit using the [GitHub Actions](https://github.com/features/actions) pipeline. The pipeline updates are handled by the IONOS Deploy Now App that is installed to your deployment repositories. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows. The information necessary for the usage of the pipeline are stored in a [configuration yaml](/advanced/#configuration) in your repository. Deploy Now does not limit the build minutes you can use to update your website. However, the number of minutes for private repositories depend on the GitHub plan you use.