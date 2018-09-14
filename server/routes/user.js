const router = require('express').Router()
const Users = require('../models/user')

router.delete('/', (req, res, next) =>
  Users.findByIdAndRemove(req.session.uid)
    .then(() => res.send({ message: 'Successfully deleted account.' }))
    .catch(next)
)

module.exports = router