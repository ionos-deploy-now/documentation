---
description: 'Deploy Now allows you to replace preview URLs by any kind of custom domain. All domains are automatically SSL secured.'
sidebar: 'docs'
prev: '/docs/staging-deployments/'
next: '/docs/deployment-viewer/'
editable: true
---

# Domains and TLS

Deploy Now provides a generic preview URL by default for all your deployments. All URLs are SSL protected and http requests are redirected to https by default.

## Custom domains

For your production deployment you can choose any available domain of all your IONOS contracts. You can select the domains straigt from project detail view.
![Domain select](/domain-select.png)

Besides you can assign externally registered domains to Deploy Now. For now you need at least one existing domain contract at IONOS, so that you're able to control DNS entries by IONOS. You can find a step-by-step guide [here](https://www.ionos.com/help/domains/set-up-and-manage-an-external-domain-at-11-ionos/setting-up-an-external-domain-at-11-ionos/). SSL is included by default too. 

## TLS/SSL

Deploy Now offers free SSL certifications for both production and staging deployments, including automatic certificate creation and renewal. Http requests are directly redirected to https by default. As consequence http sites aren't supported in any way by Deploy Now.

We uncompromisingly rely on TLS to keep the best content intergrity, security and privacy to all services and sites build with Deploy Now. SSL certificates are issued in collaboration with [DigiCert](https://www.digicert.com/). 
