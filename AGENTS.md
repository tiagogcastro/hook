# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project

Hook: social network prototype (2021) as a monorepo. Feed with posts and
user accounts, built by a two-person team.

- `apps/backend`: Express + TypeScript API (posts, users, JWT auth, uploads, email)
- `apps/frontend`: React (CRA) SPA consuming the API

## Commands

Backend:

```bash
cd apps/backend
yarn install
cp .env.example .env
yarn dev:server
```

Frontend:

```bash
cd apps/frontend
yarn install
yarn start
```

## Rules for agents

- Docs-only maintenance phase: no dependency upgrades or runtime behavior changes
- Never commit `.env`; only `.env.example` is tracked
