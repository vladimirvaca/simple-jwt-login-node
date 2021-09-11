const UserService = require('../services/UserService')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const saltRounds = 10

router.post('/create', async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds)
    const user = await UserService.create(req.body)
    res.status(201).json({
      status: true,
      user,
      message: 'User created succesful'
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      status: true,
      message: 'Api User Found'
    })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
