const mongoose = require('mongoose')
const { Schema } = mongoose
const fetch = require('node-fetch')

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
      validator: (value, callback) => {
        fetch(`https://api.trumail.io/v2/lookups/json?email=${encodeURIComponent(value)}`)
          .then(res => res.json())
          .then(json => callback(json.validFormat && json.deliverable))
          .catch(() => callback(false))
      },
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

function runValidators() {
  this.setOptions({ runValidators: true })
}
schema.pre('update', runValidators)
schema.pre('updateOne', runValidators)
schema.pre('updateMany', runValidators)
schema.pre('findOneAndUpdate', runValidators)
schema.pre('create', runValidators)

module.exports = mongoose.model('User', schema)