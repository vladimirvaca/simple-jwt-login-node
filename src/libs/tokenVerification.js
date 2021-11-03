const jwt = require('jsonwebtoken')

module.exports = {
  verifyToken(req, res, next) {
    try {
      const { authorization } = req.headers
      if (authorization) {
        const token = authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_PRIVATE_KEY)
        req.user = jwt.decode(token)
        next()
      } else {
        throw { message: 'Please, provide a Bearer token.' }
      }
    } catch (error) {
      res.status(401).json({
        status: false,
        message: 'Error with authentication.',
        error
      })
    }
  }
}
