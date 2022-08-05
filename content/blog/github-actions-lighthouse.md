---
description: 'Are you working on a web project in GitHub and want to know the Lighthouse KPIs of your project after each git push? Here's how.'
created: '022-08-04'
author: 'robert-schleinhege'
header: '@assets/blog/githubactions-lighthouse.png'
teaser: '@assets/blog/githubactions-lighthouse.png'
tags:
    - tutorial
    - lighthouse
---

Are you working on a web project in GitHub and want to know the Lighthouse KPIs of your project after each git push? Here's how.

Our goal is to make your Lighthouse results look like [this](https://github.com/Robert95Sch/lighthouse-action-demo/actions/runs/2803566749):

![Screenshot of Lighthouse results](@assets/blog/screenshot-lighthouse-1.png)

## 1. Use GitHub Actions to build your code 
We would like to calculate Lighthouse KPIs from a website that is actually being built and deployed. GitHub Actions[https://github.com/features/actions] is a nice vehicle to execute these steps right on git push. 

Let's take [this repo](https://github.com/Robert95Sch/lighthouse-action-demo) as an example. The project contains a small Vuepress demo site. 

The `.github/workflows` folder contains a `.yaml` that describes the GitHub Actions workflow. Let's go through this file.

Make sure that your workflow is triggered on Git Push by starting the document with

```
on:
  - push
```

Then install the dependencies that you need for your build on the GitHub Actions VM and execute your build steps 

```
      - name: Setup Node
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        uses: actions/setup-node@v1
        with:
          node-version: v16.x

      - name: Build Node assets
        if: ${{ steps.project.outputs.deployment-enabled == 'true' }}
        run: |
          npm ci
          npm run build

```

## 2. Deploy it somewhere and store the URL
The next step is to deploy your build results somewhere. In my example project, I use [IONOS Deploy Now](https://www.ionos.com/hosting/deploy-now) as the deployment target. Side note: Deploy Now not only provides you with infrastructure, but also helps you setting up your build. This is especially helpful if you are unfamiliar with GitHub Actions syntax. 

If you are using Deploy Now, the `Deploy to IONOS` step of the workflow will, as it says, deploy your website to IONOS servers and provide a URL. 

## 3. Run the Lighthouse test
Let's use [this awesome GitHub Action](https://github.com/marketplace/actions/lighthouse-ci-action) to run the Lighthouse test by adding this to your workflow.

```
      - name: Audit URL using Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        id: lighthouse
        with:
          urls: |
            https://example.com/
          temporaryPublicStorage: true # upload lighthouse report to the temporary storage
```

If you are using Deploy Now, you can replace `https://example.com/` by `${{ steps.project.outputs.site-url }}` to refer to the URL your website was deployed to. 

## 4. Generate a pretty output 
GitHub recently announced a nice feature called [Job Summaries](https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/). They allow you to generate a visual status report in the GitHub UI right after each workflow execution.

![Lighthouse KPI results](@assets/blog/screenshot-lighthouse-2.png)

As you can see in the image above, I've decorated it with some additional information. The key point is to insert the correct reference to the different KPIs, e.g. `${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.performance }}` to be able to print them. 

```
      - name: Job successful feedback
        if: ${{ success() }}
        run: |
          echo '### Successfully published to Deploy Now :white_check_mark:' >> $GITHUB_STEP_SUMMARY
          echo "Changes went live under: ${{ steps.project.outputs.site-url }}" >> $GITHUB_STEP_SUMMARY
          echo "Triggered by **${{ github.actor	}}** ∙ deployed from **${{ github.ref_name	}}**" >> $GITHUB_STEP_SUMMARY
          echo ' ' >> $GITHUB_STEP_SUMMARY
          echo "**Lighthouse results:**" >> $GITHUB_STEP_SUMMARY
          echo "Performance: ${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.performance }}" >> $GITHUB_STEP_SUMMARY
          echo "Accessibility: ${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.accessibility }}" >> $GITHUB_STEP_SUMMARY
          echo "Best-practices: ${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.best-practices }}" >> $GITHUB_STEP_SUMMARY
          echo "SEO: ${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.seo }}" >> $GITHUB_STEP_SUMMARY
          echo "PWA: ${{ fromJSON(steps.lighthouse.outputs.manifest)[0].summary.pwa }}" >> $GITHUB_STEP_SUMMARY
          echo ' ' >> $GITHUB_STEP_SUMMARY
          echo "[Visit documentation](https://docs.ionos.space/)" >> $GITHUB_STEP_SUMMARY
          echo "[Log in to Deploy Now](https://ionos.space/)" >> $GITHUB_STEP_SUMMARY
```

Of course, your Lighthouse tests only make sense if your build and deployment were successful. You might want to add a little status report in case your deployment was not successful: 

```
     - name: Job failed feedback
        if: ${{ failure() }}
        run: |
          echo '### Publishing to Deploy Now was not successful :cross:' >> $GITHUB_STEP_SUMMARY
          echo "Unfortunately, the deployment failed." >> $GITHUB_STEP_SUMMARY
          echo "Find help to debug this [here](https://docs.ionos.space/)." >> $GITHUB_STEP_SUMMARY
```
And that's already it! Enjoy pushing to your repo and check your Lighthouse KPIs after each deployment. And if you like, pay [Deploy Now](https://docs.ionos.space/) a visit. 

_What about you? Does this implementation make sense to you?_




