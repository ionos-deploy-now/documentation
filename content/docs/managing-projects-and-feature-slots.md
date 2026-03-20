---
description: 'Managing Projects and Feature Slots in Deploy Now'
sidebar: 'docs'
prev: '/docs/faq/'
next: '/docs/provider/'
editable: true
---

# Managing Projects and Feature Slots in Deploy Now

## Overview

When managing your **Deploy Now** projects, a common misconception is that every online project is hard-linked to a specific "Project Feature" in your contract. 

In reality, Deploy Now features simply act as an overall pool of available **slots**. There is no direct connection between a specific project and a specific feature. Instead of looking for an exact match, you only need to ensure that your total number of available slots meets or exceeds your total number of currently deployed projects.

## Understanding Static vs. Dynamic Slots

When managing your features and projects, the only distinction you need to make is the *type* of project you are hosting. Features are categorized into two types of slots:

* **Static Slots:** Used for hosting static projects.
* **Dynamic Slots:** Used for hosting dynamic projects.

As long as you have enough slots of the correct type to cover your active projects, your Deploy Now environment will operate smoothly. The exact feature you add or remove does not matter, only the **total number of slots**.

## Deleting a Project and a Feature

Because there is no fixed connection between a project and a feature, removing a project to save costs is a straightforward, two-step process. You do not need to identify the "exact" feature to delete. 

To safely scale down:
1. **Delete the Project:** Remove the specific online project you no longer need via the Deploy Now interface. Take note of whether it was a static or dynamic project.
2. **Delete Any Matching Feature Slot:** Navigate to your plan management and cancel *any* feature of the corresponding type (static or dynamic). 

**Important:** Before removing a feature, always verify that your remaining number of slots is equal to or greater than the number of projects you plan to keep online.

## What Happens If a Feature (Slot) Is Removed by Mistake?

If you accidentally delete a Deploy Now feature slot before deleting a project—resulting in fewer slots than active projects—your deployments are safe:

* The **online project is *not*** deleted.
* The project remains in Deploy Now and your files are safe (no data loss occurs).
* Deploy Now will simply flag your account as lacking the necessary slot capacity.

## Restoring Normal Operation

If you find yourself with a capacity mismatch (more projects than slots), you can easily restore normal operation by balancing your numbers:

* **Option A:** Re-activate a Deploy Now feature (static or dynamic, depending on what is missing) via your dashboard.
* **Option B:** Delete an unused online project to free up an existing slot, bringing your active project count back within your limit.

## Best Practice Recommendations

* **Think in "Parking Spaces":** Treat your Deploy Now features like parking spaces (slots) and your projects like cars. Any car can park in any available space of the right size (static vs. dynamic). 
* **Check the Type:** Always double-check if the project you are managing is static or dynamic before adding or removing features.
* **Count Before Deleting:** Before removing a feature from your account, briefly count your remaining active projects to ensure you have enough capacity left over.