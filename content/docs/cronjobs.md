---
description: 'Easily define and schedule cron jobs with IONOS Deploy Now directly from your GitHub repository.'
sidebar: 'docs'
prev: '/docs/visitor-statistics/'
next: '/docs/faq/'
editable: true
---

# Cron jobs

## Creating a cron job
Cron jobs can be defined directly under `.deploy-now.config.yaml` in your repository. Simply add new cron jobs including a command and a schedule to the sheet. 

```
runtime:
  cron-jobs:
    - command: my-cron-job-command
      schedule: 0 5 * * * # run every day at 5:00
```

A description of the crontab syntax that is required to define schedules can be found [here](https://www.adminschoice.com/crontab-quick-reference).
