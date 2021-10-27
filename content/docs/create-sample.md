---
description: ''
sidebar: 'docs'
prev: '/docs/domain-tls/'
next: ''
editable: true
---

# Create a sample

After you connect a repository, Deploy Now tries to detect the technologies you are using to set up the build and deploy process accordingly. However, it might be that we are not able to detect more complex configurations. To ensure that these are working as expected, you can provide an explicit configuration via a `.ionos.yml` file in your repository root.

A file-based configuration also ensures that others who fork your repository on GitHub benefit from a seamless setup process without any unexpected error if they want to deploy their own instance of the project. They don’t have to configure anything in the UI, and they’ll still get an identical project configuration.

The following sections will go through each setting option you’ll be able to use with `.ionos.yml` and give you some samples you could use in your projects. For more information about YAML syntax, visit the [YAML website](https://yaml.org/spec/1.2/spec.html).

## Sample file

This sample of .ionos.yml demonstrates commonn settings available for configuration. You can find more sample files for common frameworks [here](/docs/framework-samples/).

``` yml
---
distFolder: dist
setup:
- name: Setup project
  action: actions/setup-node@v1
  properties:
    node-version: v12.22.x
prepare:
  name: Prepare project environment
  command: npm ci
build:
  name: Build project
  command: npm run build
```

## Config file options

The following sections provide additional details for commonly used configuration settings.

### distFolder

Option `distFolder` is mandatory. You need to specify a public distribution folder. Commonly used folders are: `./` or `public` or `dist`

### setup

Option `setup` is a run step used to install the project environment.

The following properties are allowed:

<div class="overflow-y-auto">

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the run step|e.g. `Setup project`|
|command|`String`|`true`|any command|e.g. `npm ci`|

</div>

Common separation of commands by "\n" split.

### prepare

Option `prepare` is a run step used to install all build dependencies.

The following properties are allowed:

<div class="overflow-y-auto">

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the run step|e.g. `Prepare environment`|
|command|`String`|`true`|any command|e.g. `npm ci`|

</div>

Common separation of commands by "\n" split.

### build

Option `build` is a run step used to build the project.

The following properties are allowed:

<div class="overflow-y-auto">

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the run step|e.g. `Build project`|
|command|`String`|`true`|any command|e.g. `npm run build`|
|environment|`Map<String, String>`|`false`|Entries are passed as env-variables for the build shell|e.g. `SITE_URL: https://example.com`|

</div>

Common separation of commands by "\n" split.

