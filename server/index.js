const express = require('express')
const server = express()

const cors = require('cors')
const whitelist = ['http://localhost:8080', 'http://192.168.0.34:8080']
const corsOptions = {
  origin: function (origin, callback) {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
server.use(cors(corsOptions))

const bp = require('body-parser')
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))

// This is the AUTH GATE
const auth = require('./auth/routes')
server.use('/', auth.session)
server.use('/', auth.router)

server.use((req, res, next) => {
  if (!req.session.uid) {
    return res.status(401).send({ error: 'Please login to continue' })
  }
  next()
})

require('./db/db-config')


const routes = {
  users: require('./routes/user'),
  parties: require('./routes/party'),
  members: require('./routes/member')
}

server.use('/api/users/', routes.users)
// server.use('/api/parties/', routes.parties)
// server.use('/api/members/', routes.members)

// create server for socket and connect socket to it
const app = require('http').createServer(server)
const io = require('socket.io')(app, {
  origins: '*:*'
})

// socket stuff
const Parties = require('./models/party')

io.on('connection', socket => {
  // new connection
  console.log('User connected')
  let user = undefined
  const errorHandler = error => {
    console.log(error)
    if (error.name === 'ValidationError') {
      error = 'Invalid input'
    }
    socket.emit('errorOccurred', error)
  }

  // notify connector of successful
  socket.emit('connected', {
    socket: socket.id,
    message: 'Succesfully connected'
  })

  socket.on('setUser', userData => {
    user = userData;
    // send back list of parties for user
    Parties.find({ userId: user._id })
      .then(parties => socket.emit('parties', parties))
      .catch(errorHandler)
  })

  socket.on('newParty', party => {
    // create party on model
    Parties.create({ name: party.name, userId: user._id })
      .then(party => socket.emit('party', party))
      .catch(errorHandler)
  })
})


server.use('/api/*', (error, req, res) => res.status(400).send(error))
server.use('*', (req, res) => res.status(404).send('<h1>404 NO PAGE HERE</h1>'))

const port = 3000
app.listen(port, () => console.log(`Sockets started on port: ${port}`))
// server.listen(port, () => console.log(`Server started on port: ${port}`))