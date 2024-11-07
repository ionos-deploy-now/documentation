---
description: 'Workflow explanation for Deploy Now'
sidebar: 'docs'
prev: 'apache-configuration-htaccess'
next: 'git-integration'
editable: true
---

# GitHub Actions in IONOS Deploy Now

This document provides a detailed overview of the **build and deployment processes** used in projects implemented with **IONOS DeployNow**, integrated with **GitHub Actions** for automated continuous integration and deployment. It outlines **mandatory** and **optional** steps, offering guidance adaptable to various types of projects and frameworks, including **PHP applications** (like **Laravel** and **Symfony**), **Single Page Applications (SPA)** using frameworks like **React, Angular**, and **Vue**, and a wide range of **static site generators** (such as **Gatsby, Hugo**, and **Jekyll**).

The first section, **BUILD PROCESS**, covers the essential steps for preparing and building the project before deployment, from setting up the environment to creating and optimizing production-ready assets. Each step is categorized as either "Mandatory" or "Optional," with a focus on its applicability based on the technology used.

The second section, **DEPLOYMENT PROCESS**, explains the necessary steps to deploy the built project to the target server or platform. These steps are also divided into mandatory and optional, including tasks such as **server configuration**, **database migrations**, and **content validation**, with specific examples for each type of project.

To access detailed information on these processes directly in **GitHub**, you can navigate to **your repository > Actions > Select the specific action** you want to check.

## BUILD PROCESS

### Mandatory Steps (for most projects)
These are the fundamental steps that apply to most projects, regardless of the technology or framework:

1. **Set up job:**
   - Configure the execution environment.
   - Mandatory for all projects, as it is necessary to prepare the environment.

2. **Checkout:**
   - Download the source code from the repository (GitHub).
   - Mandatory for any project that uses continuous integration and automated deployment.

3. **Install Dependencies:**
   - Install the necessary project dependencies (using composer, npm, yarn, pip, etc.).
     - Laravel and Symfony (PHP): `composer install`.
     - Single Page Applications (Angular, React, Vue, Svelte, Ember, Ionic): `npm install` or `yarn install`.
     - Static Site Generators (Gatsby, Hugo, Jekyll, etc.): Install the generator dependencies.
   - Mandatory for any project that requires external dependencies.

4. **Build assets:**
   - Build the necessary assets for production, such as CSS, JavaScript, optimized images, generated HTML, etc.
     - Laravel/Symfony: Compile assets with tools like Laravel Mix.
     - SPAs (React, Vue, Angular, Svelte): Run `npm run build` to compile assets.
     - Static Site Generators (Hugo, Gatsby, Jekyll, Next.js, etc.): Compile static files (HTML, CSS, JS) using the corresponding generator.
   - Mandatory if the project requires generating an optimized production version.

5. **Store deployment content:**
   - Store the generated or compiled files in the correct location for deployment.
   - Mandatory for any project where the build output is necessary for deployment.

6. **Complete Job:**
   - Finalize the build process.
   - Mandatory to correctly close the CI/CD flow and proceed to deployment.

### Optional Steps (depending on the project)

1. **Render Templates:**
   - Generate custom configuration files for different environments (development, production).
     - Laravel/Symfony: Optional, if generating `.env` or configuration files is necessary.
     - Static Site Generators: Sometimes configuration files are set before the build.
     - SPA: Environment variables may also need to be configured.

2. **Setup Composer:**
   - Only necessary in PHP projects (Laravel, Symfony) for managing dependencies.
   - Optional for any project that does not use PHP.

3. **Run Composer Install:**
   - Run `composer install` to install dependencies in PHP projects.
   - Optional if not working with PHP.

4. **Setup Node:**
   - Prepare the Node.js environment for frontend asset compilation (CSS, JS).
   - Mandatory for SPAs and projects using Node.js to handle frontend (React, Vue, Angular).
   - Optional for PHP projects or static sites that do not use Node.js.

5. **Build Node Assets:**
   - Compile frontend assets (CSS, JS) using tools like Webpack or Gulp.
   - Mandatory for SPAs and projects with JavaScript-based frontend.
   - Optional for projects without complex frontend components or simple static sites.

