---
description: 'Feature Management and Project Consistency in Deploy Now'
sidebar: 'docs'
prev: '/docs/faq/'
next: '/docs/provider/'
editable: true
---

# Feature Management and Project Consistency in Deploy Now

## Overview

When using **Deploy Now**, each online project must be paired with a corresponding active Deploy Now Project feature. This ensures predictable deployment behavior and consistent resource usage across your projects.

In Deploy Now, the number of enabled **Deploy Now features** must always match the number of **projects currently online**.

## Feature–Project Relationship

Deploy Now uses a one-to-one relationship between:

- **Feature units** — these represent active deployment capacity, including staging deployments and feature environments.
- **Online projects** — the live apps or sites currently deployed through Deploy Now.

Make sure your project count aligns with your available features before making changes to avoid temporary configuration mismatches.

## What Happens If a Feature Is Removed by Mistake

If a Deploy Now feature that is associated with an online project is deleted unintentionally:

- The **online project is *not*** deleted.
- The project **remains in Deploy Now and continues to exist** as a resource.
- No data loss occurs as a result of the feature deletion.
- Deploy Now marks the project as lacking one matching feature but does not disable the project itself.

## Restoring Normal Operation

To restore correct feature–project alignment:

1. **Re-activate a Deploy Now feature** via your dashboard or contacting support.
2. Ensure the **total number of active features matches the total number of online projects**.
3. Deploy Now will automatically return to normal operational state once alignment is restored.

This process ensures that each project has the correct deployment support without impacting uptime.

## Best Practice Recommendations

- Review your active features regularly via the Deploy Now dashboard.
- Before removing a feature, confirm that the intended project is no longer needed or has been decommissioned.
- If you encounter mismatches, re-add a free feature rather than deleting the associated project.
