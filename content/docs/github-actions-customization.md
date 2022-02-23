---
description: ''
sidebar: 'docs'
prev: '/docs/deployment-configuration/'
next: '/docs/domain-tls/'
editable: true
---

# Build configuration

## During project creation

When setting up a new project in Deploy Now, you can configure your build process directly in the UI. Deploy Now analyzes your repository for the framework you are using and prefills input fields accordingly. Your build can contain various build steps such as a Node.js, Composer or Bundler. Each build step can contain multiple build commands and build environment variables. All build steps should move output to one publish directory. 

## For existing projects

The inputs of the project creation process are used to set up an automated workflow based on GitHub Actions. This workflow is defined under `.github/workflows/deploy-now.yaml`.

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) to find out how you can use them to enhance the Deploy Now workflow, e.g. by adding  powerful [Continuous Integration](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) functionalities. Check the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for other awesome Actions you can integrate.
:::

If you want to adapt your build steps for existing projects, you can do this directly by editing the workflow yaml. Below, you can find an examplary workflow. The [fetch project data Action](https://github.com/ionos-deploy-now/retrieve-project-info-action) in the beginning retrieves project meta data from Deploy Now. Afterwards the repository is checked out, a build runtime is created, dependencies are installed and build steps are executed. Feel free to customize these step anytime to adapt your build or further enhance your CI/CD pipeline. The [deploy build Action](https://github.com/ionos-deploy-now/deploy-to-ionos-action) moves the build results to the infrastructure. 

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


