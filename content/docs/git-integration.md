---
description: ''
sidebar: 'docs'
prev: '/docs/'
next: '/docs/staging-deployments/'
---

# GitHub Integration

A Deploy Now subscription allows you to deploy public or private projects from one GitHub account. This can be either a personal or an organization account. Setting up a project via Deploy Now generates automatically a [GitHub Action](https://github.com/features/actions) workflow file, that enables direct deployments to IONOS. Just edit, commit and push your local changes and your updates go live. Try [staging deployments](/docs/staging-deployments/) to have the safety for doing live tests.
![Deploy Now git integration](/git-integration.svg)
As prerequisite you just need to enable IONOS Deploy Now App to your GitHub account and give correpsonding rights to your repositories. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows.
![IONOS Deploy Now App](/github-app.png)
Deploy Now does not limit the build time you can use to update your web project. However, the build time for private repositories depends on your personal GitHub plan.
