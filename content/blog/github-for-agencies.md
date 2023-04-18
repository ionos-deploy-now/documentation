---
description: "GitHub and CI/CD pipelines are productivity boosters for your web agency. Here is a 7 step plan how you can introduce them to your team workflows."
created: '2023-04-18'
author: 'robert-schleinhege'
header: '@assets/blog/agency-cover.png'
teaser: '@assets/blog/agency-cover.png'
tags:
    - agency
    - github
    - cicd
---

# How to Incorporate GitHub and CI/CD Deployments into Your Web Agency's Workflow 

As a Product Owner for Deploy Now, I've interviewed many agencies. Roughly half of them use tools like GitHub to collaborate on their code. A minority works with CI/CD pipelines. Why? Well, because they don't necessarily need to. The average client project is relatively small: Maybe a landing page with a blog section. A single developer can easily develop the project locally to then upload it via SSH for a final check by the client. Bringing new skills to the team and automating processes is an investment. As a smaller agency, you need to decide whether working on another client project instead would be the wiser decision. 

However, I strongly believe that an investment into GitHub and CI/CD team workflows can be a game changer for your agency. There is a whole world to explore for your team. You will likely see efficiency, code quality and client satisfaction will increase already after a couple of weeks. GitHub and CI/CD are growing ecosystems with more and more tools that lower the hurdles of working with them.

If you decide to go down this route with your agency, I would suggest you take the following steps. You can take as much time for each one as it feels right to you and your team.

## 1. Train your team in Git best practices 

Each team member that will work on code, and ideally also surrounding stakeholders like designers and writers, should be familiar with these concepts:

- Version control
- Local and remote repositories 
- Branches and pull requests
- `Git clone`, `git checkout`, `git add`, `git commit` and `git push`

Read more in our [comprehensive onboarding to Git](https://docs.ionos.space/blog/git-intro).
After learning these concepts, discuss with your team how you plan to apply them. Create a GitHub organization and start experimenting. 

## 2. Build up a set of sample repos

No one starts each client project from scratch. No matter which tech stack you work with, you will find countless repositories with sample code in GitHub. So it's worth looking around for reusable parts for your client projects. Of course, always check for potential copyright violations and code quality. 

You might end up maintaining a set of repositories for different use cases such as landing pages, blogs, shops or portals in your GitHub organization. These serve as great starting points you can clone for new projects.

## 3. Set up the first working CI/CD pipeline

The next step is to deploy what is inside your repository. Ideally, each git push to your main branch leads to an automated *build* and *deployment* to some kind of infrastructure. Since you are working with GitHub already, it makes a lot of sense to let GitHub Actions take care of this. To learn more about the tool, you can read our [introduction to GitHub Actions](https://docs.ionos.space/blog/github-actions/). 

Build and deployment steps are specified in a [yaml file](https://docs.github.com/en/actions/using-workflows/about-workflows) that describes your GitHub Actions workflow. GitHub runs your build steps on their own virtual machines every time the workflow is triggered, e.g. by a `git push`. To successfully deploy your website, you need to authenticate with some kind of infrastructure. 

If you are working with static site generators, single page applications or PHP Apps, [Deploy Now](https://www.ionos.com/hosting/deploy-now?ar=1) can ease this process. Simply connect a repository, specify your build steps and Deploy Now will set up the workflow, hosting and TLS for you.

## 4. Get used to the process for some iterations

Now, the fun part begins. Each team member can open branches, work on it locally, push changes and open a pull request to main for someone else to review. Once the pull request is accepted, you can watch your site being built, deployed and going live. 

This is already a pretty decent setup to work on some client projects and finetune your workflows here and there. All steps following can be viewed as optional extensions.

## 5. Add staging and automated tests to your workflow 

Even though someone now reviews code before it is merged to main, you're still not 100% sure if the code will work as expected. To mitigate this, you can add automated tests to your CI/CD workflow. I described how you can run and visualize Lighthouse tests in GitHub Actions [here](https://docs.ionos.space/blog/github-actions-lighthouse). 

However, QA processes are hard to automate completely. Staging environments give you the option to manually preview websites before they go live. If you are working with multiple branches already, why not deploy them just as you deploy your main branch? Many hosting tools such as [Deploy Now](https://www.ionos.com/hosting/deploy-now?ar=1) provide an out-of-the-box feature for this without extra costs. Simply open a new branch and watch it being deployed under a preview-URL. If the website looks good, merge your changes to the main branch. Here are [5 reasons](https://docs.ionos.space/blog/reasons-for-staging/) how staging processes can help your agency be more successful.

## 6. Incorporate clients in rollout processes

Now you can make code udpates to a branch, stage it for preview, and then roll it out to production. You can do two things to make your client part of this project:

1. Provide them with access to your staging environments, so they can review updates as well. This is especially helpful before your initial go-live. You could even use tools like [GitHub issues](https://docs.github.com/en/issues) to collect client feedback right on GitHub. 
2. Send them notifications if you deploy to production. You can easily automate this in your GitHub Actions workflow, e.g. by using the [Slack notification action](https://github.com/marketplace/actions/slack-send) from the GitHub Actions marketplace.

## 7. Enable synergies across client projects

We've talked about building up a set of starter repositories you can clone for new projects in step 2. But wouldn't it be great to keep re-used code centralized for similar projects, instead of distributing it to many repositories? Centralization makes it especially efficient to distribute updates to all your projects across the project lifecycle.

If your projects are sufficiently similar to each other, I would suggest to maintaining their code in a single repository and use persistent files and database content to customize them. The latter would remain unaffected from new deployments. You can read [here](https://docs.ionos.space/blog/multi-deployments/) how a Deploy Now user deploys from one repository to multiple environments using the [Multi Deployments feature](https://docs.ionos.space/docs/multi-deployments/).

I wish you and your team a lot of fun and success exploring!

