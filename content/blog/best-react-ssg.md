---
description: "Gatsby vs. React Static vs. Next.js: What's the best React-based static site generator?"
created: '2022-01-12'
author: 'daniel-hunt'
header: '@assets/blog/dpnw-react-ssg.jpg'
teaser: '@assets/blog/dpnw-react-ssg.jpg'
tags:
    - react
    - gatsby
    - react-static
    - next.js
---

# Gatsby vs. React Static vs. Next.js: What's the best React-based static site generator?

## Introduction

I imagine that you’ve found your way to this blog post because you understand the Jamstack and recognize its strengths
and its weaknesses. It's effective. The allure of faster load times and serverless architecture is strong and web
developers from all over the world are now using the Jamstack. So, how can you leverage the latest frameworks to gain
that edge over the competition without breaking the bank? Well, keep reading to find out. In this post, I'll compare the
three most popular React-based frameworks compatible with Deploy Now from IONOS (Gatsby, Next.js, and React-Static),
their use cases, pros, and cons.

---

## Gatsby

Gatsby is one of the more well-known React frameworks because it is very versatile and has a robust development team
driving its growth. Another thing that defines Gatsby as a popular framework is the documentation available from their
site. Without well-organized documentation, we, as developers, are placed at a severe disadvantage. My love of
documentation aside, I've compiled a list of the pros and cons of Gatsby below, as well as some use cases that'll help
kick-start your creativity.

### Gatsby — the pros

- Speed: Without a server delivering your site's resources, load times drop. This has the potential to increase your
  business's revenue over the long term.

- Security: Since there isn't a server to attack, your company's forward-facing assets are a lot safer.

- Configuration: Configuring web servers and their accompanying technologies is stressful, to say the least. With a
  serverless architecture, you won't have to worry about configuring web servers ever again.

- Scalability: Gatsby scales effortlessly which makes it a wonderful choice for both medium and large businesses.
- Re-hydration: Even though Gatsby's main use is for static sites, it can re-hydrate into a fully functional react
  application.

- Plug-ins: Gatsby comes with a rich plug-in library and let's be honest, who doesn't love plug-ins?

- GraphQL support: Used to streamline the process of fetching data from external and internal sources.

### Gatsby — the cons

- No GUI: Gatsby doesn't offer a graphical interface for interacting with their framework. For some devs this isn't a
  problem, for others, it might be a barrier to entry.
- Learning curve: Whether this is your first time using a CMS or you're migrating from another platform, you'll have to
  learn how to use Gatsby and its associated features.
- Dynamic content not supported: It is possible to serve dynamic content with Gatsby, but it's not recommended and it is
  difficult to accomplish effectively.

As you can see, Gatsby is a pretty powerful React framework. It's important to remember though, that Gatsby is only
useful for certain kinds of websites and applications. I've included a few different examples below ...

### Use cases / Examples

Gatsby is great for sites that have a large number of pages such as blogs, news sites, documentation portals, and things
of that nature. Whether it's a single page or 10,000 pages, Gatsby makes creating them easier than ever. Here are a few
noteworthy sites that were built using Gatsby:

- [figma.com](https://figma.com)
- [reactjs.org](https://reactjs.org)
- [affirm.com](https://affirm.com)

### Deploying using IONOS Deploy Now

1) Create a new site by entering the following commands in your terminal:

```
npx gatsby-cli@latest new gatsby-site
cd gatsby-site
npm run develop 
```

2) Visit your site locally by copying the localhost address from the CLI stdout to your browser bar.

3) Now, create a new Git repository on GitHub and copy the URI of the repo to your clipboard. Initialize git and push
   your project to the created GitHub repository using the following commands:

```
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin git@github.com:username/reponame.git 
# replace the above repo with the URI of your repo
git push -u origin main
```

4) Set up deployment by signing into your Deploy Now account and clicking “New Project.” Next, choose the source you
   want to deploy from. Grant the requested permissions to IONOS and proceed to choose the following configuration:

![CONFIGURATION ONE](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9vjkvp6wgeh78zp5906z.png)

5) Now, take a quick break until your project build is deployed. Deploy Now will always show you the current build and
   deploy status of your project. When it's finished, Deploy Now will provide you with a direct URL to your project. You
   can also find a new workflow file within your repository named .github/workflow/deploy-now.yaml.

 
---

## React Static

React Static is an open-source progressive site generator written by Tanner Linsley and released in late 2017. A
progressive site generator is functionally similar to a static site generator with several key differences. Within the
core of a progressive site generator sits a static site that, once requested by the user, begins re-hydrating itself
into a full-featured react application. This allows for extremely fast load times whenever a link is clicked since the
page's assets have already been rendered. An easy way to conceptualize React Static is that once a site is requested it
progressively transforms into a React application regardless of the entry point. This clever feature coupled with all of
the pre-existing benefits of a static site generator makes React Static an attractive choice for developers looking to
deploy a static site.

### Pros of React Static

- Speed: Since the site is re-hydrated into a full-featured react application, there is no need to reload any resources
  while the user interacts with the site. This results in near-instantaneous response times.
- Security: Just like a regular site built using a static site generator, there is no server involved, which
  automatically results in a more secure site.
- Scalability: React Static performs well on everything from single-page sites to larger sites with thousands of pages.
- Re-hydration: The ability to turn a static site into a full feature react application is what defines React Static.
- Data Handling: React Static is flexible on where you source your data. On top of that, React Static also allows for
  data to be displayed/updated in real time. SEO friendly

### Cons of React Static

