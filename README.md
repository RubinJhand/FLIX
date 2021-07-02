![Flix Logo](https://github.com/RubinJhand/movie-app/blob/master/docs/images/FlixLogo.png)

# FLIX

    FLIX is a responsive web app for viewing categories and genres of various films and series.  Users can search and see recommendations based on the selected film or series.  Cards are styled to resemble widescreen televisions and/or cinema screens.  The server queries the API and stores the data, after formatting, in the database.  The frontend only communicates with the server.

## Motivation

---

    While this type of app is very common, and I expect some exaggerated eye-rolling, I chose to create this app to learn: Figma, Inkscape, and become more familiar with Babel for Sequelize and Express (ES6). I created the popcorn logo svg and I also improved my skills with: Styled Components, React, CSS, Sequelize, Postgres, Express, and coded with readability in mind.

## Screenshots

---

### Mobile view

![Flix Mobile View](https://github.com/RubinJhand/movie-app/blob/master/docs/images/FlixMobile.png)

### User Experience

![Flix Card Hover with Trailer](https://github.com/RubinJhand/movie-app/blob/master/docs/images/FlixCardDemo.gif)

![Flix Header and Nav demo](https://github.com/RubinJhand/movie-app/blob/master/docs/images/FlixNav.gif)

### Console

**Because databases and servers don't need to look fancy.**
![Flix: a way to show the database working](https://github.com/RubinJhand/movie-app/blob/master/docs/images/FlixConsole.png)

## Dependencies

---

    Server:
        Node: 14.15.5
        Express: 4.17.1
        Postgresql: 8.6.0
        Sequelize: 6.6.2

        Sequelize-cli: 6.2.0
        pg-hstore: 2.3.4

        Axios: 0.21.1
        Cors: 2.8.5
        Moment: 2.29.1

        @babel/core: 7.14.6
        @babel/node": 7.14.5
        @babel/preset-env: 7.14.5
        @babel/register: 7.14.5
        dotenv: 10.0.0
        Nodemon: 2.0.7

    Client:
        @material-ui/core: 4.11.4
        @material-ui/icons: 4.11.2
        axios: 0.21.1
        moment: 2.29.1
        react: 17.0.2
        react-dom: 17.0.2
        react-router-dom: 5.2.0
        react-scripts: "4.0.3
        react-youtube: 7.13.1
        styled-components: 5.3.0"

        dotenv: 8.2.0

## Installation

---

### Requirements

Node.js, NPM, and Postgresql must be installed on your computer before following the installation process below.

### Server Setup

Create .env

```
cp .env.example .env
```

```
DB_HOST=[database host address. Example: 127.0.0.1]
DB_USER=[database username]
DB_PASS=[database password for the user]
DB_NAME=[database name]
DB_PORT=[database port]

API_KEY_V3=[tmdb API key]

NODE_ENV=[environment: development or production]
PORT=3000
CORS_URL=[origin url.  Example: http://localhost:3005]
```

**_If you chose config.json for database configuration (in /db/config):_**

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

#### Available Scripts

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

#### To create, migrate, and seed Postgres database:

```
npm run db:reset
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Client Setup

#### Available Scripts

In the /client directory:

```
npm install
```

```
npm run dev
```

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

## License

---

MIT © Rubin Jhand
