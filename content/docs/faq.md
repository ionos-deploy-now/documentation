---
description: ''
sidebar: 'docs'
prev: '/docs/domain-tls/'
next: '/about-us/'
editable: true
---

# Frequently Asked Questions

## What can I deploy with Deploy Now?
You can deploy any kind of website or app that work with HTML, CSS and client-side JavaScript. This includes popular frontend frameworks like Vue, React and Angular as well as static site generators like Gatsby, Hugo, Nuxt, Next, Jekyll, Jigsaw, Gridsome or Hexo, which follow the Jamstack approach.
![Deployment Options](/deploy-now-supported-frameworks.svg)  

## What is the Jamstack? 
The Jamstack is a novel web architecture based on the principles of prerendering and decoupling. Jamstack stands for client-side **J**avaScript, reusable **A**PIs and **M**arkup. The basic concept is to deliver the markup of a site as fast as possible and use JavaScript and APIs to talk to various services at runtime, after the static frontend is delivered to the browser. In comparison to the classic web architecture the Jamstack is faster, as no database request has to be made at runtime, and more secure, as a static site offers fewer points for attacks.
![Jamstack vs. Classic Web Architecture](/jamstack-architecture.svg) 

## What is a static site generator? 
A static site generator is an essential component of the jamstack architecture. They allow prerendering in the sense that websites files are generated during the build time instead of the request time (when a user opens the side). A static site generator does this by listening to changes in a set of input files like content, templates or data. Everytime an input changes, new output is generated in the form of HTML, CSS and JavaScript files.
![Static Site Generator](/static-site-generator.svg) 

## What is a build?
In this context, a build is a process in which JavsScript is compiled, or a static site generator is run. This can be triggered by a new git commit or by external services such as a headless CMS. Everytime a build is triggered, we use [GitHub Actions](https://github.com/features/actions) to update the files on the webserver.

## From which sources can I deploy?
You can deploy from an existing GitHub repository in your account, provide the URL to a third party repository you would like to deploy, or you can quickstart with one of our [samples](/docs/framework-samples).

## Which branches of a repository will be deployed?
If you deploy a repository that exists in your GitHub account, you can select any branch for deployment. For third party repositories, we allways deploy the current default branch. You can allways switch the branches of your Production Deployment or connect additional branches to [staging deployments](/docs/staging-deployments).

## Can I deploy private repositories?
Yes, you can deploy any repository for which you provided the required read and write permissions.

## Can I deploy from GitHub organizations?
Yes, you can deploy from GitHub organizations, as long as you are the owner of this organization.

## Can I connect custom domains?
Yes, you can connect [custom domains](/docs/domain-tls) to your production deployments to replace the automatically assigned preview URLs. 

## Can I connect external domains?
Yes, you can migrate external domains to IONOS and connect them to Deploy Now. For this, you need to have one existing IONOS domain contract to which you migrate the external domain.

## Why can't I see my repository in the set up selection?
You can only select repository to which you have granted the required read and write permissions.

## Can I deploy from Bitbucket or GitLab?
Currently, we only support GitHub. We are constantly working on improving Deploy Now and would love to offer BitBucket and GitLab in the future.

## Where is my website hosted?
Your website is hosted on our own datacenters. If you are a european customer, your website is served from a datacenter in Germany. If you are from Canada, Mexico, the US or another non-european country, your website is served from our datacenter in the US. 

## Which webserver technology is used?
Websites are delivered from a shared hosting infrastructure based on Apache.

## My initial build failed, what can I do?
This can have various reasons. It might be that the project configuration is not correct or that your branch exceeds the included storage. If you cannot identify a reason, you can create a support request via the "contact support" button in the dashboard.

## A new commit led to a failed build, what can I do?
This can have various reasons. It might be that the new git commit exceeds the included storage. Another reason could be that the workflow yaml was edited, deleted or relocated, which led to a breakdown of the pipeline. In this case, you can restore the yaml in Git. If you cannot identify a reason, you can create a support request via the "contact support" button in the dashboard.

## Is the interface english only?
Yes. Just like GitHubs interface, the Deploy Now interface is in english for all markets.

## Is Deploy Now for free?
Deploy Now uses a freemium model. The three project packages included in the free membership will stay for free. You can purchase additional project packages with more storage and staging deployments any time.

## Where can I place feature requests?
[Our team](/about-us) is continuously working on improving Deploy Now based on your needs and wishes. You can drop your feedback or feature requests directly via the feedback button on the product or below our [Post](https://www.producthunt.com/posts/deploy-now) on Product Hunt.

## What is this documentation built with?
This documentation is based on the static site generator [Gridsome](https://gridsome.org/).

