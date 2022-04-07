![Deploy Now](https://github.com/ionos-deploy-now/documentation/actions/workflows/deploy-now.yml/badge.svg?branch=main)

# Deploy Now - Documentation

This is the [official documentation](https://docs.ionos.space/) of IONOS Deploy Now, the hosting platform for instant deployments of static sites and PHP Apps via GitHub. The documentation uses [Gridsome](https://gridsome.org) with NodeJS v12.22 and is running on IONOS Deploy Now.

## Contribute

Found a bug or typo or missing important content? Feel free to open a pull request. We will review it quickly. Are you missing something bigger? Feel free to open a [GitHub Issue](https://github.com/ionos-deploy-now/ionos-deploy-now/issues).

## Fork & deploy

### Setup

Install dependencies and edit the new `.env` file.

```bash
npm ci
cp .env.example .env
```

### Develop

Run local server.

```bash
npm run develop
```

### Content

All content resides in the `content` directory, where the next directory name decides the `contentType`.
Pages can be created manually or generated with the cli.

```bash
npm run cli
```

### Build

Create static build in `dist` folder.

```bash
npm run build
```
