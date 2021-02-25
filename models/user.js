const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
    autopopulate: true
  }]
})

UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User', UserSchema)