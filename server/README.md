# Getting Started with FLIX: Server

FLIX: [Node.js version 14.16.0](https://nodejs.org/en/docs/) with [Express](https://expressjs.com/en/starter/installing.html) server was created with [npm](https://docs.npmjs.com/cli/v7/commands/npm-init). The database was configured with [Sequelize ORM](https://sequelize.org/) in conjunction with [Postgresql](https://www.postgresql.org/docs/).

## Setup

Create .env

```
cp .env.example .env
```

```
DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
DB_PORT=

API_KEY_V3=

NODE_ENV=
PORT=3000
CORS_URL=
```

### If you chose config.json for database configuration (in /db/config):

```
DB_URL_STRING=[dialect]://[username]:[password]@[host]:[port]/[db name]
```

Make changes in the .sequalizerc file as well:\
change:

```
config/config.js
```

to:

```
config/config.json
```

## Available Scripts

In the /server directory, you can run:

```
npm install
```

```
 `npm run dev`
```

or

```
 `npm run`
```

### to create, migrate, and seed Postgres database:

```
npm run db:reset
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies (including development)

    axios: 0.21.1
    cors: 2.8.5
    express: 4.17.1
    moment: 2.29.1
    pg: 8.6.0
    pg-hstore: 2.3.4
    sequelize: 6.6.2

    @babel/core: 7.14.6
    @babel/node": 7.14.5
    @babel/preset-env: 7.14.5
    @babel/register: 7.14.5
    dotenv: 10.0.0
    nodemon: 2.0.7
    sequelize-cli: 6.2.0
