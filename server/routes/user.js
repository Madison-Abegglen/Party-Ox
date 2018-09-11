const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: value => {},
      message: props => `${props.value} is not a valid email`
    }
  },
  password: {
    type: String,
    required: true
  }
})

const bcrypt = require('bcrypt')
const SALT = 10

schema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, SALT)
}
schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', schema)