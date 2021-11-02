---
description: ''
sidebar: 'docs'
prev: '/docs/from-cmd-line/'
next: '/docs/git-integration/'
editable: true
---

# From existing repository

Allready have an existing project you wish to set up? Simply create a new deployment by following our wizard.

*Not what you are looking for? [Start from a sample](/docs/framework-samples/) or [start from the command line](/docs/from-cmd-line/).*

1. **Connect your GitHub account** 

We'll need your permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories. You can either grant access to selected or all repositories in your account. You can edit or revoke these permissions any time.
    
2. **Select your deployment source**

We can deploy either repositories within your GitHub account or a public, third party repository. Third party repositories are copied to a new source repository in your GitHub account. You will be asked for a name for this new source repository. 
![Screenshot from source selection step](/source-selection.jpg)  
  
3. **Configure the deployment**

Deploy Now scans your repository to detect the framework you are using in order to set the correct build command and dist folder. If we can't identify them automatically, you'll get a request to provide them manually.
![Screenshot from configuration screen](/confirm-configuration.jpg)

4. **Your project gets built** 

After a couple of seconds, your website will go live on a preview URL. 
![Screenshot from project details](/project-details.jpg)

5. **Just git push and your updates go live** 

Congrats! Your project is live. You can now open [staging deployments](/docs/staging-deployments/) or connect a [custom domain](/docs/domain-tls/).
