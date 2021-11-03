require('dotenv').config()

const { connectDatabase } = require('./src/libs/dbConnection')
const server = require('./src/main')
const port = process.env.PORT_SERVER || 3000

async function serverStart() {
  server.listen(port, () => {
    connectDatabase()
    console.log(`SERVER UP ON PORT => ${port}`)
  })
}

serverStart()

