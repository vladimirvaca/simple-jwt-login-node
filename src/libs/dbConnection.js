const mongoose = require('mongoose')

const URI = 'mongodb://user:user@localhost:27017/sample-db'

async function connection() {
  try {
    await mongoose.connect(URI, {})
    console.log('CONNECTED TO DATABASE => sample-db')
  } catch (error) {
    console.log('DATABASE CONNECTION FAILED => ', error)
  }
}

module.exports = connection
