const server = require('./src/main')
const dbConnect = require('./src/libs/dbConnection')
const port = process.env.PORT_SERVER || 3000

async function serverStart() {
  server.listen(port, () => {
    dbConnect()
    console.log(`SERVER UP ON PORT => ${port}`)
  })
}

serverStart()
