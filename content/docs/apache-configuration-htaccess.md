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

## Redirects and Rewrites

A redirect or forward directive instructs the client to switch URLs and navigate to the destination of the directive. The class of [3xx](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_redirection) - HTTP status codes indicates such redirects. This means that the client must take an additional action to complete the request. Your browser perform this action automatically and you can notice this by a change to the new URL of the directive in your browser bar. Redirects are often used to redirect an old path to a new one or make content available under more than one URL.

In contrast, a rewrite directive instructs the server to serve the content of the directive destination at the original URL. The browser won't notice anything of this directive. This kind of technique grew in popularity for client-side routing in Single Page Applications (SPAs) where all requests are handled via `index.html`.

You find various sample snippets for redirects or rewrites [here](https://github.com/phanan/htaccess#rewrite-and-redirection) and you can use our [.htaccess sample](https://github.com/ionos-deploy-now/.htaccess-samples) as playground.

## Security

Choosing the right configuration can be a great booster for web security and the good news is, it's much easier as you probably think. The following paragraph should give you some ideas and further links.

### HTTP Security Headers 

HTTP Security Headers are a subset of HTTP headers and are exchanged between a web client and a server to specify the security-related details of HTTP communication. Some HTTP headers that are indirectly related to privacy and security can also be considered HTTP security headers. By enabling suitable headers in web applications and web server settings, you can prevent security vulnerabilities like Cross-Site Scripting, Clickjacking, Information disclosure and much more.

The [OWASP foundation](https://owasp.org/) is an online community that provides a lot of freely-available security information about web application security.The OWASP [HTTP Security Response Headers Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html) gives you a brief overview of all security-related HTTP headers.

In our [.htaccess sample](https://github.com/ionos-deploy-now/.htaccess-samples) you can easily notice the difference in getting a security summary [A+](https://securityheaders.com/?q=home-5007955207.app-ionos.space%2Fsecurity%2Fheaders%2F&followRedirects=on) or [F](https://securityheaders.com/?q=home-5007955207.app-ionos.space%2F&followRedirects=on) rank.

### Best practices

Not all best practices are necessary at any time. The simple answer is: „It depends …“. Some of them are almost universal and some depend on your individual use case. Here comes the list of the almost universal rules:

1. Force HTTPS - Good news: "Deploy Now does this by default and allows HTTPS only."
2. Deny access to hidden files and directories: `RedirectMatch 404 /\..*$`
3. Disable directory browsing: `Options All -Indexes`

You can find other samples [here](https://github.com/phanan/htaccess#security) and you can use our [.htaccess sample](https://github.com/ionos-deploy-now/.htaccess-samples) as playground.

### Password protection

[Password protection](https://httpd.apache.org/docs/current/howto/auth.html#gettingitworking) via basic authentication is technical possible. But the reference path to your `AuthUserFile` needs to be absolute. This information isn't public availabe in Deploy Now at the moment. We will provide a solution soon.



<!-- ## Performance -->

## Pitfalls

### Encoding

### Multiviews

<!-- ## Errors -->