6. **Post Setup Node:**
   - Perform additional configuration or cleanup tasks after setting up Node.js.
   - Optional, depending on the project.
   - May include: removing temporary files, final adjustments to Node.js configuration.

7. **Post Checkout:**
   - Make additional adjustments or actions after the repository has been cloned.
   - Optional, may be useful for running additional setup or validation scripts.

8. **Tests (Not included in the Laravel flow, but important):**
   - Optional, but recommended for any project.
   - Run automated tests before proceeding to deployment.
     - Laravel and Symfony: Unit and functional tests with PHPUnit.
     - SPAs (React, Vue, Angular, Svelte, Ember): Testing with frameworks like Jest, Mocha, Cypress.
     - Static Site Generators: Test for broken links, accessibility, performance tests.

### Optional Steps Specific to Static Site Generators and SPAs
- **Hugo, Gatsby, Gridsome, Docusaurus, VuePress, VitePress, NuxtJS, NextJS (static), Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw, Sculpin:**

1. **Generate Static Files:**
   - This step is key in these projects as it compiles all the content into static files (HTML, CSS, JS). It is equivalent to running `npm run build` to generate a site optimized for production.
   - Mandatory for static site generators.

2. **Build Optimization:**
   - Performs additional optimizations like CSS/JS minification, dead code elimination, and image optimization.
   - Optional, but common in static site projects to improve site performance.

3. **Content Validation:**
   - Some static site generators include content validation (e.g., checking for broken links).
   - Optional, depending on the generator and the tools you use.

- **Angular, React, Vue, Ionic, Svelte, Ember (SPAs):**

1. **Pre-rendering/SSR (Server-Side Rendering):**
   - Some SPA projects may include pre-rendering or server-side rendering (SSR) to improve SEO and performance.
   - Optional if the project supports and requires SSR (e.g., with frameworks like Next.js or Nuxt.js).

2. **Progressive Web App (PWA) Build:**
   - Some SPA projects include an additional step to convert the application into a PWA (Progressive Web App) by adding support for cache, service workers, etc.
   - Optional if the project is configured to be a PWA.

### Other Optional or Additional Steps Depending on the Framework
- **Linting/Code Quality Checks:**
   - Optional, but recommended to verify code quality before the build.
   - Linters like ESLint or Stylelint could be run in JavaScript or TypeScript projects.

- **Cache Dependencies:**
   - Optional, to optimize runtime for future builds.
   - SPAs and PHP projects: You can cache dependencies (npm, composer) to speed up the build process.

- **Image Optimization:**
   - Optional, though recommended for projects with many static images.
   - Tools like imagemin can be used to optimize images during the build process.

- **Deploy Content to CDN:**
   - In some projects, after storing the generated files, you can deploy them to a CDN to improve performance and global distribution of the content.
   - Optional, depending on the deployment architecture (e.g., Netlify, AWS S3, Cloudflare).

## DEPLOYMENT PROCESS

### Mandatory Steps (for most projects)
These are the fundamental steps that apply to most projects, regardless of the technology or framework:

1. **Set up deployment environment:**
   - Configure the deployment environment on the target server or platform.
   - Mandatory for all projects, as it is necessary to prepare the deployment environment (server, container, cloud platform).

2. **Transfer deployment content:**
   - Transfer the generated or compiled files (HTML, CSS, JS, images, etc.) and dependencies to the deployment environment.
   - Mandatory for any project, as it is necessary to ensure the content is on the server.

3. **Set up server or platform configuration:**
   - Configure the web server or platform (e.g., Apache, Nginx, Netlify, Vercel, etc.) to serve the application.
   - Mandatory, as the application needs to be accessible through a properly configured server or platform.

4. **Run database migrations (if applicable):**
   - If the application uses a database, this step runs the migrations to update the database structure according to the new version of the code.
     - Laravel and Symfony (PHP): Run `php artisan migrate` (Laravel) or migration commands in Symfony.
   - Mandatory if the application uses databases.

