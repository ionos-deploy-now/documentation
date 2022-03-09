---
description: 'Step by step guide about how to create a new project in Deploy Now when starting with an existing repository.'
sidebar: 'docs'
prev: '/docs/from-cmd-line/'
next: '/docs/deploy-static-sites/'
editable: true
---

# From existing repository

Allready have an existing project you wish to set up? Simply create a new deployment by following our wizard.

*Not what you are looking for? [Start from a sample](/docs/framework-samples/) or [start from the command line](/docs/from-cmd-line/).*

1. **Connect your GitHub account** 

We'll need your permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories. You can either grant access to selected or all repositories in your account. You can edit or revoke these permissions any time.
    
2. **Select your deployment source**

Select a public or private repository from your GitHub account or paste in a link to a third party repository. Third party repositories are copied to a new source repository in your GitHub account. You will be asked for a name for this new source repository. 

3. **Confirm detected framework**

Deploy Now scans your repository to detect the framework you are using to prefill all workflow settings. You will be asked to confirm the detected framework or to clarify which framework you are using if we cannot identify your framework. If you are deploying a static site generator, single page application or simply a plain HTML website, you can procede with a Static Project in this step. If your project requires a PHP runtime or a database, please continue with a PHP project.  
  
4. **Build settings**

Your build steps will be prefilled based on the detected framework. You can add node, composer or bundler steps or execute any other script or command. Define versions for each build step, add build commands and set environment variables. You can change the order of your build steps via drag and drop. Each project can have exactly one publish directory. The files of this directory will be deployed to the infrastructure after the build step.

[More about build settings](/docs/github-actions-customization)

5. **Runtime settings**

In case you are creating a PHP project, you need to specify a PHP version for the runtime. This step does not exist for Static projects. Please note that your web project will run on a different machine than your build pipeline. Build environment variables are not available after the deployment. Instead, you can create runtime secrets via the UI and refer to their values in the configuration file form by adding a `$` in front of the key. These secrets will be stored in GitHub secrets. Deploy Now automatically creates a set of keys required for connecting to the database. Their values can be referenced by a `$` in front of the key as well and will be created dynamically during the deployment.

[More about runtime settings](/docs/runtime-configuration)

6. **Deployment settings**

After your web project builds, results will be automatically deployed to IONOS infrastructure. In case you are creating a PHP project, you might want to execute commands on your runtime or keep certain files persistent. In this step, you can specify both for the bootstrap deployment, i.e. the initial creation of your project, and any recurring deployment after that. Pre deployment remote commands are executed before new files are moved to the server. Post deployment remote commands are executed afterwards. Excluded paths are prevented from being overwritten by new deployments.

[More about deployment settings](/docs/deployment-configuration)

7. **Review your settings** 

Take your time and review your settings before creating the project. You can still make changes to the configuration after the project creation, as described in the configuration section of the docs.

8. **Congrats! Your project gets built** 

After completing the setup, we automatically trigger the first build and deployment. We connect your project to a preview URL.

9. **Just git push and your updates go live** 

Deploy Now will now trigger deployments on every git commit to your repository. You can open [staging deployments](/docs/staging-deployments/) to deploy multiple branches and connect a [custom domain](/docs/domain-tls/) to your production deployment.
