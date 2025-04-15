---
description: 'Easily define and schedule cron jobs with IONOS Deploy Now directly from your GitHub repository.'
sidebar: 'docs'
prev: '/docs/visitor-statistics/'
next: '/docs/faq/'
editable: true
---

# Cron jobs

## Creating a cron job
Cron jobs can be defined directly in the `config.yaml` under `.deploy-now` in your repository. Simply add new cron jobs including a command and a schedule to the sheet. 

```
runtime:
  cron-jobs:
    - command: my-cron-job-command # the deployment is located at $HOME/htdocs/ to execute a deployed script just prefix it accordingly
      schedule: 0 5 * * * # run every day at 5:00
```

A description of the crontab syntax that is required to define schedules can be found [here](https://www.adminschoice.com/crontab-quick-reference).

# Example of a Cron Job for Running a PHP Script

To run a PHP command using a specific version, you need to provide the absolute path to the desired PHP version. Below is a list of the available versions:

- `/usr/bin/php4.4-cli`
- `/usr/bin/php5.2-cli`
- `/usr/bin/php5.4-cli`
- `/usr/bin/php5.5-cli`
- `/usr/bin/php5.6-cli`
- `/usr/bin/php7.0-cli`
- `/usr/bin/php7.1-cli`
- `/usr/bin/php7.2-cli`
- `/usr/bin/php7.3-cli`
- `/usr/bin/php7.4-cli`
- `/usr/bin/php8.0-cli`
- `/usr/bin/php8.1-cli`
- `/usr/bin/php8.2-cli`
- `/usr/bin/php8.3-cli`
- `/usr/bin/php8.4-cli`

Below is an example configuration of a cron job that uses the `/usr/bin/php8.3-cli` version to execute a script:

```yaml
runtime:
  cron-jobs:
    - command: /usr/bin/php8.3-cli $HOME/htdocs/"path/to/your/script"
      schedule: "* * * * *" # runs every minute
```
With this configuration, the cron job will run every minute using the specified PHP version to execute the script located at $HOME/htdocs/"path/to/your/script".
