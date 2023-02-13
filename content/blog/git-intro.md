---
description: "Both frameworks have pros and cons, so how can you decide which framework is suitable for your project? In this article, we’ll compare Laravel vs. Symfony and help provide some guidance so you can pick the framework that’s right for your project."
created: '2023-02-13'
author: 'katy-kozee'
header: '@assets/blog/git-intro-cover.png'
teaser: '@assets/blog/git-intro-cover.png'
tags:
    - git
    - beginners
    - guide
---

# An Introduction to Git: The Basics Every Beginning Developer Should Know

As a developer, you'll need to work with a version control system, especially if you're working on a project with other developers. A version control system stores the project history so we can easily see what code changes have been implemented, when and by whom. If there are issues, a version control system allows you to revert to an earlier code version.

Git is the most popular version control system in the world. According to the 2021 Stack Overflow survey, almost 95% of developers use Git as their Version Control system.

Any professional developer needs to know Git inside and out. As a robust tool with many uses, learning Git can take some time. However, you can get started using Git by learning some basic commands you'll use daily in your projects.

If you’re a beginning developer, this article will teach you how to effectively use Git as a version control system for your project. You’ll learn to understand the Git workflow and the essential Git commands you need to know to get started using Git.

**Note:** This article assumes you have already installed and configured Git on your local drive.
-   If you need help installing Git, check out [Git basics: first steps with the version control system](https://www.ionos.com/digitalguide/websites/web-development/git-tutorial/).   
-   If you want more information on how to configure Git for your project, see [What are the most important Git commands](https://www.ionos.com/digitalguide/websites/web-development/git-commands/)?

## The Git Workflow

If you want to use Git commands effectively, you need to understand the basic Git workflow.

-   Git is a distributed version control system. Unlike a centralized version control system, where the project is stored on a central server, each team member using Git has a copy of the project with its history stored on their local machine.
    
-   The Git Repository stores all the Project Code. The Git Repository is a database that contains all the project code and the history of all code updates. The Git repository can be stored on your local machine if you are working on a solo project. However, project code is typically stored in a repository on a remote server.
    
### A Basic Git Workflow

1.  You start your git project by creating a git repository to track your files or copying a remote repository onto your local drive.
    
2.  Once you have a local repository on your drive, you check out the project to a new or existing project branch. This creates a copy of the project files and directories in your working directory, which you can then update with your changes.
    
3.  You copy the updated files to the staging area when you've completed your changes. The staging area (also called the index) allows you to review your changes before you commit your updates to your local repository.
    
4.  After you've verified your code in the staging area, you're ready to commit it to the Git repository on your local machine.
    
5.  You can then push your code to the remote repository.
    
![Git workflow schema](https://lh3.googleusercontent.com/0wtm7-j2vZJ-CGtcZyaGmWQ6bc-0pAQjEZHZ5e30zlXJDUtL6tahvFhlJqHkc7XgImcJB85egucAm2zKqakV7inMCiU99vRyuThHpmipiBK6ZvxJ0bFC3C-eI6bJcdouUwXWOq6ltOOlKhXUIhRo4j3XH-KBdJG0RGTCcJaYu1RxlJsLXcJXBGKh9GkABQ)

## Git Branches

Any time you make a change to working code, you introduce the possibility of introducing errors to the software project. Git Branches help mitigate this possibility by allowing you to keep code changes separate from the main working code.

Using Git branches provides several advantages:
-   Multiple developers can work on different features simultaneously without affecting the work of other team members.
    
-   As a developer, you can ensure that any new features or bug fixes are working correctly before merging your updates into the main code.
    
-   If you are working on multiple features, you can create a separate branch for each feature.
    
If a project is complex, with many coders working on several different features, the Git workflow can be fairly complex, with multiple code branches and tags to help identify new code versions.

This article will keep things simple, focusing on the commands that support a basic daily Git workflow. (If you want to learn more about branches or tags, see [What are the most important Git commands](https://www.ionos.com/digitalguide/websites/web-development/git-commands/)?)

## How to Execute Git Commands

There are several ways to execute Git commands:

-   Via the command line. This is often the fastest and easiest way to execute a Git Command.
    
-   Using a code editor. Most code editors include support for basic Git commands, and many code editors offer extensions to support additional git features.
    
-   With a Graphical User Interface. The [Git website includes a list of several programs](https://git-scm.com/downloads/guis) that offer a graphical interface for executing Git commands.
    

In this article, we'll be focusing on entering Git commands directly from the command line. Even if you primarily use another tool to execute Git Commands, there can be times when only a command line interface is available.

## The Basic Git Commands Beginning Developers Need to Know

Now that you understand the basics of the Git workflow, it's time to learn the commands you'll need to follow the Git workflow in your projects. Here are some of the basic Git Commands you'll need to know.

### 1. git init

Git init creates an empty git repository for project tracking. Once the repository is created, any files added to the repository are automatically tracked.

    git init

### 2. git clone

Cloning a remote repository downloads an exact copy of the files in the remote repository to a repository on your computer. From there, you can check out files and make changes.

Cloning also establishes a connection between the remote repository and your local repository, allowing you to push your changes from your local machine to the remote repository and pull changes in the remote repository down to your local copy.

*To clone a repository into your current directory:*

    git clone <[https://remote](https://remote) repository url>

### 3. git branch

You can use the git branch command to create a new branch, delete an existing branch or to list all project branches.

*To create a new branch:*

    git branch <branch name>

*To delete an existing branch:*

    git branch -d <branch name>

*To list all project branches:*

    git branch

When you list all branches, the current branch is shown in green with an **

### 4. git checkout

You use git checkout to switch between branches.

    git checkout <branch name>

Before switching to a new branch:

-   Changes in the existing branch must be committed.
    
-   The new branch must exist on your local machine.
    

### 5. git add

Adds a file (or files) to the staging area. Once updated files are in the staging area, they can be committed to the repository. Using the git add command has the following effect:

Any files in the staging area (or deleted) are then deployed to the repository with the commit command.

The git add command allows multiple files to be listed on the command line and accepts patterns.

*To add files to the staging area:*

    git add <filename>

*To add multiple files to the staging area:*

    git add <filename1>, <filename2>, <filename3>

*To add all Javascript files to the staging area:*

    git add *.js


If you delete a file from your working directory, the add command deletes it from the staging area. 
For example:
![Git add command](https://lh4.googleusercontent.com/9VGiCIJ2S_vCk5annmvFL-Bj6nzWTQuGEHF9QNV9cLCgCwvzUe2z-NNG8IloByBgHQG7M7ibF7vI4rnb4gHVN1pywkeVOV24dTjhSFjunQhLqMY-R2Zk7HFDdF7cX2AFexBKzRLN5eeVI1PbXewfFc5lB4ep4fppM9ITThaXEn5G64Xl8cRxMX-w1LDMug)

*To add all changed files (including new files, updated files, and deleted files) to the staging area:*

    git add -A

### 6. git commit

Committing your changes to your git repository creates a snapshot of your project as it exists at this point in time. Changes in your project are not tracked until they are committed to the repository.

When you issue a git commit command, the repository is updated with the files that are currently stored in the staging area. If you have made changes to the files in your working directory, those changes are not committed to the repository.

You don’t have to wait until you’ve completed all the work on a specific update before you commit your changes to the repository. In fact, you should commit frequently. You risk losing all the hard work you've completed so far if there's an issue with your working directory or an error in your code.

You typically issue a git commit when you’ve reached a logical stopping point or when you want to save a snapshot of your project to preserve the work that’s been completed so far.

You should always attach a message to your commit command so project team members can understand your changes.

*To commit all files in the staging area along with a short explanatory message:*

    git commit -m “Fixed issue #: 62541 - Spelling error.”

All your files in the staging area are committed to the repository and you receive a short confirmation message showing what was changed.

You may need to include more than a short message to explain the changes in your commit. For example, you may have fixed several bugs and you want to list each bug that was fixed. 

In that case, you use the following command:

    git commit

When you press ENTER, your default editor opens and you can enter as much information as you need to convey about this commit. When you’re done, close the editor window. Your comments are written to the repository along with the changes you made.

### 7. git status

Git status is a particularly helpful command for beginners. It displays the differences between the working directory, the staging area, the local repository, and the main remote repository if it exists.

*To view the current status of your project:*

    git status

Here’s an example of the information you can determine from a git status command.
![Git status](https://lh5.googleusercontent.com/M1wcOUjLbfqDy3ytu1lK_mzFH5jxCnlO1nC_5iSCaMj6biilyyYoEZlv7WRKnBkJGcXEBozdsAOJq5I0W4l299wt6KH3MWoHTwE0BY2aB2qxl8oJUSmEHlakqgaL1_aiwcbXIJE5o5iXHcxulvF8NddbhgaOcw1XOt63FeIk146upGBBPuwoQ7WXfMeZGw)

In this example, we can see that:

-   We have committed one change to our local repository that has not been pushed to the remote repository.
    
-   We have two files (file1.txt and file2.txt) in the staging area that need to be committed to the remote repository.
    
-   However, we also have changes in our working directory. We've modified a file already in the staging area (file1.txt) and created a new file (frontpage.html). If we want to commit these changes to the repository, we'll need to add them to the staging area before issuing a Commit command.
    

### 8. git push

After you’ve committed your changes to the local repository, you can push your new snapshot to the remote server. The git push command uploads the committed changes from the specified branch to the same branch in the remote repository.

    git push <https://remote repository url> <branch name>

You’re asked to enter your username and password for the remote server. After authentication, your changes are pushed to the remote repository. This may take some time if your project is very large.

### 9. git merge

Once you’ve created independent branches in your repository, you can integrate these changes into one branch using the git merge command.

Git merge works on the current branch. So if you want to update your main branch with one or more forked branches, use the checkout command to switch to the main branch.

Once you’re working with the branch you wish to update, you can merge another branch into the current branch by using this command:

    git merge <branch name>

After merging the two branches, you may want to delete the merged branch:

    git branch -d <branch name>

### 10. git –help

As a beginner to Git, you’ll probably have questions about how to use certain commands. You can get help on any command by adding the -help flag to the end of the command.

*For example, if you want to learn more about the git commit command, you can enter:*

    git commit –help

This displays all the help associated with the commit command.

*To see a short summary of the command and its options:*

    git commit -h

## Automatically Deploy Your Project with Deploy Now

If you use GitHub as the Git platform for your web-based development projects, you can automatically deploy your repository whenever you execute a push. You can even select to deploy selected branches to a staging environment for review.

Deploy Now automatically creates a customizable deployment workflow for your project with GitHub Actions to deploy your project to IONOS' secure infrastructure easily.

[Find out more about Deploy Now](https://docs.ionos.space/docs/) or get started quickly with one of Deploy Now’s [sample projects](https://docs.ionos.space/docs/framework-samples/).
