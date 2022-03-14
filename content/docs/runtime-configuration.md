---
description: 'How to manage config files and runtime environment variables in Deploy Now.'
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/git-integration/'
editable: true
---

# Runtime configuration

## Prefill runtime configurations using the setup wizard

When creating a project that requires a PHP runtime, you will be asked to provide a runtime configuration. You can select between a variety of different PHP versions for your runtime. Please note that build environment variables are not available on the runtime. You can define a set of environment variables in a config file templating form. The resulting config file will be deployed on the runtime under the provided target file path. You can define runtime secrets and reference their values in the config file by adding a `$` in front of their key. If you wish to set up a MariaDB, Deploy Now defines a set of keys, whose values can be referenced by `$key` as well. The values of these variables will be dynamically set during the deployment. Database variables are stored in Deploy Now databases and cannot be accessed via GitHub secrets.

## Adapt runtime configurations for existing projects

### Editing the config file

After the project creation, we will create a config file based on your inputs and store it under your provided path in the `.deploy-now` folder of your repository. You can edit this file directly and Deploy Now will copy it to the right location on your runtime with the next deployment.

### Adding new runtime secrets

If you want to create new runtime secrets, you need to add these to [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) first. In the second step, you need to pass the new secrets to the runtime via the GitHub Actions workflow. Add your secrets to the `Render templates` step in `.github/workflows/deploy-now.yaml`.

``` yaml
 - name: Render templates
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/template-renderer-action@feature/improvements
        with:
          secrets: |
            appUrl: ${{ steps.project.outputs.site-url }}
            mail:
              host: ${{ secrets.IONOS_MAIL_HOST }}
              port: ${{ secrets.IONOS_MAIL_PORT }}
              user: ${{ secrets.IONOS_MAIL_USERNAME }}
              password: ${{ secrets.IONOS_MAIL_PASSWORD }}
              encryption: ${{ secrets.IONOS_MAIL_ENCRYPTION }}
              fromAddress: ${{ secrets.IONOS_MAIL_FROM_ADDRESS }}
```
Now that the runtime is able to receive the values of your secrets, you can reference them in your config file by adding a `$` in front of their key.

### Examplary `config.json`


``` json
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL={{ .secrets.appUrl }}
APP_KEY=

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST={{ .runtime.db.host }}
DB_PORT=3306
DB_DATABASE={{ .runtime.db.database }}
DB_USERNAME={{ .runtime.db.user }}
DB_PASSWORD={{ .runtime.db.password }}

BROADCAST_DRIVER=log
CACHE_DRIVER=file
FILESYSTEM_DRIVER=local
QUEUE_CONNECTION=sync

SESSION_DRIVER=file
SESSION_LIFETIME=120

MAIL_MAILER=smtp
MAIL_HOST={{ .secrets.mail.host }}
MAIL_PORT={{ .secrets.mail.port }}
MAIL_USERNAME={{ .secrets.mail.user }}
MAIL_PASSWORD={{ .secrets.mail.password }}
MAIL_ENCRYPTION={{ .secrets.mail.encryption }}
MAIL_FROM_ADDRESS={{ .secrets.mail.fromAddress }}
MAIL_FROM_NAME="${APP_NAME}"
```
## HTACCESS files

Deploy Now webservers will react to any HTACCESS that is moved to the browser via the root of the publish directory. You can use your HTACCESS file to define redirects or password protections.

## Manage databases

Deploy Now offers 2GB MariaDBs for both production and staging deployments in PHP Projects. Users have access to a PHP MyAdmin interface for each database. When opening a new stage, staging databases do not contain data that was stored in your productive database during runtime per default. Please be aware that you need to copy data from production to staging manually. MariaDBs are running on version 10.5.

## Execute commands on runtime

You have the option to execute commands on the runtime before and after each deployment. Visit [deployment configuration](/docs/deployment-configuration) for more information. Deploy Now currently does not offer the option to execute runtime commands at any time, neither via SSH or e.g. cronjobs. 

:::tip 

Missing a feature? Feel free to drop your request via [GitHub Issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose)

:::



