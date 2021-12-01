---
description: ''
sidebar: 'docs'
prev: '/about-us/'
next: ''
editable: true
---

# PHP Alpha: Deploy Laravel or Symfony with Deploy Now

## Help us take the next big step
Deploy Now started with static sites, but it's time to move on. We know that a lot of you create dynamic apps with PHP frameworks, and we would love to add this capability to Deploy Now. Our goal is to enable managing PHP runtimes including databases with the same convenient developer experience like we offer for static sites. We are excited to announce that we are in public Alpha and would love you to join. How? Just follow the steps below.

## 1. Give us a ping
Drop us a short message under [info@DeployNow.dev](mailto:info@DeployNow.dev) and we will add you to the list of alpha participants. Ideally, you already have a Deploy Now account and tell us your GitHub name in your mail. We will activate the option to use the alpha in your profile accordingly.

## 2. Deploy a sample
As our wizard is not able to detect and configure PHP projects yet, you need deploy one of our samples to create a Laravel or Symfony project. These two samples contain a [file-based configuration](/docs/create-sample/#skip-the-wizard-with-a-file-based-configuration) that skip the setup wizard and deploy your project instantly.

:::note 
The samples below cannot be deployed with the free project packages that come with your Deploy Now membership, as their file size is too large. We will provide you with a sufficiently large project package on request.
:::

### Laravel sample
[This repository](https://github.com/ionos-deploy-now/laravel-starter) contains a sample for the PHP framework [Laravel](https://laravel.com/). You can deploy it by clicking on the button below. It would be awesome if you keep your repository public, so we can check what you are building. 

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/laravel-starter)

### Symfony sample
[This repository](https://github.com/ionos-deploy-now/symfony-starter) contains a sample for the PHP framework [Symfony](https://symfony.com/). You can deploy it by clicking on the button below.

[![Deploy to IONOS](https://images.ionos.space/deploy-now-icons/deploy-to-ionos-btn.svg)](https://ionos.space/setup?repo=https://github.com/ionos-deploy-now/symfony-starter)

## 3. Make it your project
Starting with the sample, you can either further develop the project or merge in code from your existing Laravel or Symfony project. Both samples contain a `config.yaml` under `.deploy-now` for [configuring your deployment](/docs/deployment-configuration/). You can edit this file to define the directories you want to exclude from your deployments and the commands you want to execute on your runtime. 

While working on your project, you can view logs or any other file in your runtime using the Deployment Viewer in Deploy Now. You can find the Deployment Viewer in the three-dot menus next to your deployments. The locations of the log files are described in the [Laravel sample readme](https://github.com/ionos-deploy-now/laravel-starter) and [Symfony sample readme](https://github.com/ionos-deploy-now/symfony-starter).

## 4. Drop us your feedback
After you've contacted us via mail, we will provide you with more information about how to drop us your feedback. Your feedback is crucial for us to tune our Alpha and make the right decisions for a profound PHP support.

Thanks a lot from the entire Deploy Now team and happy deploying! :-)
