const mongoose = require('mongoose')

const URI = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
async function connection() {
  try {
    await mongoose.connect(URI, {
      autoIndex: false,
      auth: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      }
    })
    console.info(`CONNECTED TO DATABASE => ${process.env.DB_NAME}`)
  } catch (error) {
    console.error(`DATABASE CONNECTION FAILED => ${error}`)
  }
}

module.exports = connection
