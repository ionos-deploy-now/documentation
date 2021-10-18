---
description: ''
sidebar: 'docs'
prev: '/docs/from-sample/'
next: '/docs/from-repo/'
editable: true
---

# From command line

How to start your first project with Deploy Now if you don't have any specific project in mind, but you like to evaluate new things? The following guide provide you with some ideas how to start from scratch.

## Plain html site

> The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.

1. Create a simple plain html site

```
mkdir my-site
cd my-site
echo '<!DOCTYPE html>\n<html>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>' > index.html
echo "file://`pwd`/index.html"
```

2. Visit your site locally by copying stdout to your favorite browser bar.

3. Now, [create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands.

```
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin git@github.com:username/reponame.git # replace by URI to your repo
git push -u origin mai
```

4. Setup deployment

Sign in to your [Deploy Now](https://ionos.space/) account and click ```New project```. Next, choose the source you want to deploy from.

![Select source](/wizard-deploy-from-own-repo.png)

If you created a new GitHub repository you've probably to grant new permission rights to Deploy Now in GitHub. Otherwise it won't be listed right away if you choose ```Deploy from my own GitHub repository```. After selecting your repository choose following configuration:

![Select configuration](/wizard-plain-html-select.png)

Now, take a short break until your project is build and deployed. Deploy Now will always show you the current build & deploy status of your project. If it's done Deploy Now provides a direct URL to your project. Besides you find in your repository a new workflow file named ```.github/workflows/deploy-now.yml```. 

## Single Page Applications (SPA)

A single-page application (SPA) interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of reloading the entire page for every request.

:::note
Following SPA instructions use npx. Make sure you have npx installed. npx is shipped by default since npm ≥ 5.2.0.
:::

### React app

> A JavaScript library for building user interfaces

1. Create a new [React](https://reactjs.org/) app:

```
npx create-react-app@latest react-app
cd react-app
yarn start
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now). In your workflow file ```.github/workflows/deploy-now.yml``` your ```dist-folder``` should be ```./build``` by default now.

### Vue app

> The Progressive JavaScript Framework

1. Create a new [Vue](https://vuejs.org/) app:

```
npx @vue/cli@latest create --default vue-app
cd vue-app
yarn serve
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now). In your workflow file ```.github/workflows/deploy-now.yml``` your ```dist-folder``` should be ```./dist``` by default now.

### Svelte app

> Cybernetically enhanced web app

1. Create a new [Svelte](https://svelte.dev/) app:

```
npx degit@latest sveltejs/template svelte-app
cd svelte-app
npm ci
npm run build
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now).

:::caution Grab it!
Currently Deploy Now doesn't support Ionic setup process automatically. We're working on more automation. But in meanwhile you have to get your hands dirty.
That means you have to choose for Ionic ```Language = JavaScript```, ```Template = React``` and ```Variant = npm ci``` in Deploy Now. At least this will setup a working deployment workflow. But unfortunately your first build will fail. Go to your ```.github/workflows/deploy-now.yml``` and change dist folder from ```dist-folder: dist``` to ```dist-folder: public``` and commit your changes. Now, build and deploy for Svelte in the above setup should work fine.
:::


### Angular app

> The modern web developer's platform

1. Create a new [Angular](https://angular.io/) app:

```
npx -p @angular/cli@latest ng new angular-app
cd angular-app
npm run start
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now).

:::caution Grab it!
Currently Deploy Now doesn't support Angular setup process automatically. We're working on more automation. But in meanwhile you have to get your hands dirty.
That means you have to choose for Angular ```Language = JavaScript```, ```Template = Node``` and ```Variant = npm install``` in Deploy Now. At least this will setup a working deployment workflow. But unfortunately your first build will fail. Go to your ```.github/workflows/deploy-now.yml``` and replace ```run: npm run build``` with ```run: npm run ng build``` and change dist folder from ```dist-folder: dist``` to ```dist-folder: dist/angular-app``` and commit your changes. Now, build and deploy for Angular in the above setup should work fine.
:::

### Ionic app

> Ionic Framework's app development platform builds amazing cross-platform mobile, web, and desktop apps all with one shared code base and open-web standards.

1. Create a new [Ionic](https://ionicframework.com/) app:

```
npx @ionic/cli@latest start ionic-app list --type=react --no-link
cd ionic-app
npm run serve
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now).

:::caution Grab it!
Currently Deploy Now doesn't support Ionic setup process automatically. We're working on more automation. But in meanwhile you have to get your hands dirty.
That means you have to choose for Ionic ```Language = JavaScript```, ```Template = React``` and ```Variant = npm ci``` in Deploy Now.
:::

## Static Site Generators (SSG)

A Static Site Generator (SSG) is a tool which run as part of a build to transform content, data, and templates into files which can be deployed to a hosting environment as a ready-to-serve web site.

:::note
Following SSG instructions use npx. Make sure you have npx installed. npx is shipped by default since npm ≥ 5.2.0.
:::

### Gatsby site

> [Gatsby](https://www.gatsbyjs.com/) is a React-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

1. Create a new site by entering the following commands in your terminal:

```
npx gatsby-cli@latest new gatsby-site
cd gatsby-site
npm run develop
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now). In your workflow file ```.github/workflows/deploy-now.yml``` your ```dist-folder``` should be ```./public``` by default now.

### Gridsome site

> [Gridsome](https://gridsome.org/) is a Vue-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

1. Create a new site by entering the following commands in your terminal:

```
npx @gridsome/cli@latest create gridsome-site
cd gridsome-site
npm run develop
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now). In your workflow file ```.github/workflows/deploy-now.yml``` your ```dist-folder``` should be ```./dist``` by default now.

### Hexo site

> A fast, simple & powerful blog framework, powered by Node.js and NPM.

1. Create a new site by entering the following commands in your terminal:

```
npx hexo-cli@latest init hexo-site
cd hexo-site
yarn server
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now). In your workflow file ```.github/workflows/deploy-now.yml``` your ```dist-folder``` should be ```./public``` by default now.

### Docusaurus site

> Build optimized websites quickly, focus on your content.

1. Create a new site by entering the following commands in your terminal:

```
npx @docusaurus/init@latest init docusaurus-site classic
cd docusaurus-site
yarn start
```

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now).

:::caution Grab it!
Currently Deploy Now doesn't support Docusaurus setup process automatically. We're working on more automation. But in meanwhile you have to get your hands dirty.
That means you have to choose for docusaurus ```Language = JavaScript```, ```Template = React``` and ```Variant = yarn``` in Deploy Now.
:::

### Nuxt as SSG site 

> Build your next Vue.js application with confidence using Nuxt: a framework making web development simple and powerful.

1. Create a new site by entering the following commands in your terminal:

```
npx create-nuxt-app@latest nuxt-app
cd nuxt-app
yarn build
yarn start
```

:::note
Be aware to choose "Static (Static/Jamstack hosting)" as deploymnent target. Deploy Now doesn't support server side node applications. As a result you can run following examples only in client mode.
:::

2. Visit your site locally by copying localhost address from CLI stdout to your favorite browser bar.

3. Now, initialize your Git workflow and setup your deployment as described [above](/docs/framework-guide/#git-based-deployment-with-deploy-now).

:::caution Grab it!
Currently Deploy Now doesn't support Nuxt setup process automatically. We're working on more automation. But in meanwhile you have to get your hands dirty.
That means you have to choose for Nuxt ```Language = JavaScript```, ```Template = Vue``` and ```Variant = yarn``` in Deploy Now. At least this will setup a working deployment workflow. But unfortunately your first build will fail. Go to your ```.github/workflows/deploy-now.yml``` and replace ```run: yarn build``` with ```run: yarn generate```. Now, build and deploy for Nuxt in the above setup should work fine.
:::

## PHP

tbd

## Git-based deployment with Deploy Now

Below the general git-based deployment with Deploy Now is described. 

### Initialize Git workflow

[Create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands:
```
git init
git remote add origin git@github.com:username/reponame.git
git add .
git commit -m 'initial commit'
git push origin main
```

### Setup deployment

Sign in to your [Deploy Now](https://ionos.space/) account and click ```New project```. Next, choose the source you want to deploy from. If you created a new GitHub repository you've probably to grant new permission rights to Deploy Now in GitHub. Otherwise it won't be listed right away if you choose ```Deploy from my own GitHub repository```. After selecting one respository the setup process should automatically start. If Deploy Now doesn't have a setup blueprint or some settings are unclear, you will be asked some framework related questions before continuing. If you done take a short break until your project is build and deployed.

### General notes

:::note
At the moment the number of frameworks Deploy Now is able to detect and support out of the box is still limited. If you're framework isn't listed below, please choose ```PlainHtml``` as language and template. This workflow will guarantee to you that at least the deployment setup will work fine and data is transferred from GitHub to Deploy Now. Based on this workflow you're able to customize your build further. 
:::

