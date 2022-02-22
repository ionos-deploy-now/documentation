---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Build configuration

Once you have connected Deploy Now to your repository, you will notice that we have injected a `deploy-now.yaml` file into `.github/workflows/`. This file defines how the GitHub Actions workflow is set up. You can make changes to this file to customize the workflow. 

*For managing the deployment settings of your runtime, please use the [deployment configuration](/docs/deployment-configuration).*

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) to find out how you can use them to enhance the Deploy Now workflow, e.g. by adding  powerful [Continuous Integration](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) functionalities. Check the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for other awesome Actions you can integrate.
:::

## Examplary `deploy-now.yaml`

``` yaml
name: Deploy Now

on:
  - push
  - workflow_dispatch

jobs:
  deploy-now:
    runs-on: ubuntu-latest
    steps:
      # Deploy Now fetches required project meta data
      - name: Fetch project data
        uses: ionos-deploy-now/retrieve-project-info-action@v1
        id: project
        with:
          api-key: ${{ secrets.IONOS_API_KEY }}
          project: ${{ secrets.IONOS_PROJECT_ID }}
          service-host: api-eu.ionos.space
          
      # checkout repository from GitHub
      - name: checkout
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/checkout@v2
        with:
          submodules: 'recursive'
          
      # set up build runtime
      - name: Setup project
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: v12.22.3
          
      # install build dependencies
      - name: Prepare project environment
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm ci
        
      # build project and set build env vars. This might be the section you want to customize.
      - name: Build project
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: npm run build
        
      # this action deploys the project files to the IONOS infrastructure. If you want to manage file persistency and execute commands on your runtime, you can do this under .deploynow/config.yaml.
      - name: Deploy build
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: ionos-deploy-now/deploy-to-ionos-action@v1
        with:
          api-key: ${{ secrets.IONOS_API_KEY }}
          bootstrap-deploy: ${{ steps.project.outputs.bootstrap-deploy }}
          branch-id: ${{ steps.project.outputs.branch-id }}
          dist-folder: src/.vuepress/dist
          project: ${{ secrets.IONOS_PROJECT_ID }}
          remote-host: ${{ steps.project.outputs.remote-host }}
          service-host: api-eu.ionos.space
          storage-quota: ${{ steps.project.outputs.storage-quota }}
```

### Project agnostic and customizable Actions
The Deploy Now workflow contains a set of different Actions. The beginning and the end of the workflow is project agnostic and defined by Deploy Now. The [fetch project data Action](https://github.com/ionos-deploy-now/retrieve-project-info-action) in the beginning retrieves project meta data from Deploy Now. In the end of the workflow, after the build step was executed, generated files are moved to the IONOS infrastructure by the [deploy build Action](https://github.com/ionos-deploy-now/deploy-to-ionos-action). If you want to make configurations to the deployment process itself, you can do this in the [deployment configuration](/docs/deployment-configuration). The middle part in between is project specific and can be customized by you to further enhance your CI/CD pipeline. 


