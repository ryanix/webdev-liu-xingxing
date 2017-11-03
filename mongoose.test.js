var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs5610', {useMongoClient: true})

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  dob: Date,
  salary: Number,
})


var UserModel = mongoose.model('UserModel', UserSchema, 'testModel')

var pep = {username: 'pep', firstname: 'dadada',  lastname: 'haha'}

UserModel.create(pep, function (err, doc) {
  if (err) {
    console.log(err)
  }
  if (doc) {
    console.log(doc)
  }
})

