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

:::tip
New to GitHub Actions? Check their [documentation](https://docs.github.com/en/actions) to find out how you can use them to enhance the Deploy Now workflow, e.g. by adding  powerful [Continuous Integration](https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration) functionalities. Check the [GitHub Actions](https://github.com/marketplace?type=actions) marketplace for other awesome Actions you can integrate.
:::

## Configurations

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
