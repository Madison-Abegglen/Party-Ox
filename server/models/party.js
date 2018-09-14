const mongoose = require('mongoose')
const { Schema } = mongoose

const Song = new Schema({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  memberId: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  }
})

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  suggestions: [Song],
  queue: [Song],
  code: {
    type: String,
    default: '0123'
  },
  memberLimit: {
    type: Number,
    default: Infinity
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Party', schema)