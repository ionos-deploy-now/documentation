---
description: ''
created: '2021-10-19'
author: 'robin-müller'
tags:
   - update
---

# Update: Deploy Now triggers new builds without empty commits

## What will change?

We released a new feature that makes the empty commits for re-triggering a build obsolete.
Re-triggering a build is necessary for connecting a custom domain or changing the production branch.
Deploy Now will now use the `workflow_dispatch` event to re-trigger a build but therefore the Deploy Now Github App requires additional permissions.
Github should have sent an email regarding this.

## What you need to do

To get this working you have to upgrade your Github workflow by following these steps:

1. Check that the workflow configuration file has already the correct name `.github/workflows/deploy-now.yaml`. If your repository contains a file named `.github/workflows/ionos-space.yml` please rename it to `.github/workflows/deploy-now.yaml`.
2. Adapt the content of the workflow configuration to allow the triggering of builds by the `workflow_dispatch` event. If you haven't touched this file there should be a line that looks like this:
   ```yaml
   on: [push]
   ```
   Just replace this as follows:
   ```yaml
   on:
     - push
     - workflow_dispatch
   ```
