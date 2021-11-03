const UserService = require('../services/UserService')
const jwt = require('jsonwebtoken')
const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body
    if (email && password) {
      const userByEmail = await UserService.findByEmail(email)
      if (userByEmail) {
        const userAuthenticated = await bcrypt.compare(
          password,
          userByEmail.password
        )
        if (userAuthenticated) {
          res.status(200).json({
            status: true,
            token: jwt.sign({}, process.env.JWT_PRIVATE_KEY),
            message: 'User was authenticated.'
          })
        } else {
          res.status(200).json({
            status: true,
            message: 'Password incorrect.'
          })
        }
      } else {
        throw {
          status: 'error',
          error: 'User does not exist '
        }
      }
    } else {
      throw {
        status: 'error',
        error: 'Please provide all parameters [email, password].'
      }
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
