---
description: 'Deploy Now helps you setting up deployment notifications from GitHub Actions directly to Slack or RocketChat.'
sidebar: 'docs'
prev: '/docs/runtime-configuration/'
next: '/docs/staging-deployments/'
editable: true
---

# Notifications

Get notified whenever a deployment was successful or failed. Notifications can be set up in the Deploy Now frontend and are then added to `.github/workflows/deploy-now.yaml`. They can be defined on project level and apply to all deployed branches within a repository. If you create a new branch from a branch that already contains the notification step, the new branch will also send notifications. 

~~~mermaid
sequenceDiagram
    autonumber
    User ->> User: edit and commit
    User ->> GitHub: push
    GitHub ->> GitHub Actions: on push
    GitHub Actions ->> GitHub Actions: Run workflow
    GitHub Actions ->> Slack/RocketChat: send notification 
    Note left of Slack/RocketChat: Job status, commit URL, deployment URL, build logs
~~~

## Set up Slack notifications

* Create a Slack App for your workspace (alternatively use an existing app you have already created and installed).
* Add the [`chat.write`](https://api.slack.com/scopes/chat:write) bot scope under **OAuth & Permissions**.
* Install the app to your workspace.
* Copy the app's Bot Token from the **OAuth & Permissions** page and [add it as a secret in your repo settings][repo-secret] named `SLACK_BOT_TOKEN`.
* Invite the bot user into the channel you wish to post messages to (`/invite @bot_user_name`).

(see also [here](https://github.com/slackapi/slack-github-action))

Then navigate to the project details in Deploy Now, click on **notifications** in the settings area and add a notification. Paste in the `SLACK_BOT_TOKEN` as well as the channel name and save the settings. Deploy Now will store the `SLACK_BOT_TOKEN` in your GitHub secrets. Each new deployment will now send Slack notifications.


## Set up RocketChat notifications

*Go to your admin page
*Go to Integrations
*Create a New Integration and select Incoming WebHook
*Select the channel were you will receive the alerts (you can override in messages)
*Set Script Enabled to True
*Paste your script inside the Script field
*Save the integration

(see also [here](https://martinschoeler.github.io/docs/administrator-guides/integrations/))

Afterwards, you can set up the notification in the project details page in Deploy Now. Simply click on **notifications**, add a notification and paste in the webhook URL. Each new deployment will now send RocketChat notifications.

