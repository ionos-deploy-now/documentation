![Deploy Now](https://github.com/ionos-deploy-now/documentation/actions/workflows/deploy-now.yml/badge.svg?branch=main)

# Deploy Now - Documentation

Use [Gridsome](https://gridsome.org) with NodeJS v12.22

## Setup

Install dependencies and edit the new `.env` file.

```bash
npm ci
cp .env.example .env
```

## Develop

Run local server.

```bash
npm run develop
```

## Content

All content resides in the `content` directory, where the next directory name decides the `contentType`.
Pages can be created manually or generated with the cli.

```bash
npm run cli
```

## Build

Create static build in `dist` folder.

```bash
npm run build
```
