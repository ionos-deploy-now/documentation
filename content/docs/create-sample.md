---
description: ''
sidebar: 'docs'
prev: '/docs/domain-tls/'
next: '/docs/faq/'
editable: true
---

# Create a sample

## Add a deploy button to your sample

If you create a sample repository that might be interesting for other GitHub users, you can add a "Deploy to IONOS" button to your repository. This allows users to deploy their instance of your sample with a single click. All you need to to is inserting your repository URL into the snippet below and pasting the snippet in your repository readme.

```
[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/your-account/your-repo)
```

As a results, your deploy button should look like this:

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/hello-plain-html)

<!--

## Skip the wizard with a file-based configuration

If you want the setup wizard to be skipped after a users clicks on the deploy button, you can add a file-based configuration to your project. Deploy Now automatically scans for a `.ionos.yaml` in the repository root before directing users to the setup wizard. This avoids that users addicently misconfigure the build and deployment settings.

The following sections will go through each setting option you’ll be able to use with `.ionos.yaml` and give you some samples you could use in your projects. For more information about YAML syntax, visit the [YAML website](https://yaml.org/spec/1.2/spec.html).

### Example of a file-based configuration

This sample of .ionos.yaml demonstrates common settings available for configuration. You can find more sample files for common frameworks [here](/docs/framework-samples/).

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

### Configuration settings

The following sections provide additional details for commonly used configuration settings.

#### distFolder

Option `distFolder` is mandatory. You need to specify a public distribution folder. Commonly used folders are: `./` or `public` or `dist`

#### setup

Option `setup` is a run step used to install the project environment.

The following properties are allowed:

<div class="overflow-y-auto">

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the run step|e.g. `Setup project`|
|command|`String`|`true`|any command|e.g. `npm ci`|

</div>

Common separation of commands by "\n" split.

#### prepare

Option `prepare` is a run step used to install all build dependencies.

The following properties are allowed:

<div class="overflow-y-auto">

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the run step|e.g. `Prepare environment`|
|command|`String`|`true`|any command|e.g. `npm ci`|

</div>

Common separation of commands by "\n" split.

#### build

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

-->

