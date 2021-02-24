const express = require('express')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('server listening')
})