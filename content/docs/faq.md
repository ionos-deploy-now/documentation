---
description: 'Frequently Asked Questions about Deploy Now, supported frameworks and technologies and how to deploy them.'
sidebar: 'docs'
prev: '/docs/cronjobs/'
next: '/blog/'
editable: true
---

# Frequently Asked Questions

## What can I deploy with Deploy Now?
Deploy Now supports automated builds and deployments for Static Projects and PHP Projects. Static Projects support all kind of static frameworks that can work with HTML, CSS and client-side JavaScript. PHP Projects offer a PHP runtime and MariaDB. 

## Which PHP frameworks are supported out of the box?
Deploy Now detects Laravel and Symfony projects automatically and automates the build and deployment pipeline accordingly.

## Does IONOS Deploy Now support Node.js?
Deploy Now helps you setting up GitHub Actions to run build steps on `Git Push` to then deploy to IONOS shared hosting. GitHub Actions offers Node.js at build time, e.g. to execute `npm run build`. This is sufficient to build and deploy static sites created with Angular, React, Vue, Next.js or Nuxt.js. However, IONOS does not provide server side rendering with Node.js on the runtime infrastructure. 

## Which static frameworks are supported out of the box?
Deploy Now supports the following static site generators, following the Jamstack approach: Hugo, Gatsby, Gridsome, Docusaurus, Vuepress, Vitepress, Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw, Sculpin as well as the static site generation flavor of Nuxt.js and Next.js. Server-side rendering with Node.js is not supported. In additon, Deploy Now offers out of the box support for these single page application frameworks: Angular, React, Vue, Svelte, Ionic and Ember.
![Deployment Options](/deploy-now-supported-frameworks.svg)  

## What is the Jamstack? 
The Jamstack is a novel web architecture based on the principles of prerendering and decoupling. Jamstack stands for client-side **J**avaScript, reusable **A**PIs and **M**arkup. The basic concept is to deliver the markup of a site as fast as possible and use JavaScript and APIs to talk to various services at runtime, after the static frontend is delivered to the browser. In comparison to the classic web architecture the Jamstack is faster, as no database request has to be made at runtime, and more secure, as a static site offers fewer points for attacks.
![Jamstack vs. Classic Web Architecture](/jamstack-architecture.svg) 

## What is a static site generator? 
A static site generator is an essential component of the jamstack architecture. They allow prerendering in the sense that websites files are generated during the build time instead of the request time (when a user opens the side). A static site generator does this by listening to changes in a set of input files like content, templates or data. Everytime an input changes, new output is generated in the form of HTML, CSS and JavaScript files.
![Static Site Generator](/static-site-generator.svg) 

## What is a build?
In this context, a build is a process in scripts are executed to generate the files that make up your web project. This can be triggered by a new git commit or by any other custom defined event. Everytime a build is triggered, we use [GitHub Actions](https://github.com/features/actions) to update the files on the webserver.

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

## Where can I place feature requests?
[Our team](/about-us) is continuously working on improving Deploy Now based on your needs and wishes. You can drop your feedback or feature requests directly via [GitHub Actions](https://github.com/ionos-deploy-now/ionos-deploy-now/issues/new/choose) or below our [post](https://www.producthunt.com/posts/deploy-now) on Product Hunt.

## What is this documentation built with?
This documentation is based on the static site generator [Gridsome](https://gridsome.org/).

## Next.js or Nuxt.js is not recognized during setup and how can I configure my project to make it work?
First of all, make sure the static app has been exported, as we don't offer a nodejs runtime yet.

Please adapt your build step with the following line as described in this [static-html-export documentation](https://nextjs.org/docs/advanced-features/static-html-export).

`next build && next export`

You should also change under build settings the dist folder as 'out'.

Our [nextjs example](https://github.com/ionos-deploy-now/hello-next) is also available in github. 

You can use the following sample configuration as a guide for manual setup

:::details Example configuration for nextjs
```
Language: Javascript
Template: Node.js
Variant: npm install
Build settings:
  - Build command: npm run build 
  - Dist folder: out
```
:::

## Can I use Next.js without exporting a static site or incremental static regeneration feature?

Since we do not provide a Node.js runtime environment yet, using Next.js without exporting a static page is not possible. Incremental static regeneration also requires server-side rendering at runtime, so regeneration of static pages at runtime is not possible.

## How do I need to configure the deployment for Angular projects?

After selecting the repository and project package, Deploy Now should already suggest the correct build steps. These can be further customized on demand. By default the publish directory is `dist/name-of-your-project`. However, it might be that the publish directory of your Angular project is customized under `outputPath` in `angular.json`. If so, make sure that the output path configured here matches the publish directory in the Deploy Now setup.

## Which IPs or IP range is used by deployed website and apps for outbound connections?

Following is the list of IP ranges used by the Deploy Now for outbound connection started by your deployed app or a website:
- 82.165.80.0/24
- 82.165.81.0/24
- 82.165.82.0/24
- 82.165.83.0/24
- 82.165.84.0/24
- 82.165.85.0/24
- 82.165.86.0/24
- 82.165.87.0/24
- 82.165.88.0/24
- 82.165.89.0/24

## Is there an IONOS Deploy Now support mail? 
If you need support, feel free to submit a request ticket directly in the Deploy Now dashboard or to contact us via <a href="deploynow-support@ionos.com">deploynow-support@ionos.com</a>. Please note that this is the email address of the Deploy Now support team. For requests regarding any other product, please contact IONOS [via phone or via live chat](https://www.ionos.com/contact).

## I get a 403 error after deploying my website, what can I do?
### Make sure you have created an index file
An index file (typically named index.html or index.php) is the entry point for your website. It is the first file that is loaded when a user visits your site, and it provides the initial content and structure for your web page. Deploy Now requires an index file to be present in your project's output folder, as it is used to determine the starting point for your website. If you do not have an index file, you will receive a 403 error when trying to access your website.

### Make sure you configured the output folder correctly according to the framework you used 
The output folder is the directory, which gets deployed to your webspace. To configure the output folder for your Deploy Now project, you need to specify the correct folder path in your project settings. The output folder should contain your website's index file, as well as any other files required for your website to function correctly. In static projects the output folder is usually the generated dist directory.
In php applications files usually get deployed from project root and public directory is set to public If you are unsure about how to configure the output folder, please consult the documentation for your specific framework or build tool.

### Make sure you have an .htaccess file
An .htaccess file is a configuration file used by web servers to control access to your website and configure various settings. It is a required file for many websites, and its absence can cause errors. To include an .htaccess file in your Deploy Now project, simply add it to your project's root directory or output folder. Make sure to configure the file correctly according to your website's needs. If you are unsure about how to create or configure an .htaccess file, please consult the documentation for your specific framework.
