---
description: ''
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/framework-samples/'
editable: true
---

# Framework guide

Deploy Now supports to deploy any kind of static web projects. It doesn't matter if this is build up by a static site generator or any other framework, even it's not listed below, you can still deploy it using this guide.

## Git-based deployment with Deploy Now

Below the general git-based deployment with Deploy Now is described. 

### Initialize Git workflow

[Create a new Git repository on GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo#create-a-repository) and copy the URI of the repo to your clipboard.

Afterwards initialize git and push your project to the created GitHub repository by the following commands:
```
git init
git remote add origin git@github.com:<your user>/project-name.git
git branch -M main
git push -u origin main
```

### Setup deployment

Sign in to your [Deploy Now](https://ionos.space/) account and click ```New project```. Next, choose the source you want to deploy from. If you created a new GitHub repository you've probably to grant new permission rights to Deploy Now in GitHub. Otherwise it won't be listed right away if you choose ```Deploy from my own GitHub repository```. After selecting one respository the setup process should automatically start. If Deploy Now doesn't have a setup blueprint or some settings are unclear, you will be asked some framework related questions before continuing. If you done take a short break until your project is build and deployed.

### General notes

**Note**: At the moment the number of frameworks Deploy Now is able to detect and setup out of the box is still limited. If you're framework isn't listed below, please choose ```PlainHtml``` as language and template. This workflow will guarantee that at least the deployment setup will work fine and data is transferred from GitHub to Deploy Now. Based on this workflow you're able to customize your build further. 

## Starting your first static web project

How to start your first project with Deploy Now if you don't have a specific framework in mind. Let's give you some ideas by example.

**Note**: Following examples uses ```npx``` by default. If you have npm ≥ 5.2.0 you should already have installed npx on your computer. In the unexpected case you don't have installed ```npx``` you have to install ```npx``` first:

```
npm install -g npx
```

### Plain html site

1. Create a simple plain html site:

```
mkdir my-site
cd my-site
echo '<!DOCTYPE html>\n<html>\n\t<body>\n\t\t<h1>Hello World!</h1>\n\t</body>\n</html>' > index.html
echo "`file:///pwd`\index.html"
```

2. Visit your site locally by copying stdout to your browser address.

3. After setting up Git based deployment with Deploy Now your ```dist-folder``` should be ```./``` by default.

### React App

1. Create a new [React](https://reactjs.org/) app:

```
npx create-react-app react-app
cd react-app
yarn start
```

2. Visit your site locally by copying localhost address from CLI stdout to your clipboard. Next, go to your favorite browser to visit site.

3. After setting up Git based deployment with Deploy Now your ```dist-folder``` should be ```./build``` by default.

Run the following command to achieve the same result locally on your machine:

```
yarn build
```

### Vue App

Create a new [Vue](https://vuejs.org/) app:

```
npx @vue/cli create --default vue-app
cd vue-app
yarn serve
```

Lookup localhost address on your terminal window and copy the address to your clipboard. Visit address with your default browser.

### Angular App

Create a new [Angular](https://angular.io/) app:

```
npx -p @angular/cli ng new angular-app
cd angular-app
npm run start
```

Lookup localhost address on your terminal window and copy the address to your clipboard. Visit address with your default browser.

**Note**: So far Deploy Now doesn't support Angular setup process automatically. In meanwhile choose ```Language = JavaScript```, ```Template = Node``` and ```Variant = npm install``` in Deploy Now. Unfortunately the first build will fail. That means that you have to customize the generated ```ionic-app/.github/workflows/deploy-now.yml``` manually. Please replace ```run: npm run build``` with ```run: npm run ng build``` and change dist folder from ```dist-folder: dist``` to ```dist-folder: dist/angular-app``` and commit your workflow. Now, build and deploy should work fine.

### Ionic App

Create a new [Ionic](https://ionicframework.com/) app:

```
npx @ionic/cli start ionic-app conference --type=react --no-link
cd ionic-app
npm run serve
```

**Note**: So far Deploy Now doesn't support Ionic setup process automatically. In meanwhile choose ```Language = JavaScript```, ```Template = Node``` and ```Variant = npm install``` in Deploy Now. Unfortunately the first build will fail. That means that you have to customize the generated ```ionic-app/.github/workflows/deploy-now.yml``` manually. Please change dist folder from ```dist-folder: dist``` to ```dist-folder: build``` and commit your workflow. Now, build and deploy should work fine.

Lookup localhost address on your terminal window and copy the address to your clipboard. Visit address with your default browser.

### Gatsby site

[Gatsby](https://www.gatsbyjs.com/) is a React-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

Create a new site by entering the following commands in your terminal:

```
npx gatsby-cli new gatsby-site
cd gatsby-site
npm run develop
```

Lookup localhost address on your terminal window and copy the address to your clipboard. Visit address with your default browser.

### Gridsome site

[Gridsome](https://gridsome.org/) is a React-based, open source static site generator that pulls data via GraphQL to a wide range of content sources.

Create a new site by entering the following commands in your terminal:

```
npx @gridsome/cli create gridsome-site
cd gridsome-site
npm run develop
```

Lookup localhost address on your terminal window and copy the address to your clipboard. Visit address with your default browser.

### Nuxt site

```
npx create-nuxt-app nuxt-app
cd nuxt-app
npm run build
npm run start
```

### Next site

tbd

### Jekyll site

tbd

### Hugo site

tbd

## Starting your first PHP web project

tbd



