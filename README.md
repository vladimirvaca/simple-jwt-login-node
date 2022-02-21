# simple-jwt-login-node
It's a simple login microservice with jwt, nodejs and mongo

## Used technologies

  - express
  - bcrypt
  - jsonwebtoken
  - husky
  - mongoose
  - swagger-ui

## Prerequisites

You need have installed **Node** and **MongoDB** in your machine.
And optional if you want run this application only for test purposes, you can use **Docker Desktop**.

Additionally you need install this dependencies :

`npm i -g eslint-cli` 

## Run server

To run the server you must install all the dependencies with the command `npm install`.

Once the dependencies are installed you can run the command: `npm run serve`.

## Authentication

For authentication I use the jwt library with which we generate a bearer and authorize the API calls.

## Env vars

You need create a `.env` file.
In the file you must add:

```
DB_USER=user
DB_PASSWORD=user
DB_NAME=sample-db
DB_HOST=localhost:27017
JWT_PRIVATE_KEY=mysupersecretkey
```
If you are using a local database or without password or user, you should remove or comment the `auth` object in properties of the connection on the file `libs/dbConnection.js` some like this:

```js
await mongoose.connect(URI, {
  autoIndex: false,
})
```

## Running with docker

You can test this application running from docker. 
For make this, you need run this commands in order:

1. `docker build --tag simple-jwt-login-node .`
2. `docker-compose  -f docker-compose.yml  up --build`

This will install and create all necesary to run the application. Then you can try in your browser acces to [simple-jwt-login-node](http://localhost:3000/api-docs)

## Documentation

For documentation I use swagger-jsdoc, including the definitions within the code. You can test it in the project path `/api-docs`.
You can use authentication for protected routes, be sure to prepend JWT before entering your bearer like this `JWT yourBearer`

> **Developed by rvladimirvm**
