var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var connectionString = 'mongodb://localhost/cs5610'; // for local
if(process.env.MLAB_WEBDEV_USERNAME) { // check if running remotely
  var username = process.env.MLAB_WEBDEV_USERNAME; // get from environment
  var password = process.env.MLAB_WEBDEV_PASSWORD;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds133104.mlab.com:33104/heroku_9t4lvlcb'; // use yours
}

var db = mongoose.connect(connectionString,{useMongoClient:true});

module.exports = db;