- No GUI: Unfortunately, React Static has no GUI to interact with making it a little more difficult to learn for some.
- Learning curve: Utilizing React Static requires a good amount of learning but hey ... a lot of the strongest
  frameworks and tools out there require time and effort to get the hang of.
- Limited use cases: React Static, while extremely useful, isn't a one-stop for all of your web development needs. Its
  utility is limited to a certain subset of websites.
- Minimal documentation: The amount of documentation released for React Static is pretty limited.

### Use cases / examples

Here are a few examples of pages made with React Static:

- stoplight.io
- vector.dev
- turbotax.intuit.com

What makes React Static an interesting framework is the fact that it rehydrates your static site into a fully functional
react application. So if serving up static pages at breakneck speeds is something you or your company might need in the
future, then react-static is worth keeping in mind. At the same time, you need to remember that react-static thrives on
the need to display static pages fast, so if you’re working with a site model that is JAMpacked (excuse the pun) with
dynamic pages full of unique styles then react-static may not be the framework for you ... yet!

### Creating a React Static site

1) Create a new site by entering the following commands into your terminal:

```	
 npm i -g react-static
 // or
 yarn global add react-static
```

2) Start a new project by entering these commands into your terminal:

```
react-static create
```

3) Follow the prompts within your terminal to configure your project. For the sake of this example, we'll use the "
   basic" template.

4) Now, create a new Git repository on GitHub and copy the URI of the repo to your clipboard. Afterwards initialize git
   and push your project to the created GitHub repository using the following commands:

```
git init
git add .
git commit -m "initial commit" 
git branch -M main
git remote add origin git@github.com:username/reponame.git 
// replace the above URL with your GitHub repo that you // created
git push -u origin main 
```

5) Next, set up deployment by signing into your Deploy Now account and clicking “New Project.” Choose the source you
   want to deploy from. Grant the requested permissions to IONOS and proceed to choose the following configuration: '
   JavaScript, then Node.js and public.' Tada! Your site is deploying!

---

## Next.js

Next.js is a hybrid static site generator. This essentially means that Next.js can accomplish nearly everything we have
discussed up until this point and more. Most importantly though, Next.js is production-ready and is excellent for SEO
optimization. However, there is one caveat: with all of the wonderful features, such as pre-rendering, code-splitting,
SEO-optimization, etc ... you are required to run Next.js in tandem with Node.js. This is ultimately outside of the
scope of this article. Static generation / pre-generation does work with Deploy Now, but Node.js can only be used at
build time — NOT at run time. Even though this article centers on Deploy Now, we figured Next.js is such a great
framework that it deserves an honorable mention.

### The Pros of Next.js

- Speed: Next.js is an extremely fast framework, not as fast as React Static, but fast nonetheless.
- Production ready: Next.js is production ready straight out of the box.
- Documentation: Next.js has excellent documentation that is well maintained and updated frequently.
- Code samples: One unique feature of Next.js is the large amount of code samples that they have hosted on both their
  site and GitHub. Each one of these code samples is free to use in your application without attribution.
- Code splitting: Next.js supports code splitting.
- TypeScript: Next.js supports TypeScript.

### Next.js — the cons

- Node.js dependence: Next.js requires node.js to run in most situations.
- Security: Considering that next.js has a larger amount of dependencies it also has a larger attack surface than any of
  the frameworks we have touched on.

### Use cases / examples

Some sites that utilize Next.js include:

- tiktok.com
- twitch.com
- att.com

If your company needs a production-ready website that can handle the loads required by a small to medium-sized business,
then Next.js is definitely worth looking into. Some of the biggest companies in the world use Next.js, mainly because of
its ease of use and scalability. If you're interested in learning more about Next.js, make sure you check
out: https://nextjs.org/.

### Deploy via Deploy Now from IONOS

1) Create a new site locally by entering the following commands into your terminal:

```
npx create-next-app@latest next-site
cd next-site
npx next@latest dev
```

2) Visit your site locally by copying the localhost address from CLI stdout and pasting it into your favorite browser.

3) Enable static HTML export. NOTE: Currently, Deploy Now doesn’t support the large image optimization available in
   Next.js, so you have to edit the index.js file to remove this feature.

4) Delete the following import from pages/index.js:

```
 Import Image from "next/image"
```

5) Next, locate the following image tag:

```
<image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
```

6) Replace it with the standard HTML img tag:

```
<img src="/vercel.svg" alt="Vercel Logo" width=72px height=16px>
```

7) Next, edit the package.json file and add the export option prerendering all pages to HTML:

```
"scripts": {
	...
	"export": "next build && next export"
},
```

8) Finally, adapt .eslintrc.json to overcome Next.js eslint rules restrictions:

```
{
    "extends": ["next", "next/core-web-vitals"],
    "rules": {
        "@next/next/no-img-element": "off"        }
}
)
```

9) Now, create a new Git repository on GitHub and copy the URI of the repo to your clipboard. Afterwards, initialize git
   and push your project to the GitHub repository you created using the following commands:

```
git init
git add .
git commit -m "initial commit" 
git branch -M main
git remote add origin git@github.com:username/reponame.git 
// replace the above URL with your GitHub repo that you // created
git push -u origin main 
```

10) Set up deployment by signing into your Deploy Now account and clicking “New Project.” Next, choose the source you
    want to deploy from. Grant the requested permissions to IONOS and proceed to choose the following configuration:
    ![CONFIGURATIONTWO](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3l39qlyuwjo3fyc238h4.png)

_Article written by Daniel Hunt from [digitaljailbreak.com](https://www.digitaljailbreak.com)_
 

