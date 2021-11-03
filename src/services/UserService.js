const User = require('../models/User')

module.exports = {
  async create(newUser) {
    try {
      const createdUser = new User(newUser)
      return createdUser.save()
    } catch (error) {
      throw { status: 'error', error }
    }
  },

  async findByEmail(email) {
    try {
      const userFound = User.findOne({ email: email })
      return userFound
    } catch (error) {
      throw { status: 'error', error }
    }
  },

  async getCountUsers() {
    try {
      const numUsers = await User.countDocuments({})
      return numUsers
    } catch (error) {
      throw { status: false, error }
    }
  },

  async paginatedUsers(page, sizePage) {
    try {
      const paginatedUsers = User.find({})
        .limit(sizePage * 1)
        .skip((page - 1) * sizePage)
      return paginatedUsers
    } catch (error) {
      throw { status: 'error', error }
    }
  }
}
