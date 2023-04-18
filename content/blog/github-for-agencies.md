---
description: "."
created: '2023-02-23'
author: 'robert.schleinhege'
header: '@assets/blog/agency-cover.png'
teaser: '@assets/blog/agency-cover.png'
tags:
    - agency
    - github
    - ci/cd
---

# How to Incorporate GitHub and CI/CD Deployments into Your Web Agency's Workflow 

As a Product Owner for Deploy Now, I've interviewed many agencies. Roughly half of them use tools like GitHub to collaborate on their code. A minority works with CI/CD pipelines. Why? Well, because they don't necessarily need to. The average client project is relatively small: Maybe a landing page with a blog section. A single developer can easily develop the project locally to then upload it via SSH for a final check by the client. Bringing new skills to the team and automating processes is an investment. As a smaller agency, you need to decide wether working on another client project instead would be the wiser decision. 

However, I strongly believe that an investment into GitHub and CI/CD team workflows can be a game changer for your agency. There is a whole world to explore for your team. You will likely see efficiency, code quality and client satisfaction will increase already after a couple of weeks. GitHub and CI/CD are growing ecosystems with more and more tools that lower the hurdles of working with them.

If you decide to go down this route with your agency, I would suggest you take the following steps. You can take as much time for each one as it feels right to you and your team.

## 1. Train your team in Git best practices 

Each team member that will work on code, and ideally also surrounding stakeholders like designers and writers, should be familiar with these concepts:

- Version control
- Local and remote repositories 
- Branches and pull requests
- Git clone, git checkout, git add, git commit and git push

Read more in our [comprehensive onboarding to Git](https://docs.ionos.space/blog/git-intro/#10-git-help).
After learning these concepts, discuss with your team how you plan to apply them. Create a GitHub organization and start experimenting. 

## 2. Build up a set of sample repos

No one starts each client project from scratch. No matter which tech stack you work with, you will find countless repositories with sample code in GitHub. So it's worth to look around for resuable parts for your client projects. Of course, allways check for potential copyright violations and code quality. 

You might end up maintainging a set of repositories for different use cases such as landing pages, blog, shops or portals in your GitHub organization. These serve as great starting points you can clone for new projects.

## 3. Set up the first working CI/CD pipeline

The next step is to deploy what is inside your repository. Ideally, each git push to your main branch leads to an automated *build* and *deployment* to some kind of infrastructure. Since you are working with GitHub already, it makes a lot of sence to let GitHub Actions take care of this. To learn more about the tool, you can read our [introduction to GitHub Actions](https://docs.ionos.space/blog/github-actions/). 




## 4. Get used to the process for some iterations
## 5. Add staging and automated tests to your workflow 
## 6. Incorporate clients in rollout processes
## 7. Enable synergies across client projects
