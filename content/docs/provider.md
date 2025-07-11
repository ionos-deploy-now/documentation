---
description: 'Frequently Asked Questions about Deploy Now, supported frameworks and technologies and how to deploy them.'
sidebar: 'docs'
prev: '/docs/faq/'
next: '/blog/'
editable: true
---



# Guidance for Migrating a Git-Based Project

> Due to the EU Data Act, we are legally obliged to inform you about how you can move to another provider. However, we hope you like Deploy Now so much that you stay!

Moving a project from IONOS Deploy Now to a new hosting provider is a manageable process. Because Deploy Now utilizes a Git-based workflow, your codebase is portable. The migration primarily involves ensuring your code is on an accessible Git provider, connecting that repository to the new host, and updating your domain's DNS.

## Pre-Migration: Codebase Setup

Before you begin, you must ensure your project's code is located in a repository that your new hosting provider can access.

If your code is already located on a compatible Git provider (such as GitHub), you can proceed directly to the "Migration Process" section.

### Moving Your Codebase to a Different Git Provider

If your code is on a Git provider that is not compatible with your new host, you must first move the repository. The recommended method is to create a "mirror," which duplicates the repository perfectly, including all branches, tags, and commit history.

1.  **Create a New Repository:** Start by creating a new, empty repository on the target Git provider (e.g., GitHub).
2.  **Mirror the Repository:** This is most commonly done via the command line. You perform a "bare clone" of your existing repository and then "mirror-push" it to the new repository's address. The general commands are:
    ```bash
    git clone --bare [https://old-provider.com/user/repo.git](https://old-provider.com/user/repo.git)
    cd repo.git
    git push --mirror [https://new-provider.com/user/new-repo.git](https://new-provider.com/user/new-repo.git)
    ```
3.  **Confirm the Move:** Once complete, your repository is fully duplicated on the new Git provider, and you can proceed with the migration.

## Migration Process

1.  **Connect & Configure:** Link your Git repository to the new hosting service. In the new service's dashboard, verify that the project's build command and publish directory are correct.
2.  **Transfer Environment Variables:** Copy any environment variables from your IONOS project settings and add them to the project settings on the new platform.
3.  **Test Deployment:** Use the preview URL provided by the new host to test your site's functionality before proceeding.

## Domain and DNS Update

1.  **Add Domain:** Add your custom domain to the project on the new provider's platform.
2.  **Update DNS:** Log in to your domain registrar. Replace the existing IONOS DNS records with the new records (`A`, `CNAME`, etc.) supplied by your new provider.
3.  **Verify:** After DNS propagation, which can take several hours, confirm that your domain successfully loads the site from the new host.
