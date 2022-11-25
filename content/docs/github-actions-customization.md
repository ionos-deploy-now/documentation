---
description: 'How to configure the build steps of your Deploy Now project. Deploy Now detects your framework from the repository and sets up a GitHub Actions workflow accordingly.'
sidebar: 'docs'
prev: '/docs/deploy-php-apps/'
next: '/docs/deployment-configuration/'
editable: true
---

# Build configuration

Build steps are automated in GitHub Action workflows. These workflows are set up during project creation. Deploy Now analyzes your repositories and suggest the required build steps accordingly. Build steps can make use of Node.js, Composer or Bundler. After the set up, build settings can be edited directly in the GitHub Action workflow files stored in the repository.

Configurations can be made under `.github/workflows/deploy-now.yaml` for [workflow v1](/docs/git-integration/#workflow-versions) and `.github/workflows/[project-name]-build.yaml` for [workflow v2](/docs/git-integration/#workflow-versions). More information about the Deploy Now workflows can be found under [GitHub integration](/docs/git-integration/).

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) for instructions and the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for powerful extensions.
:::

## Configurations

### Build commands
#### Description
Combining your source code and dependencies to build a runnable instance of your web project. 
#### How to edit
Editing commands or adding new commands in building steps of the workflow file.
#### Example
`workflow v1`:
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

`workflow v2`:
``` yaml
      - name: Build Node assets
        env:
          CI: true
          SITE_URL: ${{ steps.project.outputs.site-url }}
        run: |
          npm ci
          npm run build
```

### Build dependencies
#### Description
Before running a build command, the software required for your build needs to be installed.
#### How to edit
Edit versions of the existing setup steps or adding additional steps to install dependencies, following the schema below.
#### Example
`workflow v1`:
``` yaml
      - name: Setup Node
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: v16.x
```

`workflow v2`:
``` yaml
      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: v16.x
```

### Build environment variables
#### Description
Key value pairs accessible during your build for behavior customization or connecting to APIs. They can be either stored as plain text or, if sensitive, stored as [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets). 
#### How to edit
Navigate to the setup of the dependency or the build execution steps and list key-value-pairs below `env:` according to the documentation of the corresponding action.
#### Example
`workflow v1`:
``` yaml
      - name: Build PHP assets
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        env:
          MY_ENV_VAR: value-for-my-env-var
          MY_SECRET_ENV_VAR: ${{ secrets.MY_SECRET }} 
        run: php artisan key:generate --force -n
```

`workflow v2`:
``` yaml
      - name: Build PHP assets
        env:
          MY_ENV_VAR: value-for-my-env-var
          MY_SECRET_ENV_VAR: ${{ secrets.MY_SECRET }} 
        run: php artisan key:generate --force -n
```

### Publish directory
#### Description
The directory, relative to your repository root, that contains the results of the build process that are deployed to the server.
#### How to edit
If you are running under `workflow v1`, you can edit the publish directory under `dist-folder:` in the `Deploy to IONOS` step of `.github/workflows/deploy-now.yaml` . Under `workflow v2`, you find the same setting under `DEPLOYMENT_FOLDER: ./` in `.github/workflows/[project-name]-build.yaml`.
#### Example
`workflow v1`:
``` yaml
dist-folder: out
```

`workflow v2`:
``` yaml
 env:
  DEPLOYMENT_FOLDER: ./
```

## Need help?
Feel free to reach out to us via <a href="mailto:deploynow-support@ionos.com">deploynow-support@ionos.com</a>.
