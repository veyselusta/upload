const express = require('express')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
//connect mongoDB database
require('./mongo-connection')

const app = express()

app.use(bodyParser.json())

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('server listening')
})