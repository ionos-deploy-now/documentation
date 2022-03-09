---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Runtime configuration

## Prefill runtime configurations using the setup wizard

When creating a project that requires a PHP runtime, you will be asked to provide a runtime configuration. You can select between a variety of different PHP versions for your runtime. IONOS is generally fast in providing newly released PHP versions. Please note that build environment variables are not available on the runtime. You can define a set of environment variables in a config file templating form. The resulting config file will be deployed on the runtime under the provided target file path. You can define runtime secrets and reference their values in the config file by adding a `$` in front of their key. If you wish to set up a MariaDB, Deploy Now defines a set of keys, whose values can be referenced by `$key` as well. The values of these variables will be dynamically set during the deployment.

## Adapt runtime configurations for existing projects

If you wish to update your configuration files after the first deployment, you can do this my moving an updated version of your config file to the runtime via your publish directory. Runtime secrets will be stored in GitHub secrets and can be adapted there. 


## Examplary `config.json`

``` json
{
  "app.name" : "myproject",
  "myvariable" : "valueofvariable",
  "mysecret" : "$mysecret",
  "db.user" : "$runtime.db_user",
  "db.password" : "$runtime.db_password",
}
```

## HTACCESS files

Deploy Now webservers will react to any HTACCESS that is moved to the browser via the root of the publish directory. You can use your HTACCESS file to define redirects or password protections.

## Manage databases

Deploy Now offers 2GB MariaDBs for both production and staging deployments in PHP Projects. Users have access to a PHP MyAdmin interface for each database. When opening a new stage, staging databases do not contain data that was stored in your productive database during runtime per default. Please be aware that you need to copy data from production to staging manually.

## Execute commands on runtime

You have the option to execute commands on the runtime before and after each deployment. Visit [deployment configuration](/docs/deployment-configuration) for more information. Deploy Now currently does not offer the option to execute runtime commands at any time, neither via SSH or e.g. cronjobs. 

:::tip 

Missing a feature? Feel free to drop your request via [GitHub Issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose)

:::



