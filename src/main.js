const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const authenticate = require('./routes/authenticate')
const user = require('./routes/user')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./src/swagger/swagger.yaml')

app.use(morgan('dev'))

app.use(cors({
  credentials: true,
  origin: ['http://localhost:8000']
}))

app.use(express.json())

app.use('/v1.0/api/authenticate', authenticate)
app.use('/v1.0/api/user', user)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app
