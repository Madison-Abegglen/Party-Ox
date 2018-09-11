const mongoose = require('mongoose')
const { connection } = mongoose
const connectionString = `mongodb://partyox:partyox1@ds044689.mlab.com:44689/partyox`

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.once('open', () => console.log('Connected to database'))
connection.on('error', error => console.error(error))