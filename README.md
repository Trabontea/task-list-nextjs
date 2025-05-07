This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Setup docker

https://www.youtube.com/watch?v=tm70Xa6igbY&t=213s
// si production
 
```bash
docker init
```

Se alege other si se creeaza 4 fisiere automat

Docker desktop trebuie sa fie pornit

```bash
docker compose up --build
```

Pentru a se sincroniza cu dezvoltarea trebuie facut setup

```bash
docker compose up --watch
```

## DB SETUP

db:
image: postgres:15-alpine
environment:
POSTGRES_USER: postgres
POSTGRES_PASSWORD: password
ports: - '5432:5432'

https://hub.docker.com/_/postgres

```bash
docker compose up
```

Vizualizare containere care ruleaza

```bash
docker ps
```

Docker debug (subscrption pro)

```bash
docker debug id
```

## Install & Setup Prisma

### Install package

```bash
npm install prisma --save-dev
```

### Init

```bash
npx prisma init
```

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

Dupa ce setam schema rulam:

```bash
npx prisma db push
```

### Start Prisma Studio

```bash
 npx prisma studio
```

Install Prisma Client

npm install @prisma/client && npx prisma generate
