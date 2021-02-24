const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/upload', { useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('we are connected to mongodb!')
})