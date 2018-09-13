// THIS FILE SHOULD NOT NEED TO BE CHANGED

const router = require('express').Router();
const session = require('./session')
const Users = require('../models/user');

// CREATE A NEW USER
router.post('/auth/register', (req, res) => {
  // VALIDATE PASSWORD LENGTH
  if (req.body.password.length < 8) {
    return res.status(401).send({
      error: 'Password must be at least 8 characters'
    })
  }
  // CHANGE THE PASSWORD TO A HASHED PASSWORD
  req.body.password = Users.generateHash(req.body.password)
  // CREATE THE USER
  Users.create(req.body)
    .then(user => {
      // REMOVE THE PASSWORD BEFORE RETURNING
      delete user._doc.password
      // SET THE SESSION UID (SHORT FOR USERID)
      req.session.uid = user._id
      res.send(user)
    })
    .catch(error => {
      console.log('[REGISTER ERROR]', error)
      if (error.code === 11000) { // Email already exists
        return res.status(401).send({ error: 'Email already exists' })
      }
      res.status(500).send({ error: 'Unable to register' })
    })
})

router.post('/auth/login', (req, res) => {
  // FIND A USER BASED ON PROVIDED EMAIL
  Users.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        return res.status(401).send({ error: 'Incorrect email' })
      }

      // CHECK THE PASSWORD
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({ error: 'Incorrect password' })
      }

      // ALWAYS REMOVE THE PASSWORD FROM THE USER OBJECT
      delete user._doc.password
      req.session.uid = user._id
      res.send(user)
    }).catch(error => {
      console.log('[LOGIN ERROR]', error)
      res.status(500).send({ error: 'Unable to login' })
    })
})

// REMOVE THE ACTIVE SESSION FROM THE DATABASE
router.delete('/auth/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.log('[LOGOUT ERROR]', error)
      return res.status(500).send({ error: 'Unable to logout' })
    }
    res.send({
      message: 'Logout successful'
    })
  })
})

// Validates req.session.uid
router.get('/auth/authenticate', (req, res) => {
  Users.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Please login to continue'
        })
      }
      delete user._doc.password
      res.send(user)
    }).catch(error => {
      console.log('[AUTH ERROR]', error)
      res.status(500).send({ error: 'Unable to authenticate' })
    })
})

module.exports = {
  router,
  session
}