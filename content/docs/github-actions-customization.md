---
description: 'How to configure the build steps of your Deploy Now project. Deploy Now detects your framework from the repository and sets up a GitHub Actions workflow accordingly.'
sidebar: 'docs'
prev: '/docs/deploy-php-apps/'
next: '/docs/deployment-configuration/'
editable: true
---

# Build configuration

Build steps are automated in GitHub Actions workflows. These workflows are set up during project creation. Deploy Now analyzes your repositories and suggest the required build steps accordingly. Build steps can make use of Node.js, Composer or Budnler. After the set up, build settings can be edited directly in the GitHub Actions workflow files stored in the repository.

Settings can differ between the `workflow v1`, used in projects created until 11/22, and `workflow v2`, used for newer projects. 

## Important settings

### Build commands
#### Description
Combining your source code and dependencies to build a runnable instance of your web project. 
#### How to edit
Editing commands or adding new commands in building steps of `.github/workflows/deploy-now.yaml` for `workflow v1`
or `.github/workflows/[project-name]-build.yaml` for `workflow v2`.
#### Example
``` yaml
      - name: Build Node assets
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        env:
          CI: true
          SITE_URL: ${{ steps.project.outputs.site-url }}
        run: |
          npm ci
          npm run build
```

### Build dependencies
#### Description
Before running a build command, the languages and software required for your build needs to be installed.
#### How to edit
`workflow v1`: Edit the "setup node", "setup composer" etc. steps in `.github/workflows/deploy-now.yaml` for `workflow v1` or `.github/workflows/[project-name]-build.yaml` for `workflow v2`.
#### Example
``` yaml
      - name: Setup Node
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: v16.x
```


### Build environment variables
#### Description
Key value pairs accessible during your build for behavior customization or connecting to APIs. They can be either stored as plain text or, if sensitive, stored as [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets). 
#### How to edit
Navigate to the dependency set up or build execution steps in `.github/workflows/deploy-now.yaml` for `workflow v1` or `.github/workflows/[project-name]-build.yaml` for `workflow v2`. List key-value-pairs below `env:` 
#### Example
``` yaml
      - name: Build PHP assets
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        env:
          MY_ENV_VAR: value-for-my-env-var
          MY_SECRET_ENV_VAR: ${{ secrets.MY_SECRET }} 
        run: php artisan key:generate --force -n
```




### Build dependencies
#### Description
#### How to edit
#### Example

### Publish directory
#### Description
#### How to edit
#### Example





## Prefill build configurations using the setup wizard

When setting up a new project in Deploy Now, you can configure your build process directly in the UI. Deploy Now analyzes your repository for the framework you are using and prefills input fields accordingly. Your build can contain various build steps such as a Node.js, Composer or Bundler. Each build step can contain multiple build commands and build environment variables. Environment variables that are secret are stored in GitHub secrets.

## Adapt build configurations for existing projects

The inputs of the project creation process are used to set up an automated workflow based on GitHub Actions. This workflow is defined under `.github/workflows/deploy-now.yaml`.

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) to find out how you can use them to enhance the Deploy Now workflow, e.g. by adding  powerful [Continuous Integration](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) functionalities. Check the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for other awesome Actions you can integrate.
:::

### Triggering the workflow

The workflow will be triggered by any git commit or certain events in Deploy Now, such as domain connects. You can add custom events to trigger the workflow as described in the [GitHub Actions docs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on).

### Fetch project data and checkout project

The first step `fetch project data` based on the [fetch project data Action](https://github.com/ionos-deploy-now/retrieve-project-info-action) retrieves meta data from Deploy Now. Afterwards, the `checkout` step checks out your repository so the workflow can access it. 

### Install dependencies

Each dependency that is required to run your build steps is installed in a seperate step. You can adapt these steps if you need additional dependencies or want to update the versions of existing ones. 

### Render templates based on runtime secrets

`Render templates` passes GitHub secrets that are meant to be used on the runtime to the infrastructure in order to make them accessible in configuration files. More information regarding runtime environment variables can be found under [runtime configuration](/docs/runtime-configuration). 

### Build commands and build environment variables

Afterwards, build commands are executed in the order that was defined in the project set up. Environment variables can be directly inserted under `env`. If you want a variable to be secret, you can create a new [GitHub Secret](https://docs.github.com/en/actions/security-guides/encrypted-secrets) and reference it via `${{ secrets.KEY_NAME }}`. All GitHub secrets starting with `IONOS` are necessary to exchange information with Deploy Now and should not be deleted.

### Deploy results to the runtime

The results of the build steps are deployed to the infrastructure in the `deploy build` step. More information regarding the deployment can be found under [runtime configuration](/docs/runtime-configuration).

## Examplary workflow configuration

``` yaml
name: Deploy Now

on:
  - push
  - workflow_dispatch

jobs:
  deploy-now:
    runs-on: ubuntu-latest
    steps:
      - name: Fetch project data
        uses: ionos-deploy-now/retrieve-project-info-action@v1
        id: project
        with:
          api-key: ${{ secrets.IONOS_API_KEY }}
          project: ${{ secrets.IONOS_PROJECT_ID }}
          service-host: api-eu.ionos.space
      - name: checkout
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/checkout@v2
        with:
          submodules: 'recursive'
      - name: Setup composer
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: php-actions/composer@v6
        with:
          args: --optimize-autoloader
      - name: Setup Node.js v14.x
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: 14.x
      - name: Render templates
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/template-renderer-action@v1
        with:
          secrets: |
            mail:
              host: ${{ secrets.IONOS_MAIL_HOST }}
              port: ${{ secrets.IONOS_MAIL_PORT }}
              user: ${{ secrets.IONOS_MAIL_USERNAME }}
              password: ${{ secrets.IONOS_MAIL_PASSWORD }}
              encryption: ${{ secrets.IONOS_MAIL_ENCRYPTION }}
              fromAddress: ${{ secrets.IONOS_MAIL_FROM_ADDRESS }}
      - name: Prepare project environment
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm ci
      - name: Build assets and run tests
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm run prod; php artisan key:generate --force -n; php artisan test;
        env:
         CI: true
         SITE_URL: ${{ steps.project.outputs.site-url }}
         EXAMPLE_KEY: value
      - name: Deploy build
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/deploy-to-ionos-action@v1
        with:
          api-key: ${{ secrets.IONOS_API_KEY }}
          branch-id: ${{ steps.project.outputs.branch-id }}
          dist-folder: ./
          project: ${{ secrets.IONOS_PROJECT_ID }}
          service-host: api-eu.ionos.space
          runtime-placeholder-files: ${{ steps.template.outputs.runtime-placeholder-files }}

```

## Need help?
Feel free to reach out to us via <a href="mailto:deploynow-support@ionos.com">deploynow-support@ionos.com</a>.
