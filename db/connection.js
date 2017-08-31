const mongoose = require('mongoose')
const Schema = mongoose.Schema

var AuthorSchema = new Schema({
  name: String,
  publisher: String,
  age: Number,
  active: Boolean
})

var Author = mongoose.model('Author', AuthorSchema)

module.exports = Author
module.exports = mongoose
