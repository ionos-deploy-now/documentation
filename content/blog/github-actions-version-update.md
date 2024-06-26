---
description: ''
created: '2024-06-26'
author: 'marcel-solle'
tags:
    - update
    - github
    - action
    - workflow
---

# Upgrade your GitHub actions

Some actions in your workflow files might be outdated. 
This update involves upgrading the versions of two actions: `checkout` and `node-setup` to version 4 (`v4`). 
These enhancements ensure better performance, security and compatibility with the latest GitHub features.

## How to Update Your Workflows

To benefit from these updates, you’ll need to modify your workflow files. Here’s a quick guide:

### Step 1: Locate Your Workflow Files

Navigate to the `.github/workflows/` directory in your repository.

### Step 2: Update Action Versions

Edit your workflow files to update the actions to `v4`:

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
```

```yaml
- name: Setup Node.js
  uses: actions/setup-node@v4
```

### Step 3: Commit and Monitor

After updating, commit the changes and monitor your workflows to ensure they run smoothly with the new action versions.


