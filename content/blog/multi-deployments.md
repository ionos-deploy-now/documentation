---
description: "With our newest Multi Deployments feature, you can publish to multiple productive instances with a single Git Push. Read how we worked on this feature together with our customer Cobra CRM"
created: '2023-02-23'
author: 'simon-morgan'
header: '@assets/blog/multi-deployments-cover.png'
teaser: '@assets/blog/multi-deployments-cover.png'
tags:
    - news
    - release
    - deployment
---
# Effortless Deployments: Linking one Repo to Multiple Runtimes

Do you build websites and applications for clients? Do you reuse much of your code but maintain nearly identical repositories for each production environment? If yes, then you're not alone. Many developers maintain reusable modules via separate repositories for each customer.

But what if you want to make changes for all customers at once, like security fixes or new features? Updating all web spaces manually, via SSH and deploying updated files, is a huge pain.

A manual approach isn't very scalable either, especially when you’re aiming to offer standardised solutions such as portals, e-commerce stores, plugins, and wikis. This is because the task of manually deploying to each production environment becomes too time-consuming as the number of deployment instances increases.

The great news is, Deploy Now's new feature makes updating mass-customised modules even easier. With just one click, you can now push changes from a single code base to all production environments in a matter of seconds. 

Additionally, the feature provides an easy-to-use interface, giving you full visibility of the status of the deployment process and changes in the file system.

## Cobra CRM

[Cobra CRM](https://www.cobra.de/) provides CRM solutions as a service, and has recently built an events module as an extension to their core offering. 

"Our clients kept asking for a smart solution to organise events, be it fundraising dinners, training workshops, or annual general meetings," says Philipp Kreis, CTO at cobra. "With the new online events portal, we wanted to make it as easy and effective as possible to create, publish, and manage attendance for any type of event." 

To facilitate this, they chose a managed LAMP stack hosting environment capable of connecting to their GitHub repositories, where they store and manage code. They then contacted the team behind Deploy Now, the only provider that offers automated deployments of PHP projects from GitHub to an automatically provisioned web space.

Philipp collaborated with the Deploy Now engineering team. They co-created a multi-deployment feature to meet cobra's specific needs. The team created a UX and technical concept while keeping Philipp in the feedback loop. Afterward, cobra's team provided QA testing of the release candidate. 

With the help of Deploy Now, cobra successfully launched their events portal. 

> “Bringing in a new instance from our side is a matter of two clicks now, allowing our client to be up and running in no time.” 
> -- <cite>Philipp Kreis, CTO at cobra</cite>

## Multi deployments in action

Multi deployments with the latest release of Deploy Now are quick and simple. They are available for starter, static and php projects, provided that each production environment uses packages of the same type. 

Set up a Deploy Now project and add extra production deployments on the project page. 

**![Adding a production deployment](/add-prod-deployment.png)**

Each production deployment receives its own filespace and database (php package), meaning their productive data can differ. Files that need to be kept persistent on the server can be defined in config.yaml under .deploy-now/[project-name]. The number of available staging environments will increase automatically based on the number of production deployments.

To update the code in all production environments, just do one git push to the repository. The build will start and the results will be deployed to all web spaces at the same time. 

**![Animation content publishing](/MultiDeployments.gif)**

Give it a try!
