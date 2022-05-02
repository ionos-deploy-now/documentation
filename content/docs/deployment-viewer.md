---
description: 'Deploy Now allows you to replace preview URLs by any kind of custom domain. All domains are automatically SSL secured.'
sidebar: 'docs'
prev: '/docs/domain-tls/'
next: '/docs/faq/'
editable: true
---

# View files and logs

## Deployment Viewer

The Deployment Viewer can be found next to each deployment in the project detail page. The Deployment Viewer shows the files that are currently stored in the server. You can switch between branches and download files. The Deployment Viewer does not provide write access to files.

## Log files

Log data can be found in the logs directory of your web space in the files access.log.CW.gz for the past weeks and access.log.CW.D.gz for the current week.

- CW stands for calendar week

- D stands for day (starting with 1 for Monday to 7 for Sunday)

- .gz means that the file is compressed to save space

The logs for the current day are updated almost in real time. Due to the large amount of data, log data is kept available for a maximum of 8 weeks. The space used by the access logs is ignored when determing your remaining storage space. There is no need to delete the "logs" folder in order to have more storage space.
