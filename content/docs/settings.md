---
description: ''
sidebar: 'docs'
prev: '/docs/samples/'
next: '/docs/custom-domain-ssl/'
---

# Settings

## Introduction <Badge text="todo" type="warning"/>

*Deploy Now* is based on [Github actions](https://github.com/features/actions) as automation CI/CD workflow and deploys your website right away from [GitHub](https://github.com/) to [IONOS](https://ionos.com).

Starting a new project with *Deploy Now* generates a GitHub Action workflow YAML out of the box and makes CI/CD to a breeze.

But *Deploy Now* isn't able to guess all options available, and sometimes it makes sense to readjust or simply start your configuration from scratch. In both cases this is the right beginning to read further.

If you look at your project repository into *.github/workflows/* you will find a generated **ionos-space.yml** file when using *Deploy Now*. You're welcome to change whatever you need between **'Get Ionos Project data'** and **'Deploy to IONOS'** actions:

:owl: - ionos-space.yml or deploy-now.yml ?

:owl: - Define distinct names with IONOS in capital letters

:owl: - Rename `Get Ionos Project data` into `fetch data`

:owl: - Rename `Deploy to IONOS` into `deploy` and path?

``` yml
    steps:
      - name: checkout
        uses: actions/checkout@v2
        with:
          submodules: 'recursive'
      - name: Get Ionos Project data
        uses: buildwith-ionos/retrieve-project-info-action@v0.1.3
        id: project
        with:
          service-host: api-eu.ionos.space
          project: be9d62dd-51af-4ac6-accf-d782946bdc95
          api-key: ${{ secrets.IONOS_API_KEY }}

      ...

      - name: Deploy to IONOS
        uses: buildwith-ionos/deploy-to-ionos-action@v0.1.3
        with:
          project: be9d62dd-51af-4ac6-accf-d782946bdc95
          service-host: api-eu.ionos.space
          dist-folder: public
          api-key: ${{ secrets.IONOS_API_KEY }}
          remote-host: ${{ steps.project.outputs.remote-host }}
```

You shouldn't copy both actions from other projects. It's fairly obvious it just won't work.

If you like to start from scratch simply add a *ionos-space.yml* file to your root repository before connecting with *Deploy Now*. We will explain you how it works in the next chapter.

:owl: adding *ionos-space.yml* to root?! and the same file name? really?

## Configuration

:owl: from https://buildwith-ionos.com/docs/configuration/build-configuration/

Simply add a *ionos-space.yml* file to your root repository. If you want to transfer your repository to IONOS you just need to add the following lines:

``` yml
---
distFolder: ./
```

Now, if you add this repository to *Deploy Now* your whole repository is automatically copied under `./` into a IONOS space.

Next, all steps and their options explained in detail.

### deploy

|name|type|mandatory|description|example|
|---|---|---|---|---|
|distFolder|String|true|distribution folder for public use|common usage `./` or `public` or `dist`|
|prepare|PrepareStep|false|preparation instructions for the environment||
|setup|List of SetupStep|false|setup instructions for running a build||
|build|BuildStep|false|build instructions||

### deploy#PrepareStep

A PrepareStep is a run step used to prepare the environment e.G. installing the build dependencies.
It has the following properties:

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|true|name of the workflow step|
|command|`String`|true|The command to setup the environment.|
|Separate commands will be split bei "\n"|???|

### deploy#SetupStep

A SetupStep is a uses steps for the github workflow that defines a action.
It has the following properties:

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the workflow step||
|command|`String`|`true`|The command to setup the environment.|
|Separate commands will be split bei "\n"|???|

### deploy#BuildStep

A BuildStep is a run step used to build the project.
It has the following properties:

|name|type|mandatory|description|example|
|---|---|---|---|---|
|name|`String`|`true`|name of the workflow step|`Build node project`|
|command|`String`|`true`|The command to run as build step.|
|Separate commands will be split bei "\n"|`yarn build`|
|environment|`Map<String, String>`|`false`|The entries are set es env-variables for the build shell.|environment: SITE_URL: `steps.project.outputs.site-url`|CI: true|

In order to have a sidebar visible on the side of the page (like on this one for example) or on mobile devices as an off-canvas navigation, you are required to do some global configuration, as well as some configuration per markdown file.

## Global Configuration
Open the `gridsome.config.js`. The configuration for the sidebar is located under `settings > sidebar`.

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: []
  },
  // ...
}
```

Please note that the sidebar option is an array, since you can define multiple sidebars for different sections of your website. For example you might have a sidebar for your guide and another one for your Api reference.

### The Sidebar Config Object

A single item in this array needs to have the following properties:
- `name`: The identifier of the sidebar. This will be referenced in your markdown frontmatter.
- `sections`: The sidebar is divided into several sections. On this page we have **Getting Started** and **Configuration**

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: [
      name: 'docs',
      sections: []
    ]
  },
  // ...
}
```

An item for the `sections` array might look like this:

```js
// gridsome.config.js
module.exports = {
  // ...
  settings: {
    sidebar: [
      name: 'docs',
      sections: [
        {
          title: 'Getting Started',
          items: [
            '/docs/',
            '/docs/installation/',
            '/docs/writing-content/',
          ]
        },
      ]
    ]
  },
  // ...
}
```

As you can see, we need a `title` for the sections, as well as an array of `items` which are the links to the given pages.

The sidebar performs a static query to get all pages. This is how we automatically put the title of the given page in the sidebar.

## Frontmatter setup

After your global configuration is all done, we only need to tell the markdown page which sidebar to use.

In order to do that we simply reference the `name` of the sidebar in our frontmatter:

```md
---
sidebar: 'docs'
---

# I use the docs sidebar
```
