---
description: ''
sidebar: 'docs'
next: '/docs/framework-samples/'
editable: true
---

# Introduction

Deploy Now is a hosting platform that allows you to deploy static sites and PHP apps directly via GitHub. As a tool built from developers for developers, Deploy Now automates build and deployment so you can focus entirely on your code. Your code is deployed to [IONOS](https://www.ionos.com/) reliable shared hosting infrastructure in Europe and North America. The workflow automation is based on [GitHub Actions](https://github.com/features/actions) and can be customized directly in your repository.

## Deploy Now in a nutshell

|FUNCTION SET|APPLICATION STACK|BY DEFAULT|
|-|-|-|
|Smart framework setup|HTTP/2|DDos Protection|
|Automated deployments|Apache|Geo redundancy|
|[Staging deployments](/docs/staging-deployments)|[SSL/TLS by default](/docs/domain-tls/#tlsssl)|[Climate-neutral hosting](https://www.ionos.com/environment)|
|[Custom domains](/docs/domain-tls)|Wide variety of PHP versions|IPv6|

## Supported technologies

### Plain HTML and PHP websites
Deploy Now allows you to host static websites based on HTML, CSS and JavaScript. Your projects are served via Apache webserver. All files in your dist folder are transfered to IONOS just with git push. On top Deploy Now supports PHP. A dedicated support for PHP frameworks like Laraval and Symfony will be available in an alpha version soon.

### Static Site Generators
If you are working with static site generators, Deploy Now allows you to move static files to our infrastructure after every build based on the [GitHub Actions](https://github.com/features/actions) pipeline. If you setup the build pipeline manually, all existing static site generators can be used. Deploy Now offers out of the box support for Gridsome, Gatsby, Hugo, Jekyll, Eleventy, Hexo and Metalsmith.

### Single Page Applications
You can deploy Single Page Applications based on frameworks like React, Vue, Angular, Svelte or Ionic.

### Not supported
Our hosting infastructure uses Apache webservers only. Thus, server-side rendering with Node.js is not supported. Besides, Deploy Now does not support databases. If you are missing one of these or any other technology, you can let us know by requesting a feature via the product dashboard.

## Getting started
You can start either [from sample](/docs/framework-samples), [from command line](/docs/from-cmd-line) or [from an existing repository](/docs/from-repo).
