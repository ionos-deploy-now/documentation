---
description: 'How to configure the build steps of your Deploy Now project. Deploy Now detects your framework from the repository and sets up a GitHub Actions workflow accordingly.'
sidebar: 'docs'
prev: '/docs/deploy-php-apps/'
next: '/docs/deployment-configuration/'
editable: true
---

# Build configuration

## Prefill build configurations using the setup wizard

When setting up a new project in Deploy Now, you can configure your build process directly in the UI. Deploy Now analyzes your repository for the framework you are using and prefills input fields accordingly. Your build can contain various build steps such as a Node.js, Composer or Bundler. Each build step can contain multiple build commands and build environment variables. Environment variables that are secret are stored in GitHub secrets.

## Adapt build configurations for existing projects

The inputs of the project creation process are used to set up an automated workflow based on GitHub Actions. This workflow is defined under `.github/workflows/deploy-now.yaml`.

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) to find out how you can use them to enhance the Deploy Now workflow, e.g. by adding  powerful [Continuous Integration](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) functionalities. Check the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for other awesome Actions you can integrate.
:::

If you want to adapt your build steps for existing projects, you can do this directly by editing the workflow yaml. Below, you can find an examplary workflow. The [fetch project data Action](https://github.com/ionos-deploy-now/retrieve-project-info-action) in the beginning retrieves project meta data from Deploy Now. Afterwards the repository is checked out, a build runtime is created, dependencies are installed and build steps are executed. Feel free to customize these step anytime to adapt your build or further enhance your CI/CD pipeline. The [deploy build Action](https://github.com/ionos-deploy-now/deploy-to-ionos-action) moves the build results to the infrastructure. 

Environment variables can be added in XXX. Secrets can be referenced by XXX

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
      - name: Prepare project environment
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm ci
      - name: Build assets and run tests
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm run prod; php artisan key:generate --force -n; php artisan test;
      - name: Deploy build
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/deploy-to-ionos-action@v1
        with:
          api-key: ${{ secrets.IONOS_API_KEY }}
          bootstrap-deploy: ${{ steps.project.outputs.bootstrap-deploy }}
          branch-id: ${{ steps.project.outputs.branch-id }}
          dist-folder: ./
          project: ${{ secrets.IONOS_PROJECT_ID }}
          remote-host: ${{ steps.project.outputs.remote-host }}
          service-host: api-eu.ionos.space
          storage-quota: ${{ steps.project.outputs.storage-quota }}

```


