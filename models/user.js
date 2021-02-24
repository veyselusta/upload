const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  image: String
})

module.exports = mongoose.model('User', UserSchema)