5. **Restart server/services (if necessary):**
   - Restart the web services or server to apply the new changes (Nginx, Apache, Node.js, etc.).
   - Mandatory in projects that need to restart the server to apply new configurations or code updates.

6. **Post-deployment checks:**
   - Verify that the application is working correctly after deployment.
   - Mandatory to ensure that the deployment did not cause production errors.

### Optional Steps (depending on the project)

1. **Cache clearing (if necessary):**
   - Clear the cache on the server or platform in case updated files are still being served from the cache.
     - Laravel: `php artisan cache:clear` to clear view or route caches.
   - Optional, but recommended in cache-managing projects.

2. **Configure environment variables:**
   - Configure environment variables for the application, such as API keys or environment-specific settings (production, development, etc.).
     - Laravel and Symfony: Configure environment variables in `.env` or on the server.
   - Optional, but necessary if the environment variables change based on the environment.

3. **Purge CDN cache (if using a CDN):**
   - If the application is using a CDN (Content Delivery Network), purge the cache to ensure users receive the updated files.
   - Optional, if using a CDN like Cloudflare, AWS CloudFront, or Netlify CDN.

4. **Warm up cache:**
   - Prepare the cache by preloading data or views to optimize the first load of the application after deployment.
     - Laravel: Run `php artisan optimize` to preload views.
   - Optional, useful in projects that use caching.

5. **Backup previous deployment (optional rollback plan):**
   - Backup the previous version before deployment, so you can roll back if the deployment fails.
     - Laravel/Symfony: Backup databases and critical files.
   - Optional, but recommended in critical projects.

6. **Notify team/monitoring tools:**
   - Notify the team or monitoring tools (Slack, email, Sentry, etc.) about the deployment status.
   - Optional, but useful for keeping the development team informed.

7. **SEO checks / Lighthouse audit (for static sites or SPAs):**
   - Run SEO and performance audits using tools like Lighthouse.
   - Optional, especially relevant for static site projects or SPAs where SEO and performance are important.

8. **Rollback on failure:**
   - If the deployment fails, revert to the previous version to avoid production errors.
   - Optional, but a recommended practice in any automated deployment workflow.

### Optional Steps Specific to Static Site Generators and SPAs

- **Hugo, Gatsby, Gridsome, Docusaurus, VuePress, VitePress, NuxtJS, NextJS (static), Hexo, Metalsmith, 11ty, UmiJS, Astro, Scully, ElderJS, Middleman, Jekyll, Nanoc, Pelican, mkdocs, Jigsaw, Sculpin:**

1. **Deploy Static Files:**
   - Deploy the generated static files (HTML, CSS, JS) on the hosting server or platform.
   - Mandatory for static site generators, as it is necessary to make the site available.

2. **Build Optimization:**
   - Perform additional optimizations during or after deployment (minifying CSS/JS, dead code elimination).
   - Optional, but common to improve site performance in production.

3. **Content Validation:**
   - Perform content validation like checking for broken links, accessibility, and SEO.
   - Optional, depending on the static site generator.

- **Angular, React, Vue, Ionic, Svelte, Ember (SPAs):**

1. **Pre-rendering/SSR (Server-Side Rendering):**
   - Deploy the application with pre-rendering or server-side rendering to improve SEO and performance.
   - Optional, but recommended in SPAs using SSR (Next.js, Nuxt.js).

2. **Progressive Web App (PWA) Setup:**
   - If the application is a PWA, configure service workers, cache, and other necessary optimizations.
   - Optional, only if the project is configured as a PWA.

### Other Optional or Additional Steps Depending on the Framework

1. **Linting/Code Quality Checks:**
   - Run code quality analysis tools like ESLint or Stylelint.
   - Optional, but recommended before deployment.

2. **Monitor performance with tools:**
   - Monitor the application’s performance with tools like New Relic, Datadog, or Google Lighthouse.
   - Optional, useful for ensuring the application’s health after deployment.

3. **Deploy Content to CDN:**
   - Deploy the static files to a CDN (Content Delivery Network) to improve global distribution and performance.
   - Optional, depending on the deployment architecture.
