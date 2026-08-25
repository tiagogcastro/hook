# hook

![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-17-61DAFB?logo=react&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

Hook is a social network prototype (2021): a feed where users create posts
and interact, built as a two-person team project. This monorepo contains the
API and the web client.

## Apps

| App | Path | Description |
|---|---|---|
| API | `apps/backend` | Express + TypeScript REST API: posts, users, JWT auth, file uploads, transactional email |
| Web client | `apps/frontend` | React SPA for the feed and profiles |

## Features

- User accounts with JWT authentication and password hashing
- Post creation with image uploads (Multer)
- Feed listing and user profiles
- Email flows via Nodemailer with Handlebars templates

## Tech stack

| Layer | Tools |
|---|---|
| API | Node.js, Express 4, TypeScript, TypeORM, JWT, bcrypt, Multer, Nodemailer |
| Web | React 17, Create React App, TypeScript |

## How to run

### Backend

```bash
cd apps/backend
yarn install
cp .env.example .env
yarn dev:server
```

### Frontend

```bash
cd apps/frontend
yarn install
yarn start          # http://localhost:3000
```

## Legacy note

Prototype from mid-2021 with era-pinned dependencies. Expect friction on
current Node versions without upgrades. Estimated modernization effort if
picked up later: small (half-day). No fixes are planned as part of this
cleanup phase.

## License

[MIT](LICENSE)

## Team

Built by [Tiago Gonçalves de Castro](https://github.com/tiagogcastro) (API)
and Marcos Proença (web client).
