---
description: 'Deploy Now now supports the deployment of PHP-Apps including support for MariaDB and automated setups for Laravel and Symfony.'
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

Exactly one year after our first release, after many small improvements and evaluating and implementing your feedback, the first major feature release for Deploy Now went live. In addition to the already supported static site generation and single page application frameworks, we now also support the most popular web stack, the LAMP stack. Deploy Now PHP Projects come with automatic detection and setups for Laravel and Symfony and MariaDB support.

![PHP now available](/phpmenu3.gif)

## What does deploying PHP on Deploy Now feel like?

Our main goal was to make the deployment of dynamic pages as fast and enjoyable as static pages. Our wizard guides you through the setup of the workflow, starting with connecting your repo. Now we get a picture of your code and help you set up your build pipeline. New to PHP: You may want to make files persistent or execute commands on your runtime. You can define these deployment settings in the wizard and change them in a file afterwards.
We also help you to create environment variables for your runtime, that can be secret or not, and template a config file. You can create a database and reference it’s key value pairs in your config file and set up a send mail account if you like.

You can find a step by step guide for setting up your workflow [here](/docs/from-repo/). 

## A smart setup for 30+ frameworks

![Framework Detection](/detection.gif)

Deploy Now wants to make setting up automated workflows as seamless as possible. This is why we’ve fundamentally updated our detection algorithm. Our  algorithm scans your repository for the frameworks you use and the build steps you need to prefill our setup wizard. The inputs of the detection, together with your adaptions, is used to set up a GitHub Actions workflow, that you can adjust anytime.

## Supported Static Site Generators, SPA Frameworks and PHP Frameworks

Below, you can find an updated list of all the frameworks we detect out of the box in addition to Laravel and Symfony. Of course, you an always set up completely custom build pipelines, if you don't find your favorite framework in the list.

| Static Site Generators | SPA Frameworks | PHP Frameworks  |
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

Do you have feefback for us or are you missing a feature? Let us know on [GitHub Issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues).

We hope you enjoy the new features!








