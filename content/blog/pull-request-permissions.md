---
description: ''
created: '2022-08-25'
author: 'robin-müller'
tags:
   - update
---

# Update: Deploy Now GitHub App requires permissions to manage pull requests

## Why is this needed?

Currently we are implementing new features that require a GitHub workflow that has a different structure.
To ease up the migration of this workflow for you, we are building an automation process for this.
As the workflow can be completly customized by you, we can't guarantee that the automation process won't break your existing workflow.
Therefore we deciced to provide you the output of this process via a pull request and you can verify that the changes won't break the build of your project.
Unfortunately our GitHub App currently hasn't got the permissions to manage pull requests, so you need to accept the permission change request, before we are able to start the workflow migration.
