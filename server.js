const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const indexRouter = require('./routes/index')
require('./mongo-connection')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug')
app.use(bodyParser.json())

app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('server listening')
})