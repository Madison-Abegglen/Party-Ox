const router = require('express').Router()
const Users = require('../models/user')
const session = require('./session')

router.post('/register', async (req, res) => {
  if (typeof req.body.password !== 'string' || req.body.password.length < 8) {
    return res.status(400).send({ error: 'Password must be at least 8 characters' })
  }

  req.body.password = Users.generateHash(req.body.password)
  try {
    const user = await Users.create(req.body)
    delete user._doc.password
    req.session.uid = user._id
    return res.send(user)
  } catch(error) {
    return res.status(400).send(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await Users.findOne({ email: req.body.email })
    if (!user) {
      return res.status(400).send({ error: 'Invalid username' })
    }
    if (!user.validatePassword(req.body.password)) {
      return res.status(400).send({ error: 'Invalid password' })
    }
    delete user._doc.password
    req.session.uid = user._id
    return res.send(user)
  } catch(error) {
    return res.status(400).send(error)
  }
})

router.delete('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) {
      return res.send(error)
    }
    return res.send({ message: 'Logout successful' })
  })
})

router.get('/authenticate', async (req, res) => {
  try {
    const user = await Users.findById(req.session.uid)
    if (!user) {
      return res.status(401).send({ error: 'Please login to continue' })
    }
    delete user._doc.password
    return res.send(user)
  } catch(error) {
    return res.status(500).send(error)
  }
})

module.exports = {
  router,
  session
}