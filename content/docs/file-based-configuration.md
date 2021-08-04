---
description: ''
sidebar: 'docs'
prev: '/docs/configuration-overview/'
next: '/docs/github-action/'
---

# File based configuration

We're anxious to give you all custom settings by using [Deploy Now UI](https://ionos.space) and make deployment even smarter. But to be honest the engine room is always first and gives you more flexibility to set up your environment vars, build and deploy settings. You can configure these settings by putting an `.ionos.yml` file into the root of your repository.

In addition the description of a `.ionos.yml` makes it handy to someone who forks your repository to setup instantly his own instance of your repository with Deploy Now. They don’t have to configure anything in the UI, and they’ll still get an identical project configuration.

The following sections will go through each setting option you’ll be able to use with `.ionos.yml` and give you some samples you could use in your projects. For more information about YAML syntax, visit the [YAML website](https://yaml.org/spec/1.2/spec.html).

## Sample file

This sample of .ionos.yml demonstrates commonn settings available for configuration.

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

The following sections provide additional detail for commonly used configuration settings.

### #distFolder

Option `distFolder` is mandatory. You need to specify a public distribution folder. Commonly used folders are: `./` or `public` or `dist`

### #setup

Option `setup` is a run step used to install the project environment.

The following properties are allowed:

|name|type|mandatory|description|example|
|:-|:-|:-|:-|:-|
|name|`String`|`true`|name of the run step|e.g. `Setup project`|
|command|`String`|`true`|any command|e.g. `npm ci`|

Common separation of commands by "\n" split.

### #prepare

Option `prepare` is a run step used to install all build dependencies.

The following properties are allowed:

|name|type|mandatory|description|example|
|:-|:-|:-|:-|:-|
|name|`String`|`true`|name of the run step|e.g. `Prepare environment`|
|command|`String`|`true`|any command|e.g. `npm ci`|

Common separation of commands by "\n" split.

### #build

Option `build` is a run step used to build the project.

The following properties are allowed:

|name|type|mandatory|description|example|
|:-|:-|:-|:-|:-|
|name|`String`|`true`|name of the run step|e.g. `Build project`|
|command|`String`|`true`|any command|e.g. `npm run build`|
|environment|`Map<String, String>`|`false`|Entries are passed as env-variables for the build shell|e.g. `SITE_URL: https://example.com`|

Common separation of commands by "\n" split.

## Samples

Find below some common use cases.

### Just drop data to IONOS

Drop data to IONOS was never easier. Just add the following `deploy-now-cfg.yml` and connect your repository with Deploy Now and each push to your repo will transfer all data automatically to IONOS.

``` yml
---
distFolder: ./
```