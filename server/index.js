const server = require('express')()

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

// server.use('/api/users/', routes.users)
// server.use('/api/parties/', routes.parties)
// server.use('/api/members/', routes.members)

// create server for socket and connect socket to it
// const socketServer = require('http').createServer(server)
// const io = require('socket.io')(socketServer)

// // socket stuff
// const connectedUsers = {}
// const rooms = {}

// io.on('connection', socket => {
//   // new connection
//   console.log('User connected')

//   // notify connector of successful
//   socket.emit('CONNECTED', {
//     socket: socket.id,
//     message: 'Succesfully connected'
//   })

//   // join a room
//   socket.on('join', data => {
//     if (data.roomName) {
//       socket.emit('joinedRoom', {
//         roomName: data.roomName
//       })

//       // check if user is member
//       const newUser = { wow: 'this needs some stuff' }
//       rooms[data.roomName].members.push(newUser)
//       io.to(data.roomName).emit('newMember', newUser)
//       // else if user is ox
//       rooms[data.roomName].ox = { wow: 'this needs some stuff' }
//     }

//   })
// })


server.use('/api/*', (error, req, res) => res.status(400).send(error))
server.use('*', (req, res) => res.status(404).send('<h1>404 NO PAGE HERE</h1>'))

const port = 3000
server.listen(port, () => console.log(`Server started on port: ${port}`))