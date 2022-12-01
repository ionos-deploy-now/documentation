---
description: "GitHub Actions allows you to create, manage, and run tasks directly on GitHub. This can be anything from compiling code to deploying a web application. In this article, we will give a quick introduction to GitHub Actions and show you how to get started!"
created: '2022-12-01'
author: 'katy-kozee'
header: '@assets/blog/githubactions-cover.png'
teaser: '@assets/blog/githubactions-cover.png'
tags:
    - githubactions
    - introduction
---

# GitHub Actions: An Introduction

GitHub Actions allows you to create, manage, and run tasks directly on GitHub. This can be anything from compiling code to deploying a web application. In this article, we will give a quick introduction to GitHub Actions and show you how to get started!

## What are GitHub Actions?

Introduced in 2018, GitHub Actions allow you to automate developer workflows. You can use GitHub Actions to create custom software development life cycle workflows directly in your GitHub Repository.

These actions automatically execute when a specified event occurs, such as when a pull request is opened. You can use pre-made GitHub Actions or create your own actions.

GitHub Actions can manage and operate workflows through Linux, Windows, and macOS operating systems. GitHub actions also support a variety of coding languages, such as C, C++, C#, Go, Java, JavaScript, PHP, Python, Ruby, Scala, and TypeScript.

## Some of the Benefits of GitHub Actions

- GitHub Actions provide several benefits for your software development life cycle:
- Automate multi-step tasks that are tedious, complex, or prone to errors
- Create custom workflows directly in your GitHub Repository
- Fully integrated into GitHub
- Discover, create and share actions to perform any job you like
- Combine multiple actions into a customized workflow
- Build, test, and publish across multiple operating systems, platforms, and languages within the same workflow

## How Can You Use GitHub Actions?

GitHub actions can be used for any process that you want to automate. For example, you can use a GitHub action to:

- Run an automated task when an issue is opened
- Create automated review reminders when a pull request is opened
- Send out a welcome message when a new contributor joins your project

## Using GitHub Actions as a Continuous Integration/Continuous Delivery (CI/CD) Platform

One of the most common uses for GitHub Actions is defining a **Continuous Integration/Continuous Delivery (CI/CD)** platform where you can build and test pull requests from a GitHub repository and deploy merged pull requests to production. 

**Continuous Integration is the process of automating the build and testing of software.** This helps to ensure that code is always working and reduces the chances of introducing errors into the codebase. Continuous integration typically involves running automated tests on every change to the codebase and notifying developers if any of the tests fail.

**Continuous Delivery keeps the code that has been verified by CI testing ready to be deployed.** New code is automatically and constantly integrated, delivered, and deployed throughout an app's development stages.

Since the automated CI/CD approach is used from the initial app integration, through testing, and then through delivery and deployment, the process is commonly referred to as the CI/CD pipeline. 

## How GitHub Actions Work
### Event Driven
GitHub Actions are triggered by a specified event. An event is any action within your GitHub repository. Opening a pull request, creating a new branch, and commenting are all examples of an event. When a defined event is executed, it triggers the beginning of a workflow.

### Workflows
A workflow is an automated process composed of a series of jobs.  You define a workflow with a YAML file in your depository. Workflows run automatically when triggered by an event in your repository. You can also trigger a workflow manually or on a defined schedule.

### Jobs
Jobs are a list of commands (or actions) triggered by a particular workflow. Each command triggered within a job is called an Action. A workflow can have multiple actions working at the same time. 
You can create your own actions or use pre-built actions from the GitHub marketplace.

## Getting Started with GitHub Actions
You can access GitHub actions from your GitHub repository by clicking Actions in the toolbar. You can then create a new Workflow. GitHub offers preconfigured starter plans that you can customize or you can also create your own YAML file with GitHub Actions commands.

You can view Workflow results by clicking on the Workflow name on the GitHub Actions Page.

## Using Deploy Now with GitHub Actions
Ionos’ [Deploy Now](https://docs.ionos.space/) uses GitHub actions to automate the tasks associated with deploying your static site, single page app, or PHP project to the server each time you execute a Git Push. 

Deploy Now analyzes your project and automatically creates a YAML file containing the necessary actions to deploy your project to IONOS reliable shared hosting infrastructure in Europe and North America. This file can be used as is or you can easily modify this file to contain your own actions.

Get started today by learning [more about Deploy Now](https://docs.ionos.space/docs/faq/) or [creating a sample project](https://docs.ionos.space/docs/framework-samples/).





