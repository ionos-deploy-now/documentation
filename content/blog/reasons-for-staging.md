---
description: 'In software development, staging is the process of testing your code in a live environment before pushing it to production. Learn how using staging workflows can improve your workflows and make your stakeholders happy.'
created: '2022-06-29'
author: 'robert-schleinhege'
header: 'DPNW_dev.to— Staging@2x.png'
teaser: 'DPNW_dev.to— Staging@2x.png'
tags:
    - staging
    - development
    
---

# 5 reasons to start staging your code right now 

In software development, staging is the process of testing your code in a live environment before pushing it to production. A staging environment is pretty much a replica of a production environment, so you can see exactly what users will experience once you release the code. Development teams often work with multiple instances within three types of environments: 

- **Local environment** – every developer has one. Here, code is committed to various branches of development streams and previewed locally. 

- **Staging environment** – runs code in a live environment for testing purposes. Developers might stage release candidates as they approach rollout, or much earlier in the development phase to verify git pushes. Stages can be connected directly to the main branch, or to feature branches which are not yet merged into master.

- **Production environment** – runs the live version of a project.	 

## Why development teams often skip the stage 

As an exact replica of your production environment, a staging environment can easily require the same effort that goes into maintaining the production environment. And that additional effort can grow exponentially if multiple release candidates are all in staging at the same time.  
What’s more, staging adds yet another step to a developer’s daily. Which is something they’re not exactly keen on unless it’s absolutely necessary. Why stage if my project looks fine on localhost, right?  

But we shouldn’t be too hasty. Staging has a lot of benefits. And with the right tools at hand, staging requires no extra cost or effort at all. 

## The benefits of staging 

### Your designers are happier

Working with a designer on a project with frontend? Give them a chance to check whether the look and feel of the latest release meets their expectations. Speaking from experience, unpleasant surprises can put a dampener on the team spirit. 
 
### Clients know what’s coming 

Misunderstandings during concept creation are common. Even if a deployment goes exactly as planned, your client might have had something different in mind. Send them a preview link to align expectations before going live.  

### No more awkward “it looked different on my machine” moments 

Who hasn’t been there? An issue flares up with a live project, but the person responsible claims they didn’t have this issue on their local machine. These scenarios are completely avoidable if you rigorously test for multiple scenarios during the staging phase. 

### Responsibility is shared
  
Sure, you can ask teammates to review your pull request. That way you weren't the only person who saw the code before release. But PRs don’t replace fully-fledged stages. With stages you can delegate essential quality checks to QA or test engineers. 
### Everyone stays in the loop 

There's no crystal ball showing project managers how far you are with the code on your local machine. Using staging environments to let them see the progress from time to time will make them happy – and probably save you from replying to anxious emails. 
## Changing the staging game

Deploy Now is a build tool created by developers for developers for building and hosting static site generators, PHP apps and single page applications on custom engineered IONOS infrastructure. 
Create a feature branch locally, push it to staging, view your code live, merge to production and automatically shut down the staging environment. 

That's how easy staging with [Deploy Now](https://www.ionos.com/hosting/deploy-now) is.  

Every Deploy Now package offers staging branches as SSL-secured preview URLs. Share these URLs with clients and team members or use them to check your code on different devices and browsers. 

With no extra cost and effort required for managing additional infrastructure, should you still skip the stage? Absolutely not.  

If you work with multiple branches already, your daily workflow won't even change. Your code is built and deployed automatically, so it’s super quick and simple to run your code in a live environment early and often.  
 




