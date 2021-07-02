# Introduction

Deploy Now is a static site hosting platform dedicated to developers.
Connect your GitHub account and instantly deploy your static web
projects on IONOS own DDoS-protected, georedundant and green
infrastructure.

## Getting started
  
1. **Connect your GitHub account.** We ask you for the permission to install the [IONOS Deploy Now App](https://github.com/apps/ionos-deploy-now) to your repositories.  
    
2. **Select your deployment source.** We can deploy either repositories within your GitHub account or any public third party repository. No repository at hand? Deploy one of our samples [Link to "samples"]. 
  
![Screenshot from source selection step](/source-selection.jpg)  
  
3. **Configure the deployment.** Deploy Now scans your repository for the framework and the dist folder you use. In case we are not able to identify these, we ask you to provide them explicitly. 

![Screenshot from configuration screen](/confirm-configuration.jpg)

4. **Your project is beeing build.** After a couple of seconds your website goes live under a preview URL. 

![Screenshot from project details](/project-details.jpg)

5. **Git commits code changes and Deploy Now updates your site.** You can now open [staging deployments](/guide/#staging-deployments) or connect a [custom domain](/advanced/custom-domains+ssl.html).

## GitHub Integration

![Deploy Now git integration](/git-integration.svg)

A Deploy Now subscription allows you to deploy public or private projects from one GitHub account. This can be either a personal account or an organization owner. Deploy Now updates your website after every git commit using the [GitHub Actions](https://github.com/features/actions) pipeline. The pipeline updates are handled by the IONOS Deploy Now App that is installed to your deployment repositories. The App requires read access to actions and metadata as well as write access to administration, secrets, code and workflows. The information necessary for the usage of the pipeline are stored in a [configuration yaml](/advanced/#configuration) in your repository. Deploy Now does not limit the build minutes you can use to update your website. However, the number of minutes for private repositories depend on the GitHub plan you use.

## Staging Deployments
  
![Screenshot from staging deployment section](/staging.jpg)
  
With staging deployments you can preview changes before they go live. If you think of your *main* branch as production, this is most likely the branch you select for your production deployment. droduction deployments can be connected to domains to serve content to visitors. When working on new features, you might not want unfinished code to go live on production. We suggest you to open feature branches for testing purposes and set them up as staging deployments. We equip staging deployments with preview URLs you can use to view changes by yourself or to share them with colleagues or customers. Once your happy with your changes, you can either merge them back to *main* or define the feature branch as the new production branch.