const User = require('../models/User')

module.exports = {

  async create(newUser) {
    try {
      const createdUser = new User(newUser)
      return await createdUser.save()
    } catch (error) {
      throw { status: 'error', error }
    }
  }
}
