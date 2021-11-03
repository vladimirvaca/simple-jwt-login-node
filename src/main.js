const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const authenticate = require('./routes/authenticate')
const user = require('./routes/user')

app.use(morgan('dev'))

app.use(cors({
  credentials: true,
  origin: ['http://localhost:8000']
}))

app.use(express.json())

app.use('/v1.0/api/authenticate', authenticate)
app.use('/v1.0/api/user', user)

module.exports = app
