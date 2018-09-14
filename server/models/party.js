const mongoose = require('mongoose')
const { Schema } = mongoose
const Chance = require('chance')
const chance = new Chance()

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
    default: () => chance.string({length: 5, pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'})
  },
  memberLimit: {
    type: Number,
    default: Number.MAX_SAFE_INTEGER
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Party', schema)