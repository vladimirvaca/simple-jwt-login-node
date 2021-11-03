const UserService = require('../services/UserService')
const bcrypt = require('bcrypt')
const express = require('express')
const { verifyToken } = require('../libs/tokenVerification')
const router = express.Router()

const saltRounds = 10

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body
    if (email && password) {
      req.body.password = await bcrypt.hash(req.body.password, saltRounds)
      await UserService.create(req.body)
      res.status(201).json({
        status: true,
        message: 'User created succesful'
      })
    } else {
      throw {
        status: 'error',
        error: 'Please provide all parameters [email, password]'
      }
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:page/:sizePage', verifyToken, async (req, res) => {
  try {
    res.status(200).json({
      status: true,
      page: req.params.page,
      totalPages: Math.ceil(
        (await UserService.getCountUsers()) / req.params.sizePage
      ),
      data: await UserService.paginatedUsers(
        req.params.page,
        req.params.sizePage
      )
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
