---
description: 'Deploy Now supports PHP app deployment including support for MariaDB and automated setups for Laravel and Symfony.'
created: '2022-04-13'
author: 'robert-schleinhege'
header: '@assets/blog/deploy-now-php-launch.png'
teaser: '@assets/blog/deploy-now-php-launch.png'
tags:
    - php
    - laravel
    - symfony
    
---

# Deploy Now feature realease: LAMP stack support for dynamic websites now available 

## Introducing PHP Projects 

Just one year after our first release, and after lots of small improvements thanks to feedback from you, the first major feature release for Deploy Now went live. I'm happy to announce that Deploy Now also supports the most popular web stack — the LAMP stack. This update is in addition to any static site generators or single page application frameworks previously supported. That's not all! Deploy Now PHP Projects come with MariaDB support, plus automatic detection and set up for Laravel and Symfony.

![PHP now available](/phpmenu3.gif)

## How does PHP deployment work now?

Our main goal was to make deploying dynamic pages as fast and delightful as static pages. Our wizard guides you through the workflow setup, starting with connecting your repo. Doing this gives us a snapshot of your code, which helps you set up your build pipeline. 

### New with PHP Projects
If you want to make files persistent or execute commands on your runtime environment, you can define these deployment settings in the wizard and change them in a file afterwards. We'll also help you create runtime environment variables — secret or not — and template a config file. You can now create a database and reference its key value pairs in your config file and set up a send mail account.

Learn how to set up your workflow with this [step-by-step guide](/docs/from-repo/). 

## Smart setup for 30+ frameworks

![Framework Detection](/detection.gif)

We’ve fundamentally updated our detection algorithm to make setting up automated workflows in Deploy Now as seamless as possible. The algorithm scans your repository for the frameworks you're using and the build steps you need, then prefills the setup wizard. These inputs, and any changes you make, are used to set up a GitHub Actions workflow. You can modify your workflow at any point. 

## Supported static site generators, SPA and PHP frameworks
In additon to Laravel and Symfony, here's an updated list of all the frameworks we detect out of the box. If you don't find your favorite framework in the list, you can always set up your own custom build pipelines.

| Static site generators | SPA frameworks | PHP frameworks  |
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

Got feedback or need a feature? Reach out to us anytime on [GitHub Issues](https://github.com/ionos-deploy-now/ionos-deploy-now/issues).

Enjoy the new features!








