const expressSession = require('express-session');
const mongoStore = require('connect-mongodb-session')(expressSession);

const store = new mongoStore({
  uri: 'mongodb://partyox:partyox1@ds044689.mlab.com:44689/partyox',
  collection: 'Sessions'
});

store.on('error', function (err) {
  console.log('[SESSION ERROR]', err);
});

// @ts-ignore
const session = expressSession({
  secret: 'the sky is way too angry today',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
  },
  store,
  resave: true,
  saveUninitialized: true
});

module.exports = session;
