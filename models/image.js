const mongoose = require('mongoose')

ImageSchema = new mongoose.Schema({
  image: [{
    type: String
  }]
})

module.exports = mongoose.model('Image', ImageSchema)