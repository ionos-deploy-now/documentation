---
description: ''
sidebar: 'docs'
prev: '/docs/github-action/'
next: '/docs/faq/'
editable: true
---

# Domains & TLS/SSL

Deploy Now provides a generic preview URL by default to all deployment branches. All URLs are SSL protected and http requests are redirected to https by default.

## Custom domains

For your production branch you can choose any available domain of all your IONOS contracts. You can select the domains straigt from project detail view.
![Domain select](/domain-select.png)

Besides you can assign externally registered domains to Deploy Now. For now you need at least one existing domain contract at IONOS, so that you're able to control DNS entries by IONOS. You can find a step-by-step guide [here](https://www.ionos.com/help/domains/set-up-and-manage-an-external-domain-at-11-ionos/setting-up-an-external-domain-at-11-ionos/). SSL is included by default too. 

## TLS/SSL

Deploy Now offers free SSL certifications on all sites, including automatic certificate creation and renewal. Http requests are directly redirected to https by default. As consequence http sites aren't supported in any way by Deploy Now.

We uncompromisingly rely on TLS to keep the best content intergrity, security and privacy to all services and sites build with Deploy Now. On the other side it should wide-spread that Google search results prioritize sites with HTTPS enabled and https-enabled sites won't referral data to sites without https enabled.
