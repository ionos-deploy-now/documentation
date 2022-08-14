---
description: 'Quick manuals about how to set up a static or PHP project on the command line'
sidebar: 'docs'
prev: '/docs/framework-samples/'
next: '/docs/from-repo/'
editable: true
---

# From command line

You don't have a specific project at hand and you want to start from scratch? Below you can find instruction how to set up projects with popular frameworks starting just from the command line.

*Not what you are looking for? [Start from a sample](/docs/framework-samples/) or [deploy an existing repository](/docs/from-repo/).*

## Plain html site

> The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.

1. Create a simple plain html site

```
mkdir html-site
cd html-site
echo '<!DOCTYPE html>\n<html>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>' > index.html
echo "file://`pwd`/index.html"
```

2. Visit your site locally by copying stdout to your favorite browser bar.

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics on the fly and suggest an appropriate project package. In this case this should result in `Plain HTML` without any further build steps. This is fine in this case. Just proceed and finalize the setup.

![Select configuration](/wizard-plain-html.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

## Single Page Applications (SPA)

A single-page application (SPA) interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of reloading the entire page for every request.

### React App

> A JavaScript library for building user interfaces

1. Create a new [React](https://reactjs.org/) app

```
npx create-react-app@latest react-app
cd react-app
npm i
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
npm run start
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics on the fly and suggest an appropriate project package. With `React` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-react.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Vue App

> The Progressive JavaScript Framework

1. Create a new [Vue](https://vuejs.org/) app.

```
npx @vue/cli@latest create --default vue-app
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd vue-app
npm run serve
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Vue` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-vue.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Angular App

> The modern web developer's platform

1. Create a new [Angular](https://angular.io/) app:

```
npx -p @angular/cli@latest ng new angular-app
cd angular-app
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
npm run start
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Angular` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Be aware that your dist folder depends on your Angular folder structure.
From here proceed and finalize the setup.

![Select configuration](/wizard-angular.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Svelte App

> Cybernetically enhanced web app

1. Create a new [Svelte](https://svelte.dev/) app:

```
npm create svelte@latest svelte-app
cd svelte-app
npm i
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
npm run dev
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Svelte` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-svelte.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Ember App

> A framework for ambitious web developers.

1. Create a new [Ember](https://emberjs.com/) app:

```
npx ember-cli new ember-app
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd ember-app
npm run start
```

:::note
The default component `<WelcomePage />` isn't rendered properly in production mode and [leads to errors](https://github.com/ember-cli/ember-welcome-page/issues/385). Therefore you need to replace this component with some meaningful content or simply remove `production` from `"build": "ember build --environment=production"` in your `package.json` to see first of all that your site is working. 
:::

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Ember` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-ember.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Ionic App

> Ionic Framework's app development platform builds amazing cross-platform mobile, web, and desktop apps all with one shared code base and open-web standards.

1. Create a new [Ionic](https://ionicframework.com/) app:

```
npx @ionic/cli@latest start ionic-app list --type=react --no-link
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd ionic-app
npm run start
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. Ionic supports under the hood Angular, React and Vue.js - According to the selected framework Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-ionic-react.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

## Static Site Generators (SSG)

A Static Site Generator (SSG) is a tool which run as part of a build to transform content, data, and templates into files which can be deployed to a hosting environment as a ready-to-serve web site.

## Standard SSG Tools


### Astro Site

> [Astro](https://astro.build/) is an all-in-one web framework for building fast, content-focused websites.

1. Create a new site by entering the following commands in your terminal:

```
npm create astro@latest
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd <new project dir>
npm run dev
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Astro` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-astro.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Docusaurus Site

> Build optimized websites quickly, focus on your content with [Docusaurus](https://docusaurus.io/).

1. Create a new site by entering the following commands in your terminal:

```
npx @docusaurus/init@latest init docusaurus-site classic
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd docusaurus-site
yarn start
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Docusaurus` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-docusaurus.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Gatsby Site

> [Gatsby](https://www.gatsbyjs.com/) is a React-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

1. Create a new site by entering the following commands in your terminal:

```
npx gatsby-cli@latest new gatsby-site
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd gatsby-site
npm run develop
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Gatsby` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-gatsby.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Gridsome Site

> [Gridsome](https://gridsome.org/) is a Vue-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

1. Create a new site by entering the following commands in your terminal:

```
npx @gridsome/cli@latest create gridsome-site
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd gridsome-site
npm run develop
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Gridsome` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-gridsome.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Hexo Site

> [Hexo](https://hexo.io/) is a fast, simple & powerful blog framework, powered by Node.js and NPM.

1. Create a new site by entering the following commands in your terminal:

```
npx hexo-cli@latest init hexo-site
cd hexo-site
npm i
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
npm run server
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Hexo` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-hexo.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

## Hybrid SSG Tools


### NextJS 

> [Next.js](https://nextjs.org/): The React Framework for Production

1. Create a new site by entering the following commands in your terminal:

```
npx create-next-app@latest next-site --example basic-css
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
cd next-site
npx next@latest dev
```

3. Enable static HTML export

You have to explicit define that you want to export your site as static version. Therefore add the following lines into your `package.json`.

```
"scripts": {
    ...
    "export": "next build && next export"
},
```

4. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

5. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `NextJS` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-nextjs.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### NuxtJS 

> Build your next Vue.js application with confidence using [NuxtJS](https://nuxtjs.org/): a framework making web development simple and powerful.

1. Create a new site by entering the following commands in your terminal:

:::note
Be aware to choose "Static (Static/Jamstack hosting)" as deployment target. Deploy Now doesn't support server side node applications yet.
:::

```
npx create-nuxt-app@latest nuxt-site
cd nuxt-site
npm i
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
npm run dev
```

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `NuxtJS` Deploy Now will propose a `NodeJS` build step with prefilled inputs from the `package.json` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-nuxtjs.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

## Binary SSG Tools

### Hugo Site

> [Hugo](https://gohugo.io/) is the world’s fastest framework for building websites

1. Requires pre-install of `hugo`. See [installation](https://gohugo.io/getting-started/installing) instructions.

2. Create a new site by entering the following commands in your terminal:

```
hugo new site hugo-site
cd hugo-site
git init -b main
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
echo theme = \"ananke\" >> config.toml
hugo new posts/my-first-post.md
echo "---
title: "My First Post"
date: 2022-01-01T12:12:12+01:00
draft: false
---" > content/posts/my-first-post.md
```

3. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
hugo server -D
```

4. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

5. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Hugo` Deploy Now will propose a `Hugo` build step with prefilled inputs. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-hugo.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

### Jekyll Site

> [Jekyll](https://jekyllrb.com/) transforms your plain text into static websites and blogs.

1. Requires pre-install of `jekyll`. See [installation](https://jekyllrb.com/docs/installation/) instructions.

2. Create a new site by entering the following commands in your terminal:

```
jekyll new jekyll-site
```

:::note
Note that you run the following command if your local setup doesn't match a Linux-powered machine. 
```
bundle lock --add-platform x86_64-linux
```
This will save you from unexpected errors in the build process. Reason is the GitHub Runners architecture.
:::


3. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

```
jekyll serve
```

4. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

5. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. With `Jekyll` Deploy Now will propose a `Bundler` build step with prefilled inputs from the `Gemfile` of the repository. All defaults in this case should be fine. Just proceed and finalize the setup.

![Select configuration](/wizard-jekyll.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.

## PHP

The following section give you some ideas to use [PHP](https://php.net) with Deploy Now.

### Plain PHP Site

> PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.

1. Create a simple PHP site

```
mkdir php-site
cd php-site
echo '<?php phpinfo(); ?>' > index.php
php -S localhost:8000
```

2. Visit your site locally by copying localhost:8000 to your favorite browser bar.

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init -b main
git add .
git commit -m "initial commit"
git remote add origin git@github.com:username/reponame.git # replace by URI of your repo
git push -u origin main
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/?utm_source=deploy-now-docs&utm_medium=doc-content&utm_campaign=setup-guides) account and click `Add new project`. Next, choose your newly created project. With your selection Deploy Now will try to detect your framework specifics settings on the fly and suggest an appropriate project package. In this case this should result in `PHP` without any further build steps. This is fine in this case. Just proceed and finalize the setup.

![Select configuration](/wizard-php.png)

Now, take a short break until your project is deployed. Deploy Now will always show you the current build and deploy status of your project. If it's done Deploy Now provides a direct URL to your project. 

Now, if you look at your repository you will find a new workflow file named `.github/workflows/deploy-now.yaml`. This file includes all initial build and deployment instructions for you project. Feel free to customize your workflow from now on here.