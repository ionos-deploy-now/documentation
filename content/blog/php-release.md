---
description: 'Deploy Now supports php-frameworks Laravel and Symfony'
created: '2022-04-13'
author: 'robert-schleinhege'
header: '@assets/blog/deploy-now-php-launch.png'
teaser: '@assets/blog/deploy-now-php-launch.png'
tags:
    - php
    - laravel
    - symfony
    
---

# Introducing LAMP-Stack support on Deploy Now! Our approach to deploy dynamic websites

## Introduction

Almost exactly one year after our first release, after many small improvements and evaluating and implementing your feedback, the first major feature release for Deploy Now has gone live. In addition to the already supported generators for static sites, we now also support the most famous web stack, the LAMP stack, and thus now also dynamic sites and the PHP frameworks Laravel and Symfony.

![Domain select](/domain-select.png)

## How does deploying PHP on Deploy Now feel like?

Our main goal was to make the deployment of dynamic pages as fast and enjoyable as static pages. The first step of what we call our wizard to help you deploy your site is to link your GitHub repository. Now we get a picture of your code and help you set up your build pipeline. New to PHP: Files need to be made persistent and you may want to run commands on your runtime, you can define these deployment settings in the wizard and change them in a file afterwards.

We also help you to create environment variables for your runtime, that can be secret or not, and template a config file. You can create a database and reference it’s key value pairs in your config file and set up a send mail account if you like.

## Our most powerful feature: A smart setup for 30+ frameworks

Deploy Now wants makes setting up automated workflows as seamless as possible. This is why we’ve fundamentally updated our detection algorithm, that scan your repo for the frameworks you use and the build steps you need to prefill our setup wizard. The inputs of the detection, together with your adaptions, is used to set up a GitHub Actions workflow, that you can adapt anytime

## Supported Static Site Generators, Single Page Application Frameworks and php Frameworks

| Static Site Generators | SPA Frameworks | php Frameworks  |
| :------------- |:-------------| :-----|
| Hugo | Angular | Laravel |
| Gatsby | React | Symfony |        
| Gridsome | Vue |
| Docusaurus | Ionic |
| Vuepress | Svelte |
| Vitepress | Ember |
| NuxtJS (static) |
| NextJS (static) |
| Hexo |
| Metalsmith |
| 11ty | 
| UmiJS |
| Astro | 
| Scully | 
| ElderJS |
| Middleman | 
| Jekyll |
| Nanoc |
| Pelican |
| mkdocs |
| Jigsaw | 
| Sculpin |










