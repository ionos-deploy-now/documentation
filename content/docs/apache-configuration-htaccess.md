---
description: 'How to use .htaccess with Deploy Now'
sidebar: 'docs'
prev: '/docs/runtime-configuration/'
next: '/docs/git-integration/'
editable: true
---

# Apache configuration: .htaccess

Deploy Now uses [Apache HTTPD server](https://httpd.apache.org/) in a shared infrastructure environment. As a result users do not have rights to edit the main server configuration file on there own. However you can define your own configuration via [.htaccess](https://httpd.apache.org/docs/current/howto/htaccess.html).

## General

A .htaccess file is a common way to make configuration changes on per-directory basis. A .htaccess file can have multiple configuration directives at once. All configuration directives applies to the directory in which the .htaccess file resides and all subdirectories. It's good to know that each directory can define it's one .htaccess file. Directives are applied in the order that they are found. A directive found high up in the directory tree can override all dirctives found before or even definend by the Apache main configuration itself.

A collection of useful [.htaccess snippets](https://github.com/phanan/htaccess) in one place.
