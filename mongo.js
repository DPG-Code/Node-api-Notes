const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI

// Connect whit mongoDB
mongoose.connect(connectionString)
  .then(() => {
    console.log('Connection success')
  }).catch(err => {
    console.error(err)
  })

process.on('uncaughtException', () => {
  mongoose.connection.disconnect()
})
