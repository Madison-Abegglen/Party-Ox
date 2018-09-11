const expressSession = require('express-session')
const MongoStore = require('connect-mongodb-session')(expressSession)

const store = new MongoStore({
  uri: 'mongodb://partyox:partyox1@ds044689.mlab.com:44689/partyox',
  collection: 'Sessions'
})

store.on('error', error => console.error('[SESSION ERROR]', error))

const session = expressSession({
  secret: 'Uhhhhhmmmm, I guess this is the secret: YoTE!',
  cookie: {
    maxAage: 1000 * 60 * 60 * 24 * 7 // a week
  },
  store,
  resave: true,
  saveUninitialized: true
})

module.exports = session