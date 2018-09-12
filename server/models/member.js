const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  partyId: {
    type: Schema.Types.ObjectId,
    ref: 'Party',
    required: true
  }
})

module.exports = mongoose.model('Member', schema)