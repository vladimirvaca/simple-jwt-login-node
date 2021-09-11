const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      status: true,
      message: 'Api Authenticate Found'
    })
  } catch (error) {
    res.status(202).json(error)
  }
})

module.exports = router
