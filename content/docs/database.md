---
description: 'Deploy Now provides MariaDBs for PHP Projects. Each deployment receives its own database that can be managed via phpMyAdmin.'
sidebar: 'docs'
prev: '/docs/multi-deployments/'
next: '/docs/domain-tls/'
editable: true
---

# Database

PHP Projects in Deploy Now are equipped with databases. Each production and staging deployment receives one MariaDB. 

## Properties 
- MariaDB version 10
- 2 GB storage
- Shared resources
- Encryption of the connection to the database 
- SSL configured
- No encryption@rest

## Connecting the database to the application

You can maintain configuration files such as `.env` directly in your repository. For security reasons, database credentials are stores in the GitHub secrets. 
You can reference them via placeholders such as `DB_PASSWORD={{ .runtime.db.password }}` and we will automatically inject the correct values during the deployment. 
We support you with this during the project setup. A complete guide can be found under [runtime configuration](https://docs.ionos.space/docs/runtime-configuration/).

## Access

You can access the databases via phpMyAdmin right from your Deploy Now dashboard. Databases are not publicly accessible. 

## Backup 

Databases are backed up automatically once per day. Backups are stored for 7 days. If you wish to restore your databases, you can contact our customer support any time.

## Staging and Multi Deployments

Each [Staging deployment](https://docs.ionos.space/docs/staging-deployments/), corresponding to branches other than main, receives its own database. 
The database get's deleted again once the branch is no longer existing. Currently, we do not copy productive data to a Staging deployment automatically.

[Multi deployments](https://docs.ionos.space/docs/multi-deployments/) are equipped with one database per deployment as well. You can customize different productive deployments by uploading different content to the databases.
