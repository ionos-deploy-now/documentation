---
description: 'How to manage config files and runtime environment variables in Deploy Now.'
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/git-integration/'
editable: true
---

# Runtime configuration

## Prefill runtime configurations using the setup wizard

### PHP version

You can select between a variety of different PHP versions for your runtime. The PHP version will be used for production deployments and also represent the default for any additional staging deployment. As the build pipeline is located on a different infrastructure than your runtime, your PHP version for composer build steps can differ from your runtime PHP version. 

### Config file templating

You can define a set of variables in a config file templating form. The resulting config file will be deployed on the runtime under the provided target file path. You can define runtime secrets in this step as well.

#### Syntax

The config file templating is using the golang template engine for rendering the provided files. Therefore, you could insert your data by putting it inside curly braces (`{{ expression }}`). In most cases it will be enough to place a reference to the variable at the desired place inside your config file e.g. `{{ .secrets.key }}` or `{{ .runtime.key }}`. If you want to learn more about the syntax you could check out the [golang documentation](https://pkg.go.dev/text/template). Additionally, the [sprig functions](http://masterminds.github.io/sprig/ ) were installed if you need some more complex methods. 

#### Database

If you wish to set up a MariaDB, Deploy Now defines a set of keys, whose values are prefixed with `.runtime.db`. These variables contain the database user (`.runtime.db.user`) and password (`.runtime.db.password`) as well as the host (`.runtime.db.host`) and the database name (`.runtime.db.name`). The values of these variables will be dynamically set during the deployment. Database variables are stored internally in Deploy Now and cannot be accessed via GitHub secrets.

#### Send mail account

If you wish, Deploy Now creates a mail account for you that you can use to send mails from scripts. The credentials of the mail account will be stored in your GitHub secrets and can be referenced in the config file via `{{.secrets.IONOS_MAIL_HOST}}`. Keep in mind that secrets are only available at runtime if you list them in the render templates step of your [GitHub Actions workflow](https://docs.ionos.space/docs/github-actions-customization/). 

#### App URL

Some apps may require the url they are running on. This value can be accessed by using the key `.runtime.app_url`.

## Adapt runtime configurations for existing projects

### Editing the config file

After the project creation, we will create a config file based on your inputs and store it under your provided target path in the `.deploy-now` folder of your repository and add the suffix `.template` to indicate that this file contains some placeholders. You can edit this file directly and Deploy Now will copy it to the right location on your runtime with the next deployment.

If you want to create a new config file which contains some placeholder values simply add a file with the suffix `.template` to the `.deploy-now` folder. The relative path of this file inside the `.deploy-now` folder will be used as target path for the deployed config file.  

Database variables can be referenced via `{{.runtime.db.user}}`, `{{.runtime.db.password}}`, `{{.runtime.db.host}}`,  and `{{.runtime.db.name}}`. Send mail variables can be referenced via `{{.secrets.IONOS_MAIL_HOST}}`, `{{.secrets.IONOS_MAIL_PORT}}`, `{{.secrets.IONOS_MAIL_USERNAME}}`, `{{.secrets.IONOS_MAIL_PASSWORD}}`, `{{.secrets.IONOS_MAIL_ENCRYPTION}}` and `{{.secrets.IONOS_MAIL_ENCRYPTION}}` and `{{.secrets.IONOS_MAIL_FROM_ADDRESS}}`.

Changes become active with the next deployment.

### Adding new runtime secrets

If you want to create new runtime secrets, you need to add these to [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets) first. In the second step, you need to pass the new secrets to the runtime via the GitHub Actions workflow. Add your secrets to the `Render templates` step in `.github/workflows/deploy-now.yaml` by referencing values via `${{ secrets.key }}`. 

``` yaml
 - name: Render templates
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/template-renderer-action@feature/improvements
        with:
          secrets: |
            mail:
              host: ${{ secrets.IONOS_MAIL_HOST }}
              port: ${{ secrets.IONOS_MAIL_PORT }}
              user: ${{ secrets.IONOS_MAIL_USERNAME }}
              password: ${{ secrets.IONOS_MAIL_PASSWORD }}
              encryption: ${{ secrets.IONOS_MAIL_ENCRYPTION }}
              fromAddress: ${{ secrets.IONOS_MAIL_FROM_ADDRESS }}
```
Now that the runtime is able to receive the values of your secrets, you can reference them in your config file via `{{ .secrets.key }}`

### Examplary `config.json`

``` json
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true
APP_URL={{ .runtime.app_url }}
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

Deploy Now webservers will react to any HTACCESS file that is moved to the root directory of the server as part of the publish directory. You can use your HTACCESS file to define redirects or password protections. In case your project's document directory is not the project's root directory, we add a HTACCESS file to the root directory during the deployment to point to your document directory. This HTACCESS file can be adapted via `.deploy-now/.htaccess.template`. The HTACCESS file generated from this template replaces any other HTACCESS file that might already exist in your project root directory.

## Manage databases

Deploy Now offers 2GB MariaDBs for both production and staging deployments in PHP Projects. Users have access to a PHP MyAdmin interface for each database. When opening a new stage, staging databases do not contain data that was stored in your productive database during runtime per default. Please be aware that you need to copy data from production to staging manually. MariaDBs are running on version 10.5.

A backup of your database is creates automatically once per day and stored for 7 days. If you wish to access or restore a database backup, please contact our customer service. 

## Execute commands on runtime

You have the option to execute commands on the runtime before and after each deployment. Visit [deployment configuration](/docs/deployment-configuration) for more information. Deploy Now currently does not offer the option to execute runtime commands at any time, neither via SSH or e.g. cronjobs. 

:::tip 

Missing a feature? Feel free to drop your request via [GitHub Issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose)

:::



