const express = require('express');

// create server
const server = express();
// create other part of server (sockets and serve front-end)
const app = require('http').createServer(server);

server.use(express.static(__dirname + '/../client/dist/'))

const cors = require('cors')
const whitelist = ['http://localhost:8080', 'https://partyox.herokuapp.com/']
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

// connect socket to server
const io = require('socket.io')(app, {
  origins: '*:*',
  pingTimeout: 500
})

// socket stuff
const Parties = require('./models/party')
const Members = require('./models/member')

const oxen = {}
const members = {}

io.on('connection', socket => {
  // new connection to client

  let user = undefined
  let member = undefined

  const errorHandler = error => {
    if (error.name === 'ValidationError') {
      error = 'Invalid input'
    }
    socket.emit('errorOccurred', error)
  }

  const getParties = () => {
    return new Promise((resolve, reject) => Parties.find({ userId: user._id })
      .then(parties => {
        Promise.all(parties.map(party =>
          Members.find({ partyId: party._id })
            .then(members => {
              party._doc.members = members
            })
            .catch(errorHandler)
        )).then(() => resolve(parties))
      })
      .catch(errorHandler)
    )
  }

  // notify client of successful connection
  socket.emit('connected', {
    socket: socket.id,
    message: 'Succesfully connected'
  })

  socket.on('setUser', userData => {
    // update user obj
    user = userData;
    oxen[user._id] = socket

    // send back list of parties for user
    getParties().then(parties => socket.emit('parties', parties))

    // try {
    //   const parties = await Parties.find({ userId: user._id })
    //   parties.forEach(party => {
    //     party.members = await Members.find({ partyId: party._id })
    //   })
    // } catch(error) {
    //   errorHandler(error)
    // }
  })

  socket.on('newParty', party => {
    // must be logged in
    if (!user) {
      return errorHandler('You must be logged in to create a party')
    }

    // has to be a number of at least 1
    if (typeof party.memberLimit !== 'number' || party.memberLimit < 1) {
      return socket.emit('errorOccurred', 'Party Limit must be at least 1')
    }

    const partyObj = {
      name: party.name,
      memberLimit: party.memberLimit,
      userId: user._id
    }

    // create party on model
    Parties.create(partyObj)
      .then(party => socket.emit('party', { ...party._doc, members: [] }))
      .catch(errorHandler)
  })

  socket.on('deleteParty', partyId => {
    Parties.findByIdAndRemove(partyId)
      .then(() => socket.emit('partyDeleted', partyId))
      .catch(errorHandler)
  })

  const kickOutMember = memberId => {
    if (!user) {
      return errorHandler('You must be an ox to kick out a member.')
    }

    Members.findByIdAndRemove(memberId)
      .then(() =>
        getParties().then(parties => socket.emit('parties', parties))
      )
      .catch(errorHandler)
  }
  socket.on('kickOutMember', kickOutMember)

  socket.on('joinParty', ({ name, partyCode }) => {
    // Join the party
    Parties.findOne({ code: partyCode })
      .then(party => {
        Members.find({ partyId: party._id }).then(memberList => {
          if (memberList.length >= party.memberLimit) {
            return socket.emit('errorOccurred', 'Member limit reached')
          }
          Members.create({ name, partyId: party._id })
            .then(memberData => {
              member = memberData // store member locally to this socket connection
              members[member._id.toString()] = socket
              socket.emit('partyJoined', memberData)
            })
            .catch(errorHandler)
        })
      })
      .catch(errorHandler)
  })

  socket.on('deleteSuggestion', ({ partyId, suggestionId }) => {
    if (!user) {
      return errorHandler('You must be a user to delete a suggestion')
    }

    Parties.findById(partyId)
      .then(party => {
        const suggestion = party.suggestions.id(suggestionId)
        const memberId = suggestion.memberId.toString()
        suggestion.remove()
        party.save(error => {
          if (error) {
            return errorHandler(error)
          }

          const member = members[memberId]
          if (member) {
            member.emit("updateSuggestions", party.suggestions)
          }
          socket.emit("updateSuggestions", { partyId, suggestions: party.suggestions });
        })
      })
      .catch(errorHandler)
  })


  socket.on('acceptSuggestion', ({ partyId, suggestionId }) => {
    if (!user) {
      return errorHandler('You must be a user to accept a suggestion')
    }

    Parties.findById(partyId)
    .then(party => {
      const suggestion = party.suggestions.id(suggestionId)
      const memberId = suggestion.memberId.toString()
        party.queue = party.queue.concat({
          name: suggestion.name,
          artist: suggestion.artist,
          memberId
        })
        suggestion.remove()

        party.save(error => {
          if (error) {
            return errorHandler(error)
          }

          const member = members[memberId]
          if (member) {
            member.emit('updateSuggestions', party.suggestions)
            member.emit('updateQueue', party.queue)
          }
          socket.emit('updateSuggestions', { partyId, suggestions: party.suggestions })
          socket.emit('updateQueue', { partyId, queue: party.queue })
        })
      })
      .catch(errorHandler)
    })

    socket.on('clearSong', ({ partyId, songId }) => {
      if (!user) {
        return errorHandler('You must be a user to accept a suggestion')
      }

      Parties.findById(partyId)
      .then(party => {
        const song = party.queue.id(songId)
        song.remove()

        party.save(error => {
          if (error) {
            return errorHandler(error)
          }

          socket.emit('updateQueue', { partyId, queue: party.queue })
        })
      })
      .catch(errorHandler)
    })

  socket.on('getParty', partyCode => {
    Parties.findOne({ code: partyCode })
      .then(party => {
        // console.log(party)
        if (!party) {
          return errorHandler('Invalid party code')
        }
        socket.emit('partyGot', party);
      })
      .catch(errorHandler)
  })

  socket.on('newSuggestion', suggestionData => {
    if (!member) {
      return errorHandler('Must be a member to create a suggestion.')
    }

    Parties.findById(member.partyId)
      .then(party => {
        party.suggestions = party.suggestions.concat({
          name: suggestionData.songName,
          artist: suggestionData.artistName,
          memberId: member._id
        })
        party.save(error => {
          if (error) {
            return errorHandler('An error occurred')
            console.warn(error)
          }
          Parties.findById(member.partyId).then(p => console.log(p))
          socket.emit('updateSuggestions', party._doc.suggestions.filter(suggestion => member._id.toString() == suggestion._doc.memberId.toString()))
          oxen[party.userId.toString()].emit("updateSuggestions", { partyId: party._id, suggestions: party.suggestions })
        })
      })
  })

  socket.on('disconnect', () => {
    if (member) {
      Members.findByIdAndRemove(member._id)
        .then(() =>
          getParties().then(parties => socket.emit('parties', parties))
        )
        .catch(errorHandler)

      delete members[member._id.toString()]
    } else if (user) {
      delete oxen[user._id.toString()]
    }
  })
})

server.use('/api/*', (error, req, res) => res.status(400).send(error))
server.use('*', (req, res) => res.status(404).send('<h1>404 NO PAGE HERE</h1>'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Sockets & Server started on port: ${port}`))
// server.listen(port, () => console.log(`Server started on port: ${port}`))