---
description: ''
sidebar: 'docs'
next: '/docs/from-sample/'
editable: true
---

# Introduction

Deploy Now is a hosting platform built from developers for developers. Connect your GitHub account with Deploy Now and your web project is instantly live.

## Deploy Now in a nutshell

Deploy Now provides a full platform for your web projects and integrates perfectly with your https:&#47;&#47;github.com/&lt;your user&gt;. Automation is based on [GitHub Actions](https://github.com/features/actions) that makes it easy to deploy all your changes right away and blends perfectly with your existing dev tooling. 

|FUNCTION SET|APPLICATION STACK|BY DEFAULT|
|-|-|-|
|Smart framework setup|HTTP/2|DDos Protection|
|Automated deployments|Apache|Geo redundancy|
|Staging deployments|SSL/TLS by default|[Climate-neutral hosting](https://www.ionos.com/environment)|
|Custom domains|Wide variety of PHP versions|IPv6|

## Supported technologies

### Plain HTML websites
Deploy Now allows you to host static websites based on HTML and CSS. Deploy Now projects are served from Apache webservers. All files in your dist folder are copied to the IONOS infrastructure after every git commit. 

### Static Site Generators
If you are working with static site generators, Deploy Now allows you to move static files to our infrastructure after every build based on the [GitHub Actions](https://github.com/features/actions) pipeline. If you setup the build pipeline manually, all existing static site generators can be used. Deploy Now offers out of the box support for Gridsome, Gatsby, Hugo, Jekyll, Eleventy, Hexo and Metalsmith

### Single Page Applications
You can deploy Single Page Applications based on frameworks like React, Vue, Angular, Svelte or Ionic.

### Not supported
Our hosting infastructure uses Apache webservers only. Thus, server-side rendering with Node.js is not supported. Besides, Deploy Now does not support databases. If you are missing one of these or any other technology, you can let us know by requesting a feature via the product dashboard.

## Gettig started
You can either [from a sample](/docs/from-sample.md), [from an existing repository](/docs/from-repo.md) or [from the command line](/docs/from-cmd-line.md). 
